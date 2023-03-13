import BlogLayout from "@/components/layouts/BlogLayout";
import HomeLayout from "@/components/layouts/HomeLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
export default function App({ Component, pageProps, router }: AppProps) {
  if (router.pathname.startsWith("/blog")) {
    return (
      <>
        <style jsx global>{`
          html {
            font-family: ${lato.style.fontFamily};
          }
        `}</style>
        <BlogLayout>
          <Component {...pageProps} />
        </BlogLayout>
      </>
    );
  } else if (router.pathname.startsWith("/studio")) {
    return (
      <>
        <style jsx global>{`
          html {
            font-family: ${lato.style.fontFamily};
          }
        `}</style>

        <Component {...pageProps} />
      </>
    );
  }
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${lato.style.fontFamily};
        }
      `}</style>
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
    </>
  );
}
