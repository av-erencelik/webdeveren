import { motion } from "framer-motion";
import FadeInWhenVisible from "./FadeInWhenVisible";
const progress = {
  offscreen: { width: 0 },
  onscreen: {
    width: "100%",
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-earth-300">{title}</h3>
      <motion.div className="h-[2px] w-full bg-earth-300" variants={progress}></motion.div>
    </div>
  );
};

export default SectionTitle;
