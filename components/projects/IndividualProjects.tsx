import Image, { type StaticImageData } from "next/image";
import { Code2, ScreenShare } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/utils/utils";
const rightIn = {
  offscreen: { x: 200, opacity: 0 },
  onscreen: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
};
const leftIn = {
  offscreen: { x: -200, opacity: 0 },
  onscreen: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
};
export type ProjectType = {
  hrefs: { demo: string; code: string };
  name: string;
  src: StaticImageData;
  description: string;
  techs: string[];
  reverse?: boolean;
};
const IndividualProjects = ({ hrefs, name, src, description, techs, reverse }: ProjectType) => {
  return (
    <>
      <motion.a
        className=" block cursor-pointer text-center text-2xl font-bold text-cinder-700 underline transition-colors hover:text-earth-300 dark:text-earth-50 dark:hover:text-earth-300 lg:hidden lg:text-right"
        href={hrefs.demo}
        target="_blank"
        rel="noreferrer"
        variants={reverse ? rightIn : leftIn}
      >
        {name}
      </motion.a>
      <motion.div
        className="block w-full max-w-[600px] overflow-hidden rounded-md"
        variants={reverse ? rightIn : leftIn}
      >
        <Image src={src} width={600} height={300} alt="twitato" className="object-cover" />
      </motion.div>

      <motion.div
        className={cn(
          "my-auto flex flex-col justify-center gap-5 lg:max-w-[50%] lg:items-end lg:gap-10 lg:p-5",
          reverse && "lg:items-start"
        )}
        variants={reverse ? leftIn : rightIn}
      >
        <a
          className={cn(
            "hidden cursor-pointer text-center text-2xl font-bold text-cinder-700 underline transition-colors hover:text-earth-300 dark:text-earth-50 dark:hover:text-earth-300 lg:block lg:text-right"
          )}
          href={hrefs.demo}
          target="_blank"
          rel="noreferrer"
        >
          {name}
        </a>
        <p className={cn("text-justify text-cinder-700 dark:text-gray-400 lg:text-right", reverse && "lg:text-left")}>
          {description}
        </p>
        <p className="flex flex-wrap gap-1 lg:gap-2">
          {techs.map((tech, index) => (
            <span
              key={index}
              className="rounded-xl border border-cinder-700 bg-cinder-700 p-2 text-xs text-earth-50  dark:border-earth-300 dark:bg-transparent dark:text-earth-300"
            >
              {tech}
            </span>
          ))}
        </p>
        <div className={cn("ml-auto flex gap-5", reverse && "lg:ml-0")}>
          <a
            href={hrefs.demo}
            target="_blank"
            rel="noreferrer"
            className="text-cinder-700 transition-colors hover:text-earth-300 dark:text-earth-50 dark:hover:text-earth-300"
          >
            <ScreenShare size={20} />
          </a>
          <a
            href={hrefs.code}
            target="_blank"
            rel="noreferrer"
            className="text-cinder-700 transition-colors hover:text-earth-300 dark:text-earth-50 dark:hover:text-earth-300"
          >
            <Code2 size={20} />
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default IndividualProjects;
