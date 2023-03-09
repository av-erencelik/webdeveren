import { cn } from "@/utils/utils";
import { AnimatePresence, motion } from "framer-motion";
import { CgMenuGridR } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="fixed bottom-2 right-2 block text-earth-300 md:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <CgMenuGridR size={24} />
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
                About
              </a>
              <a className="my-auto w-1/3 text-center font-semibold" href="#skills">
                Skills
              </a>
              <a className="my-auto w-1/3 text-center font-semibold" href="#project">
                Projects
              </a>
              <a className="my-auto w-1/3 text-center font-semibold" href="#blog">
                Blog
              </a>
              <a className="my-auto w-1/3 text-center font-semibold" href="#contact">
                Contact
              </a>
              <button onClick={() => setIsOpen((prev) => !prev)} className="absolute bottom-2 right-2 text-earth-300">
                <RxCross2 size={24} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default MobileMenu;
