import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import HeroImage from "@/components/hero/HeroImage";
import HeroText from "@/components/hero/HeroText";
import SocialLinks from "@/components/buttons/SocialLinks";
import AboutSection from "@/components/about/AboutSection";
import MobileMenu from "@/components/navbar/MobileMenu";
import SkillsSection from "@/components/studio/skills/SkillsSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import { groq } from "next-sanity";
import { client } from "@/libs/sanity.client";
import { PreviewSuspense } from "next-sanity/preview";
import PreviewHomePage from "@/components/studio/preview/PreviewHomePage";
import BlogSection from "@/components/blog/BlogSection";
import ContactSection from "@/components/contact/ContactSection";
export default function Home({ preview, data }: { preview: boolean; data: Post[] }) {
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
        <meta name="description" content="Enthusiastic frontend developer Mehmet Eren Çelik" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className="mx-auto min-h-screen w-full max-w-[1500px] px-8 lg:px-28">
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
      <SocialLinks />
      <MobileMenu />
    </>
  );
}
const query = groq`
*[_type=='post'][0...2]{slug,title,description,mainImage,publishedAt,categories} {
  ...,
  author->,
  categories[]->
 } | order(_createdAt desc)
`;
export const getStaticProps = async ({ preview = false }) => {
  if (preview) {
    return { props: { preview } };
  }

  const data = await client.fetch(query);

  return { props: { preview, data }, revalidate: 600 };
};
