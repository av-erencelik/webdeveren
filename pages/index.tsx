import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import HeroImage from "@/components/hero/HeroImage";
import HeroText from "@/components/hero/HeroText";
import SocialLinks from "@/components/buttons/SocialLinks";
import AboutSection from "@/components/about/AboutSection";
import MobileMenu from "@/components/navbar/MobileMenu";

export default function Home() {
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
      <Navbar />
      <main className="mx-auto min-h-screen w-full max-w-[1500px] px-10 lg:px-28">
        <section className="flex h-screen w-full items-center justify-between lg:gap-10 xl:gap-20" id="home">
          <div className="lg:max-w-[50%]">
            <HeroText />
          </div>
          <HeroImage />
        </section>
        <section className="flex w-full flex-col justify-center gap-10 lg:min-h-[700px]" id="about">
          <AboutSection />
        </section>
      </main>
      <SocialLinks />
      <MobileMenu />
    </>
  );
}
