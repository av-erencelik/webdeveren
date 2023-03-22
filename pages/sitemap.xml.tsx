import { client } from "@/libs/sanity.client";
import groq from "groq";
import { NextApiResponse } from "next";

export default function SiteMap() {
  return <div>loading</div>;
}

export async function getServerSideProps({ res }: { res: NextApiResponse }) {
  const baseUrl = `https://webdeveren.com`;
  const query = groq`
      *[_type=='post']{slug}
    `;
  const slugs = await client.fetch(query);
  console.log(slugs);
  const posts = slugs.map((post: { slug: { current: string } }) => {
    const slug = post.slug.current === "/" ? "/blog" : `/blog/${post.slug.current}`;
    return `
      <loc>${baseUrl}${slug}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    `;
  });

  const locations = [...posts];
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
            <loc>https://webdeveren.com/blog</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
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
