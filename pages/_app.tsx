import BlogLayout from "@/components/layouts/BlogLayout";
import HomeLayout from "@/components/layouts/HomeLayout";
import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { Source_Sans_Pro } from "next/font/google";
const sansPro = Source_Sans_Pro({ subsets: ["latin"], weight: ["400", "600", "700"] });
function App({ Component, pageProps, router }: AppProps) {
  if (router.pathname.startsWith("/blog")) {
    return (
      <>
        <style jsx global>{`
          html {
            font-family: ${sansPro.style.fontFamily};
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
            font-family: ${sansPro.style.fontFamily};
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
          font-family: ${sansPro.style.fontFamily};
        }
      `}</style>
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
    </>
  );
}
export default appWithTranslation(App);
