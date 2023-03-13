import { motion } from "framer-motion";
import FadeInWhenVisible from "../utils/FadeInWhenVisible";
import BlogCard from "./BlogCard";

const BlogList = ({ data }: { data: Post[] }) => {
  return (
    <FadeInWhenVisible delay={0.7}>
      <motion.div className="mt-16 flex flex-col flex-wrap items-center justify-between gap-5 md:flex-row md:gap-10">
        {data.map((post, index) => (
          <div key={post.slug.current} className="h-[350px] w-full md:h-[450px] md:w-[47%] lg:w-[47%] xl:w-[48%]">
            <BlogCard post={post} index={index} />
          </div>
        ))}
      </motion.div>
    </FadeInWhenVisible>
  );
};

export default BlogList;
