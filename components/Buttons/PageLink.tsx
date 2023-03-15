import Link from "next/link";
import { useRouter } from "next/router";

const PageLink = ({ to, name, route = false }: { to: string; name: string; route?: boolean }) => {
  return (
    <>
      {route ? (
        <Link href={`${to}`} className="group text-lg font-semibold text-earth-300 transition duration-300">
          {name}
          <span className="block h-0.5 max-w-0 bg-earth-300 transition-all duration-500 group-hover:max-w-full"></span>
        </Link>
      ) : (
        <a href={`${to}`} className="group text-lg font-semibold text-earth-300 transition duration-300">
          {name}
          <span className="block h-0.5 max-w-0 bg-earth-300 transition-all duration-500 group-hover:max-w-full"></span>
        </a>
      )}
    </>
  );
};

export default PageLink;
