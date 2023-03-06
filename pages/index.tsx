import Navbar from "@/components/navbar/Navbar";
import { cn } from "@/utils/utils";
import Head from "next/head";
import HeroImage from "@/components/hero/HeroImage";
import HeroText from "@/components/hero/HeroText";
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
      <main className=" mx-auto h-screen w-full max-w-[1280px]">
        <section className="flex h-[1000px] w-full items-center gap-32" id="home">
          <div className=" max-w-[50%]">
            <HeroText />
          </div>

          <HeroImage />
        </section>
      </main>
    </>
  );
}
