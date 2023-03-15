import AboutImage from "@/components/image/AboutImage";
import AboutMeText from "@/components/about/AboutMeText";
import SectionTitle from "@/components/utils/SectionTitle";
import { motion } from "framer-motion";
import FadeInWhenVisible from "@/components/utils/FadeInWhenVisible";
import { useTranslation } from "next-i18next";

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
const AboutSection = () => {
  const { t } = useTranslation("common");
  return (
    <FadeInWhenVisible>
      <motion.div className="flex flex-col justify-center gap-10" variants={itemDown}>
        <SectionTitle title={t("aboutMe")} />
        <div className="flex flex-col items-center gap-10 lg:flex-row-reverse lg:items-start lg:justify-center lg:gap-20">
          <AboutMeText />
          <AboutImage />
        </div>
      </motion.div>
    </FadeInWhenVisible>
  );
};

export default AboutSection;
