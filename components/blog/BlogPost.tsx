import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "./RichTextComponents";

const BlogPost = ({ data }: { data: Post }) => {
  return (
    <article className="max-w-3xl overflow-visible text-cinder-700 dark:text-gray-400">
      <PortableText value={data.body} components={RichTextComponents} />
    </article>
  );
};

export default BlogPost;
