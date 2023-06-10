import BlogHero from "@/components/blog/hero/BlogHero";
import Head from "next/head";
import { groq } from "next-sanity";
import FadeInWhenVisible from "@/components/utils/FadeInWhenVisible";
import BlogList from "@/components/blog/BlogList";
import { client } from "@/libs/sanity.client";
import Divider from "@/components/utils/Divider";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Blog = ({ preview, data }: { preview: boolean; data: Post[] }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>Eren Çelik - Blog</title>
        <meta name="google-site-verification" content="dXQ55giVy7l2I-W7sVfBXPp4X1go0DwFixGvl4hrgC8" />
        <meta name="description" content={t("meta.blogDesc") as string} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <BlogHero description={t("blog.heroDescFirst") as string} />
      <main className="mx-auto w-full max-w-[1500px] flex-1 overflow-hidden px-8 py-2 lg:px-28">
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
*[_type=='post']{slug,"title": title[$lang],"body": body[$lang],"description": description[$lang],"categories": categories[$lang],mainImage,publishedAt,featured} {
  ...,
  author->,
  categories[]->
 } | order(publishedAt desc)[0...10]
`;
export const getStaticProps = async ({ preview = false, locale }: { preview: boolean; locale: string }) => {
  const data = await client.fetch(query, { lang: locale });

  return { props: { preview, data, ...(await serverSideTranslations(locale, ["common"])) }, revalidate: 600 };
};

export default Blog;
