import { cn } from "@/utils/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import DarkModeToggle from "../Buttons/DarkModeToggle";
import PageLink from "../Buttons/PageLink";
import FadeInWhenVisible from "../utils/FadeInWhenVisible";

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

const Navbar = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [showShadow, setShowShadow] = useState(false);

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
          "fixed top-0 right-0 z-40 flex w-full items-center justify-between bg-earth-50/90 p-2 pr-5 transition-all duration-500 dark:bg-cinder-900/90 lg:pl-5 lg:pr-10",
          showShadow && "-top-3 shadow-md transition-colors duration-500 dark:shadow-sm dark:shadow-zinc-900"
        )}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.nav variants={itemUp}>
          <Link href="/" locale={router.locale}>
            <Image src="/logo.png" alt="logo" width={100} height={100} />
          </Link>
        </motion.nav>

        <motion.nav variants={itemUp}>
          <motion.ul className="flex gap-5" variants={container} initial="hidden" animate="show">
            <motion.li className="hidden md:block" variants={itemUp}>
              <PageLink to="#about" name={t("nav.about")} />
            </motion.li>
            <motion.li className="hidden md:block" variants={itemUp}>
              <PageLink to="#skills" name={t("nav.skills")} />
            </motion.li>
            <motion.li className="hidden md:block" variants={itemUp}>
              <PageLink to="#projects" name={t("nav.projects")} />
            </motion.li>
            <motion.li className="hidden md:block" variants={itemUp}>
              <PageLink to="#blog" name={t("nav.blog")} />
            </motion.li>
            <motion.li className="hidden md:block" variants={itemUp}>
              <PageLink to="#contact" name={t("nav.contact")} />
            </motion.li>
            <motion.li className="flex items-center" variants={itemUp}>
              <DarkModeToggle />
            </motion.li>

            <motion.li className="flex items-center text-sm font-thin text-earth-300" variants={itemUp}>
              <span
                className={cn(
                  "cursor-pointer font-semibold text-gray-400 hover:text-earth-300",
                  router.locale === "en" && "text-earth-300"
                )}
              >
                <Link href="/" locale="en">
                  En
                </Link>
              </span>
              /
              <span
                className={cn(
                  "cursor-pointer font-semibold text-gray-400 hover:text-earth-300",
                  router.locale === "tr" && "text-earth-300"
                )}
              >
                <Link href="/" locale="tr">
                  Tr
                </Link>
              </span>
            </motion.li>
          </motion.ul>
        </motion.nav>
      </motion.div>
      <div></div>
    </FadeInWhenVisible>
  );
};

export default Navbar;
