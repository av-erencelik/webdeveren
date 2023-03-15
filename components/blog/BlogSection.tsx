import FadeInWhenVisible from "../utils/FadeInWhenVisible";
import SectionTitle from "../utils/SectionTitle";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import Link from "next/link";
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
const BlogSection = ({ data }: { data: Post[] }) => {
  const { t } = useTranslation("common");
  return (
    <FadeInWhenVisible>
      <motion.div className="flex flex-col justify-center gap-10" variants={itemDown}>
        <SectionTitle title={t("blogSectionTitle")} />
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-20">
          {data.map((post, index) => (
            <FadeInWhenVisible key={post.slug.current} className="h-[350px] w-full md:h-[450px] md:w-1/2">
              <BlogCard post={post} index={index} />
            </FadeInWhenVisible>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            href="/blog"
            className="group relative cursor-pointer overflow-hidden rounded-md border border-earth-300 px-8 py-3 font-medium text-earth-300 hover:text-white"
          >
            <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-earth-300 transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
            <span className="ease relative font-thin tracking-wider text-earth-300 transition duration-300 group-hover:text-cinder-700">
              {t("blogSectionButton")}
            </span>
          </Link>
        </div>
      </motion.div>
    </FadeInWhenVisible>
  );
};

export default BlogSection;
