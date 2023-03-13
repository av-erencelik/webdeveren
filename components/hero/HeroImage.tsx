import FadeInWhenVisible from "../utils/FadeInWhenVisible";
import { motion } from "framer-motion";
import Image from "next/image";
const HeroImage = () => {
  return (
    <FadeInWhenVisible>
      <motion.div
        className="bg-transparent"
        variants={{
          initial: {
            y: -200,
            opacity: 0,
          },
          show: {
            y: 0,
            opacity: 1,
            transition: {
              type: "tween",
              duration: 4,
            },
          },
        }}
        initial="initial"
        animate="show"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 3.9,
          }}
        >
          <Image src="/hero.png" className="hidden w-[400px] lg:block" alt="hero" width={400} height={400} />
        </motion.div>
      </motion.div>
    </FadeInWhenVisible>
  );
};

export default HeroImage;
