import { motion } from "framer-motion";
import FadeInWhenVisible from "../utils/FadeInWhenVisible";
import SectionTitle from "../utils/SectionTitle";
import Skills from "./Skills";

const itemDown = {
  offscreen: { opacity: 0, y: 100 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const SkillsSection = () => {
  return (
    <FadeInWhenVisible>
      <SectionTitle title="Skills" />
      <motion.div className="flex flex-col justify-center gap-10" variants={itemDown}>
        <Skills />
      </motion.div>
    </FadeInWhenVisible>
  );
};

export default SkillsSection;
