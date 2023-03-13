import FadeInWhenVisible from "@/components/utils/FadeInWhenVisible";
import Image from "next/image";
import { motion } from "framer-motion";
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

const BlogHero = () => {
  return (
    <FadeInWhenVisible>
      <motion.section className="mt-[91px] flex h-[200px] w-full items-center lg:h-[300px]" variants={itemUp}>
        <div className=" mx-auto flex w-full max-w-[1500px] items-center justify-between px-8 lg:px-28">
          <div className="flex flex-col gap-1">
            <motion.h1 className="text-3xl font-bold text-earth-300 lg:text-6xl" variants={itemUp}>
              Web Dev Eren
            </motion.h1>
            <motion.h4
              className="max-w-[800px] text-sm text-cinder-700 dark:text-gray-400 lg:text-base"
              variants={itemLeft}
            >
              Join me on my web development journey and discover the intersection of code and creativity.{" "}
              <span className="hidden md:inline">
                From personal stories to tech tips, my blog has something for everyone!
              </span>
            </motion.h4>
          </div>
          <motion.div variants={itemRight} className="hidden lg:block">
            <Image src="/blog.png" alt="blog" width={300} height={300} />
          </motion.div>
        </div>
      </motion.section>
    </FadeInWhenVisible>
  );
};

export default BlogHero;
