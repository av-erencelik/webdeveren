import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import DarkModeToggle from "../Buttons/DarkModeToggle";
import PageLink from "../Buttons/PageLink";
const Navbar = () => {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 flex w-full items-center justify-between bg-earth-50 py-3 pl-5 pr-10 shadow-md dark:bg-night/90 dark:shadow-sm dark:shadow-zinc-900"
      )}
      id="home"
    >
      <Link href="#home">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </Link>

      <nav>
        <ul className="flex gap-5">
          <li>
            <PageLink to="about" />
          </li>
          <li>
            <PageLink to="projects" />
          </li>
          <li>
            <PageLink to="blog" />
          </li>
          <li>
            <PageLink to="Contact" />
          </li>
          <li className="flex items-center">
            <DarkModeToggle />
          </li>

          <li className="flex items-center text-sm font-thin text-earth-300">
            <span className="cursor-pointer font-semibold text-earth-300">
              <Link href="/">En</Link>
            </span>
            /
            <span className="cursor-pointer text-gray-400 transition-all hover:text-earth-300">
              <Link href="/">Tr</Link>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
