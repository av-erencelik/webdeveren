import { motion } from "framer-motion";
import { FileText, Github, Linkedin, Twitter } from "lucide-react";
import { useTranslation } from "next-i18next";
import FadeInWhenVisible from "../utils/FadeInWhenVisible";
const fadeIn = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { opacity: 1, y: 0, transition: { duration: 1 } },
};
const ContactSection = () => {
  const { t } = useTranslation("common");
  return (
    <FadeInWhenVisible>
      <motion.div className="flex flex-col items-center justify-center gap-6" variants={fadeIn}>
        <h2 className="text-5xl font-bold tracking-wide text-earth-300">{t("contact.title")}</h2>
        <p className="max-w-[500px] text-center text-cinder-700 dark:text-gray-400">{t("contact.text")}</p>
        <div className="flex items-center gap-8">
          <a
            href="https://github.com/av-erencelik"
            target="_blank"
            rel="noreferrer"
            className="text-cinder-900  transition-colors hover:text-earth-300 dark:text-earth-50 dark:hover:text-earth-300"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/mehmet-eren-%C3%A7elik-6710b0222/"
            target="_blank"
            rel="noreferrer"
            className="text-cinder-900  transition-colors hover:text-earth-300 dark:text-earth-50 dark:hover:text-earth-300"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://twitter.com/m_eren_celik"
            target="_blank"
            rel="noreferrer"
            className="text-cinder-900  transition-colors hover:text-earth-300 dark:text-earth-50 dark:hover:text-earth-300"
          >
            <Twitter size={18} />
          </a>
          <a
            href="https://twitter.com/m_eren_celik"
            target="_blank"
            rel="noreferrer"
            className="text-cinder-900  transition-colors hover:text-earth-300 dark:text-earth-50 dark:hover:text-earth-300"
          >
            <FileText size={18} />
          </a>
        </div>
        <a
          href="mailto:av.erencelik@gmail.com"
          className="group relative cursor-pointer overflow-hidden rounded-md border border-earth-300 px-8 py-3 font-medium text-earth-300 hover:text-white"
        >
          <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-earth-300 transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
          <span className="ease relative font-thin tracking-wider text-earth-300 transition duration-300 group-hover:text-cinder-700">
            {t("contact.button")}
          </span>
        </a>
      </motion.div>
    </FadeInWhenVisible>
  );
};

export default ContactSection;
