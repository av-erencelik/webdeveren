import { cn } from "@/utils/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { LayoutGrid, X } from "lucide-react";
import { useTranslation } from "next-i18next";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("common");
  return (
    <>
      <button
        className="fixed bottom-4 right-4 block text-earth-300 md:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <LayoutGrid size={24} />
      </button>
      <div
        className={cn(
          "fixed bottom-0 left-0 flex flex-col-reverse rounded-t-xl bg-earth-50/90 text-earth-300 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dark:bg-gray-900/90",
          isOpen && "w-full"
        )}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "112px" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex h-28 w-screen flex-wrap justify-center p-3"
            >
              <a className="my-auto w-1/3 text-center font-semibold" href="#about">
                {t("nav.about")}
              </a>
              <a className="my-auto w-1/3 text-center font-semibold" href="#skills">
                {t("nav.skills")}
              </a>
              <a className="my-auto w-1/3 text-center font-semibold" href="#projects">
                {t("nav.projects")}
              </a>
              <a className="my-auto w-1/3 text-center font-semibold" href="#blog">
                {t("nav.blog")}
              </a>
              <a className="my-auto w-1/3 text-center font-semibold" href="#contact">
                {t("nav.contact")}
              </a>
              <button onClick={() => setIsOpen((prev) => !prev)} className="absolute bottom-4 right-4 text-earth-300">
                <X size={24} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default MobileMenu;
