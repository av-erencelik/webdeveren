import { motion } from "framer-motion";
import FadeInWhenVisible from "../utils/FadeInWhenVisible";

const HeroImage = () => {
  return (
    <FadeInWhenVisible>
      <motion.div
        variants={{
          offscreen: {
            y: -200,
            opacity: 0,
          },
          onscreen: {
            y: 0,
            opacity: 1,
            transition: {
              type: "tween",
              duration: 2,
            },
          },
        }}
        className="bg-transparent"
      >
        <motion.img
          src="/hero.png"
          className="w-[500px]"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1.9,
          }}
        />
      </motion.div>
    </FadeInWhenVisible>
  );
};

export default HeroImage;
