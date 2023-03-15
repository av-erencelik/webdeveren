import { cn } from "@/utils/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import DarkModeToggle from "../buttons/DarkModeToggle";
import PageLink from "../buttons/PageLink";
import FadeInWhenVisible from "../utils/FadeInWhenVisible";
import { useTranslation } from "next-i18next";
import Link from "next/link";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const itemUp = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0, transition: { type: "tween", duration: 1 } },
};

const BlogNavbar = () => {
  const [showShadow, setShowShadow] = useState(false);
  const { t } = useTranslation("common");
  useEffect(() => {
    const onScroll = function () {
      if (window.scrollY >= 150) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <FadeInWhenVisible>
      <motion.div
        className={cn(
          "fixed top-0 right-0 z-40 flex w-full items-center justify-between bg-earth-50/90 p-2 pr-5 transition-all  dark:bg-cinder-900/90 lg:pl-5 lg:pr-10",
          showShadow && "-top-3 shadow-md transition-colors duration-500 dark:shadow-sm dark:shadow-zinc-900"
        )}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.nav variants={itemUp}>
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
          </Link>
        </motion.nav>

        <motion.nav variants={itemUp}>
          <motion.ul className="flex gap-5" variants={container} initial="hidden" animate="show">
            <motion.li variants={itemUp}>
              <PageLink to="/" name={t("blog.nav.home")} route={true} />
            </motion.li>
            <motion.li variants={itemUp}>
              <PageLink to="/blog" name={t("blog.nav.posts")} route={true} />
            </motion.li>
            <motion.li className="flex items-center" variants={itemUp}>
              <DarkModeToggle />
            </motion.li>
          </motion.ul>
        </motion.nav>
      </motion.div>
      <div></div>
    </FadeInWhenVisible>
  );
};

export default BlogNavbar;
