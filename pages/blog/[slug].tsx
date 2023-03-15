import BlogPost from "@/components/blog/BlogPost";
import BlogHero from "@/components/blog/hero/BlogHero";
import { TableOfContents } from "@/components/blog/TableOfContent";
import PreviewPostPage from "@/components/studio/preview/PreviewPostPage";
import Divider from "@/components/utils/Divider";
import FadeInWhenVisible from "@/components/utils/FadeInWhenVisible";
import { client } from "@/libs/sanity.client";
import { parseOutline } from "@/utils/GetNestedHeadings";
import { useIntersectionObserver } from "@/utils/useIntersectionObserver";
import { motion } from "framer-motion";
import { groq } from "next-sanity";
import { PreviewSuspense } from "next-sanity/preview";
import Head from "next/head";
import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Post = ({
  preview,
  data,
  slug,
  headings,
}: {
  preview: boolean;
  data: Post;
  slug: string;
  headings: Heading[];
}) => {
  const [activeId, setActiveId] = useState("");
  const { t } = useTranslation("common");
  useIntersectionObserver(setActiveId);
  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <div className="flex h-screen items-center justify-center">
            <h1>...Loading Preview Mode</h1>
          </div>
        }
      >
        <PreviewPostPage query={query} slug={slug} />
      </PreviewSuspense>
    );
  }
  const outline = parseOutline(headings);
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

      <BlogHero
        title={data.title}
        description={data.description}
        descriptionFollowUp={false}
        publishedAt={data.publishedAt}
        categories={data.categories}
      />
      <main className="mx-auto w-full max-w-[1500px] flex-1 overflow-visible px-0 py-2 lg:px-28">
        <FadeInWhenVisible>
          <Divider />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <motion.div
            className="mt-16 flex justify-between overflow-visible"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.7, duration: 1.5 } }}
          >
            <BlogPost data={data} />
            <div className="sticky top-28 hidden h-[300px] overflow-auto p-5 xl:block">
              <h3 className="mb-3 text-lg text-cinder-700 dark:text-gray-400">{t("blog.toc")}</h3>
              <TableOfContents outline={outline} activeId={activeId} />
            </div>
          </motion.div>
        </FadeInWhenVisible>
      </main>
    </>
  );
};
const query = groq`
*[_type=='post' && slug.current == $slug][0]
{
    ...,
    author->,
    categories[]->
}
`;
const queryHeadings = groq`
*[_type=='post' && slug.current == $slug][0]{ 
  "headings": body[length(style) == 2 && string::startsWith(style, "h")]}
`;
export const getStaticProps = async ({
  preview = false,
  params,
  locale,
}: {
  preview: boolean;
  params: { slug: string };
  locale: string;
}) => {
  const { slug } = params;
  if (preview) {
    return { props: { preview, slug } };
  }

  const data: Post = await client.fetch(query, { slug });
  const headings: { headings: Heading[] } = await client.fetch(queryHeadings, { slug });

  return {
    props: { preview, data, slug, headings: headings.headings, ...(await serverSideTranslations(locale, ["common"])) },
    revalidate: 600,
  };
};
export default Post;
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
