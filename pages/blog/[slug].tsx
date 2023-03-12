import PreviewPostPage from "@/components/studio/preview/PreviewPostPage";
import { client } from "@/libs/sanity.client";
import { groq } from "next-sanity";
import { PreviewSuspense } from "next-sanity/preview";
const Post = ({ preview, data, slug }: { preview: boolean; data: Post; slug: string }) => {
  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <div className="flex h-screen items-center justify-center">
            <h1>...Loading Preview Mode</h1>
          </div>
        }
      >
        <PreviewPostPage query={query} slug={slug} />
      </PreviewSuspense>
    );
  }
  return <div>{data.title}</div>;
};
const query = groq`
*[_type=='post' && slug.current == $slug][0]
{
    ...,
    author->,
    categories[]->
}
`;
export const getStaticProps = async ({ preview = false, params }: { preview: boolean; params: { slug: string } }) => {
  const { slug } = params;
  if (preview) {
    return { props: { preview, slug } };
  }

  const data = await client.fetch(query, { slug });

  return { props: { preview, data, slug }, revalidate: 600 };
};
export default Post;
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
