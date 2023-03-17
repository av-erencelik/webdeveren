import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

export default function FourOhFour() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-2xl font-semibold text-earth-300">404 - Page Not Found</h1>
      <Link
        href="/"
        className="group relative cursor-pointer overflow-hidden rounded-md border border-earth-300 px-8 py-3 font-medium text-earth-300 hover:text-white"
      >
        <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-earth-300 transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
        <span className="ease relative font-thin tracking-wider text-earth-300 transition duration-300 group-hover:text-cinder-700">
          Back Home
        </span>
      </Link>
    </div>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return { props: { ...(await serverSideTranslations(locale, ["common"])) } };
};
