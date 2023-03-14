import BlogPost from "@/components/blog/BlogPost";
import BlogHero from "@/components/blog/hero/BlogHero";
import { TableOfContents } from "@/components/blog/TableOfContent";
import Divider from "@/components/utils/Divider";
import FadeInWhenVisible from "@/components/utils/FadeInWhenVisible";
import { usePreview } from "@/libs/sanity.preview";
import { parseOutline } from "@/utils/GetNestedHeadings";
import { motion } from "framer-motion";
import { groq } from "next-sanity";
import Head from "next/head";
import { useState } from "react";
import { useIntersectionObserver } from "../../../utils/useIntersectionObserver";

const queryHeadings = groq`
*[_type=='post' && slug.current == $slug][0]{ 
  "headings": body[length(style) == 2 && string::startsWith(style, "h")]}
`;
const PreviewPostPage = ({ query, slug }: { query: string; slug: string }) => {
  const data: Post = usePreview(null, query, { slug });
  const headings: any = usePreview(null, queryHeadings, { slug });
  const outline = parseOutline(headings.headings);
  const [activeId, setActiveId] = useState("");
  useIntersectionObserver(setActiveId);
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
              <h3 className="mb-3 text-lg text-cinder-700 dark:text-gray-400">TABLE OF CONTENTS</h3>
              <TableOfContents outline={outline} activeId={activeId} />
            </div>
          </motion.div>
        </FadeInWhenVisible>
      </main>
    </>
  );
};

export default PreviewPostPage;
