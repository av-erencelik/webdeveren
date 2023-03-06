import { cn } from "@/utils/utils";
import Image from "next/image";
import PageLink from "../Buttons/PageLink";
const Navbar = () => {
  return (
    <div
      className={cn("fixed top-0 left-0 flex w-full items-center justify-between bg-night/90 py-3 pl-5 pr-10")}
      id="home"
    >
      <Image src="/logo.png" alt="logo" width={100} height={100} />
      <nav>
        <ul className="flex gap-5">
          <li>
            <PageLink to="home" />
          </li>
          <li>
            <PageLink to="about" />
          </li>
          <li>
            <PageLink to="projects" />
          </li>
          <li>
            <PageLink to="blog" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
