import Head from "next/head";
import HeroImage from "@/components/hero/HeroImage";
import HeroText from "@/components/hero/HeroText";
import AboutSection from "@/components/about/AboutSection";
import MobileMenu from "@/components/navbar/MobileMenu";
import SkillsSection from "@/components/skills/SkillsSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import { groq } from "next-sanity";
import { client } from "@/libs/sanity.client";
import { PreviewSuspense } from "next-sanity/preview";
import PreviewHomePage from "@/components/studio/preview/PreviewHomePage";
import BlogSection from "@/components/blog/BlogSection";
import ContactSection from "@/components/contact/ContactSection";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home({ preview, data }: { preview: boolean; data: Post[] }) {
  const { t } = useTranslation("common");
  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <div className="flex h-screen items-center justify-center">
            <h1>...Loading Preview Mode</h1>
          </div>
        }
      >
        <PreviewHomePage query={query} />
      </PreviewSuspense>
    );
  }
  return (
    <>
      <Head>
        <title>Web Dev Eren</title>
        <meta name="description" content={t("meta.homeDesc") ? (t("meta.homeDesc") as string) : ""} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="dXQ55giVy7l2I-W7sVfBXPp4X1go0DwFixGvl4hrgC8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className="mx-auto min-h-screen w-full max-w-[1500px] overflow-hidden px-8 lg:px-28">
        <section className="flex h-screen w-full items-center justify-between lg:gap-10 xl:gap-20" id="home">
          <div className="lg:max-w-[50%]">
            <HeroText />
          </div>
          <HeroImage />
        </section>
        <section className="flex min-h-[700px] w-full flex-col justify-center gap-10" id="about">
          <AboutSection />
        </section>
        <section className="flex min-h-[900px] w-full flex-col justify-center gap-10" id="skills">
          <SkillsSection />
        </section>
        <section
          className="flex min-h-[2000px] w-full flex-col justify-center gap-5 lg:min-h-[1500px] xl:gap-10"
          id="projects"
        >
          <ProjectsSection />
        </section>
        <section className="flex min-h-[1000px] w-full flex-col justify-center gap-5 xl:gap-10" id="blog">
          <BlogSection data={data} />
        </section>
        <section className="flex min-h-[600px] w-full flex-col justify-center gap-5 xl:gap-10" id="contact">
          <ContactSection />
        </section>
      </main>
      <MobileMenu />
    </>
  );
}
const query = groq`
*[_type=='post']{slug,"title": title[$lang],"body": body[$lang],"description": description[$lang],"categories": categories[$lang],mainImage,publishedAt,featured} {
  ...,
  author->,
  categories[]->
 } | order(publishedAt desc)[0..1]
`;
export const getStaticProps = async ({ preview = false, locale }: { preview: boolean; locale: string }) => {
  if (preview) {
    return { props: { preview, ...(await serverSideTranslations(locale, ["common"])) } };
  }

  const data = await client.fetch(query, { lang: locale });

  return { props: { preview, data, ...(await serverSideTranslations(locale, ["common"])) }, revalidate: 600 };
};
