import FadeInWhenVisible from "@/components/utils/FadeInWhenVisible";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
const itemUp = {
  offscreen: { opacity: 0, y: -50 },
  onscreen: { opacity: 1, y: 0, transition: { type: "tween", duration: 1, delay: 0.7 } },
};
const itemLeft = {
  offscreen: { opacity: 0, x: -200 },
  onscreen: { opacity: 1, x: 0, transition: { type: "tween", duration: 1, delay: 0.7 } },
};
const itemRight = {
  offscreen: { opacity: 0, x: 200 },
  onscreen: { opacity: 1, x: 0, transition: { type: "tween", duration: 1, delay: 0.7 } },
};

const BlogHero = ({
  title = "Eren Çelik",
  description = "",
  descriptionFollowUp = true,
  publishedAt,
  categories,
}: {
  title?: string;
  description?: string;
  publishedAt?: string;
  descriptionFollowUp?: boolean;
  categories?: Category[];
}) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <FadeInWhenVisible>
      <motion.section
        className="mt-[91px] flex min-h-[200px] w-full items-center overflow-hidden lg:h-[300px]"
        variants={itemUp}
      >
        <div className=" mx-auto flex w-full max-w-[1500px] items-center justify-between px-8 lg:px-28">
          <div className="flex flex-col gap-3">
            <motion.h1 className="text-3xl font-bold text-earth-300 lg:text-6xl" variants={itemUp}>
              {title}
            </motion.h1>
            <motion.h4
              className="max-w-[800px] text-sm font-semibold text-cinder-700 dark:text-gray-400 lg:w-[800px] lg:text-base"
              variants={itemLeft}
            >
              {description}{" "}
              {descriptionFollowUp && <span className="hidden md:inline">{t("blog.heroDescSecond")}</span>}
            </motion.h4>
            <div className="flex items-center justify-between">
              <motion.p variants={itemLeft} className="text-xs text-cinder-700 dark:text-gray-400">
                {publishedAt &&
                  new Date(publishedAt).toLocaleDateString(router.locale === "en" ? "en-EN" : "tr-Tr", {
                    month: "long",
                    day: "2-digit",
                    year: "numeric",
                  })}
              </motion.p>
              <div className="flex gap-2">
                {categories &&
                  categories.map((category) => (
                    <div key={category._id} className="rounded-md bg-earth-300 p-1 px-2 text-xs text-earth-50">
                      {category.title}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <motion.div variants={itemRight} className="hidden xl:block">
            <Image src="/blog.png" alt="blog" width={300} height={300} />
          </motion.div>
        </div>
      </motion.section>
    </FadeInWhenVisible>
  );
};

export default BlogHero;
