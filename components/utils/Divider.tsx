import { motion } from "framer-motion";

const progress = {
  offscreen: { width: 0 },
  onscreen: {
    width: "100%",
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      delay: 0.7,
    },
  },
};

const Divider = () => {
  return <motion.div className="h-[2px] w-full max-w-[1500px] bg-earth-300" variants={progress}></motion.div>;
};

export default Divider;
