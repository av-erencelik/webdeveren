import FadeInWhenVisible from "../utils/FadeInWhenVisible";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 2,
    },
  },
};
const item = {
  hidden: { opacity: 0, x: -200 },
  show: { opacity: 1, x: 0, transition: { type: "tween", duration: 2 } },
};
const itemUp = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0, transition: { type: "tween", duration: 2 } },
};
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.016,
    },
  },
};
const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const line =
  "I am a passionate self-taught frontend developer and lifelong learner, dedicated to crafting beautiful and functional websites.";
const HeroText = () => {
  return (
    <FadeInWhenVisible>
      <motion.div
        className="flex flex-col items-start justify-center gap-5 text-earth-300"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h3 className="text-earth-400" variants={itemUp} initial="hidden" animate="show">
          Hi, my name is
        </motion.h3>
        <motion.h1 className="text-7xl font-bold " variants={item} initial="hidden" animate="show">
          Mehmet Eren Çelik
        </motion.h1>
        <motion.h1 className="text-earth-400" variants={sentence} initial="hidden" animate="visible">
          {line.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </motion.h1>
      </motion.div>
    </FadeInWhenVisible>
  );
};

export default HeroText;
