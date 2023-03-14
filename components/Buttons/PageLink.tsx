import Link from "next/link";

const PageLink = ({ to, name }: { to: string; name: string }) => {
  return (
    <a href={`${to}`} className="group text-lg font-semibold text-earth-300 transition duration-300">
      {name}
      <span className="block h-0.5 max-w-0 bg-earth-300 transition-all duration-500 group-hover:max-w-full"></span>
    </a>
  );
};

export default PageLink;
