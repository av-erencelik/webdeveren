import urlFor from "@/libs/urlFor";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import RelativeTime from "@yaireo/relative-time";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
const rightIn = {
  offscreen: { x: 200, opacity: 0 },
  onscreen: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
};
const leftIn = {
  offscreen: { x: -200, opacity: 0 },
  onscreen: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
};
const BlogCard = ({ post, index }: { post: Post; index: number }) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const relativeTime = new RelativeTime({ locale: router.locale });
  return (
    <motion.div
      className="relative flex h-full flex-col gap-3 overflow-hidden rounded-lg bg-white shadow-lg dark:bg-cinder-800"
      variants={index % 2 === 0 ? leftIn : rightIn}
    >
      <Link href={`/blog/${post.slug.current}`} className="relative h-[200px] w-full overflow-hidden md:h-[300px]">
        <Image
          src={urlFor(post.mainImage).url()}
          alt={post.slug.current}
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          className="h-full w-full object-cover transition-all duration-300 hover:scale-105"
        />
      </Link>
      <div className="flex flex-col gap-1 px-5 pb-5">
        <div className="flex justify-between">
          <p className="text-xs text-gray-400 dark:text-gray-400">
            {relativeTime.from(new Date(post.publishedAt)).charAt(0).toLocaleUpperCase() +
              relativeTime.from(new Date(post.publishedAt)).slice(1)}
          </p>
          <div className="flex gap-2">
            {post.categories.map((category) => (
              <span className="text-xs text-earth-300" key={category._rev}>
                {category.title}
              </span>
            ))}
          </div>
        </div>
        <Link href={`/blog/${post.slug.current}`}>
          <h4 className="text-xl font-semibold text-cinder-700 transition-all duration-200 hover:text-earth-300 hover:underline dark:text-earth-50 dark:hover:text-earth-300">
            {post.title}
          </h4>
        </Link>
        <p className="text-sm text-gray-400 line-clamp-2 dark:text-gray-400">{post.description}</p>
        <Link href={`/blog/${post.slug.current}`} className="ml-auto">
          <p className="absolute right-5 bottom-5 flex items-center text-sm font-semibold text-cinder-700 transition-all duration-200 hover:text-earth-300 hover:underline dark:text-earth-50 dark:hover:text-earth-300">
            {t("readMore")} <ArrowUpRight size={16} />
          </p>
        </Link>
      </div>
      {post.featured && (
        <span className="absolute top-[15px] right-[-50px] flex h-[22px] w-[150px] rotate-45 items-end justify-center bg-earth-300 pb-[0.15rem] text-xs font-semibold tracking-wider text-earth-50 dark:bg-cinder-700 dark:text-earth-300">
          {t("featured")}
        </span>
      )}
    </motion.div>
  );
};

export default BlogCard;
