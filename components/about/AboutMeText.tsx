import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
const rightIn = {
  offscreen: { x: 200 },
  onscreen: { x: 0, transition: { duration: 1, ease: "easeInOut" } },
};

const AboutMeText = () => {
  const { t } = useTranslation("common");
  return (
    <motion.p className="w-full text-justify text-cinder-700 dark:text-gray-400 lg:w-2/4" variants={rightIn}>
      {t("aboutText.first")}
      <br /> <br />
      {t("aboutText.second")}{" "}
      <a
        href="https://oyunveuygulamaakademisi.com/"
        target="_blank"
        rel="noreferrer"
        className="text-earth-300 transition-all duration-300 hover:underline"
      >
        Oyun ve Uygulama Akademisi
      </a>
      {t("aboutText.third")}
      <br /> <br />
      {t("aboutText.fourth")}
      <br /> <br />
      {t("aboutText.fifth")}
    </motion.p>
  );
};

export default AboutMeText;
