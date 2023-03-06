import Link from "next/link";

const PageLink = ({ to }: { to: string }) => {
  return (
    <Link href={`#${to}`} className="group text-lg font-semibold text-earth-300 transition duration-300">
      {to.charAt(0).toUpperCase() + to.slice(1)}
      <span className="block h-0.5 max-w-0 bg-earth-300 transition-all duration-500 group-hover:max-w-full"></span>
    </Link>
  );
};

export default PageLink;
