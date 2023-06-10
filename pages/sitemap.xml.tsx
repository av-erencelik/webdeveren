import { client } from "@/libs/sanity.client";
import groq from "groq";
import { NextApiResponse } from "next";

export default function SiteMap() {
  return <div>loading</div>;
}

export async function getServerSideProps({ res }: { res: NextApiResponse }) {
  const baseUrl = `https://erencelik.dev`;
  const baseUrl2 = `https://erencelik.dev/tr`;
  const query = groq`
      *[_type=='post']{slug}
    `;
  const slugs = await client.fetch(query);
  console.log(slugs);
  const posts = slugs.map((post: { slug: { current: string } }) => {
    const slug = post.slug.current === "/" ? "/blog" : `/blog/${post.slug.current}`;
    return `
      <loc>${baseUrl}${slug}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    `;
  });

  const trPosts = slugs.map((post: { slug: { current: string } }) => {
    const slug = post.slug.current === "/" ? "/blog" : `/blog/${post.slug.current}`;
    return `
      <loc>${baseUrl2}${slug}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    `;
  });

  const locations = [...posts, ...trPosts];
  const createSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${locations
          .map((location) => {
            return `<url>
                      ${location}
                    </url>
                  `;
          })
          .join("")}
          <url>
            <loc>https://erencelik.dev/blog</loc>
            <changefreq>weekly</changefreq>
            <priority>0.9</priority>
         </url>
         <url>
            <loc>https://erencelik.dev/</loc>
            <changefreq>yearly</changefreq>
            <priority>1</priority>
         </url>
         <url>
            <loc>https://erencelik.dev/tr</loc>
            <changefreq>yearly</changefreq>
            <priority>1</priority>
         </url>
         <url>
            <loc>https://erencelik.dev/tr/blog</loc>
            <changefreq>yearly</changefreq>
            <priority>1</priority>
         </url>
    </urlset>
    `;
  res.setHeader("Content-Type", "text/xml");
  res.write(createSitemap());
  res.end();
  return {
    props: {},
  };
}
