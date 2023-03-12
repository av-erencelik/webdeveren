import { usePreview } from "@/libs/sanity.preview";

const PreviewPostPage = ({ query, slug }: { query: string; slug: string }) => {
  const data: Post = usePreview(null, query, { slug });
  return <div>{data.title}</div>;
};

export default PreviewPostPage;
