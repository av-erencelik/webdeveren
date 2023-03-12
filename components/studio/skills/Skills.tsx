import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRemix,
  SiTailwindcss,
  SiSass,
  SiFirebase,
} from "react-icons/si";
const itemDown = {
  offscreen: { opacity: 0, y: 100 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};
const item = {
  offscreen: { opacity: 0, y: 100 },
  onscreen: { opacity: 1, y: 0, transition: { ease: "easeInOut", duration: 1 } },
};
const Skills = () => {
  return (
    <motion.div className="mt-10 flex flex-wrap justify-center gap-5" variants={itemDown}>
      <motion.div className="min-w-[125px] max-w-[400px] text-[#ff5722] lg:min-w-[200px]" variants={item}>
        <SiHtml5 size={48} className="mx-auto" />
        <h4 className="pt-3 text-center">HTML</h4>
      </motion.div>
      <motion.div className="min-w-[125px] max-w-[400px] text-[#2965f1] lg:min-w-[200px]" variants={item}>
        <SiCss3 size={48} className="mx-auto" />
        <h4 className="pt-3 text-center">CSS</h4>
      </motion.div>
      <motion.div className="min-w-[125px] max-w-[400px] text-[#f0dc4e] lg:min-w-[200px]" variants={item}>
        <SiJavascript size={48} className="mx-auto" />
        <h4 className="pt-3 text-center">JavaScript</h4>
      </motion.div>
      <motion.div className="min-w-[125px] max-w-[400px] text-[#2d79c7] lg:min-w-[200px]" variants={item}>
        <SiTypescript size={48} className="mx-auto" />
        <h4 className="pt-3 text-center">TypeScript</h4>
      </motion.div>
      <motion.div className="min-w-[125px] max-w-[400px] text-[#61dbfb] lg:min-w-[200px]" variants={item}>
        <SiReact size={48} className="mx-auto" />
        <h4 className="pt-3 text-center">React.js</h4>
      </motion.div>
      <motion.div
        className="min-w-[125px] max-w-[400px] text-cinder-900 dark:text-white lg:min-w-[200px]"
        variants={item}
      >
        <SiNextdotjs size={48} className="mx-auto" />
        <h4 className="pt-3 text-center">Next.js</h4>
      </motion.div>
      <motion.div
        className="min-w-[125px] max-w-[400px] text-cinder-900 dark:text-white lg:min-w-[200px]"
        variants={item}
      >
        <SiRemix size={48} className="mx-auto" />
        <h4 className="pt-3 text-center">Remix.js</h4>
      </motion.div>
      <motion.div className="min-w-[125px] max-w-[400px] text-[#01b7d6] lg:min-w-[200px]" variants={item}>
        <SiTailwindcss size={48} className="mx-auto" />
        <h4 className="pt-3 text-center">Tailwind</h4>
      </motion.div>
      <motion.div className="min-w-[125px] max-w-[400px] text-[#ce679a] lg:min-w-[200px]" variants={item}>
        <SiSass size={48} className="mx-auto" />
        <h4 className="pt-3 text-center">Sass</h4>
      </motion.div>
      <motion.div className="min-w-[125px] max-w-[400px] text-[#f3870c] lg:min-w-[200px]" variants={item}>
        <SiFirebase size={48} className="mx-auto" />
        <h4 className="pt-3 text-center">Firebase</h4>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
