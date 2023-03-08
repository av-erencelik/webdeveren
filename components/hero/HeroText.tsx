import FadeInWhenVisible from "../utils/FadeInWhenVisible";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, x: -200 },
  show: { opacity: 1, x: 0, transition: { type: "tween", duration: 2 } },
};
const itemUp = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0, transition: { type: "tween", duration: 1, delay: 0.7 } },
};
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 2.2,
      staggerChildren: 0.016,
    },
  },
};
const itemDown = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 3.8,
      duration: 1,
    },
  },
};
const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const line =
  "I am a passionate self-taught front-end developer and lifelong learner, dedicated to crafting beautiful and functional websites.";
const HeroText = () => {
  return (
    <FadeInWhenVisible>
      <div className="flex flex-col items-start justify-center gap-2 text-earth-300">
        <motion.h3 className="text-cinder-700 dark:text-gray-400" variants={itemUp} initial="hidden" animate="show">
          Hi, my name is
        </motion.h3>
        <motion.h1
          className="text-[8vw] font-bold text-earth-300 lg:text-[4vw] 2xl:text-7xl"
          variants={item}
          initial="hidden"
          animate="show"
        >
          Mehmet Eren Çelik
        </motion.h1>
        <motion.h1
          className=" max-w-md  text-cinder-700 dark:text-gray-400"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {line.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </motion.h1>
        <motion.a
          href="#contact"
          variants={itemDown}
          initial="hidden"
          animate="visible"
          className="group relative mt-7 cursor-pointer overflow-hidden rounded-md border border-earth-300 px-8 py-3 font-medium text-earth-300 hover:text-white"
        >
          <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-earth-300 transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
          <span className="ease relative font-thin tracking-wider text-earth-300 transition duration-300 group-hover:text-cinder-700">
            Contact Me!
          </span>
        </motion.a>
      </div>
    </FadeInWhenVisible>
  );
};

export default HeroText;
