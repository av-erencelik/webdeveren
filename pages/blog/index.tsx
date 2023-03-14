import BlogHero from "@/components/blog/hero/BlogHero";
import Head from "next/head";
import { groq } from "next-sanity";
import { motion } from "framer-motion";
import FadeInWhenVisible from "@/components/utils/FadeInWhenVisible";
import BlogList from "@/components/blog/BlogList";
import { client } from "@/libs/sanity.client";
import Divider from "@/components/utils/Divider";

const Blog = ({ preview, data }: { preview: boolean; data: Post[] }) => {
  return (
    <>
      <Head>
        <title>Web Dev Eren - Blog</title>
        <meta
          name="description"
          content="Join me on my web development journey and discover the intersection of code and creativity. From personal stories to tech tips, my blog has something for everyone."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <BlogHero />
      <main className="mx-auto w-full max-w-[1500px] flex-1 px-8 py-2 lg:px-28">
        <FadeInWhenVisible>
          <Divider />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <BlogList data={data} />
        </FadeInWhenVisible>
      </main>
    </>
  );
};
const query = groq`
*[_type=='post']{slug,title,description,mainImage,publishedAt,categories,featured} {
  ...,
  author->,
  categories[]->
 } | order(publishedAt desc)[0...10]
`;
export const getStaticProps = async ({ preview = false }) => {
  if (preview) {
    return { props: { preview } };
  }

  const data = await client.fetch(query);

  return { props: { preview, data }, revalidate: 600 };
};

export default Blog;
