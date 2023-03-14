import BlogPost from "@/components/blog/BlogPost";
import BlogHero from "@/components/blog/hero/BlogHero";
import PreviewPostPage from "@/components/studio/preview/PreviewPostPage";
import Divider from "@/components/utils/Divider";
import FadeInWhenVisible from "@/components/utils/FadeInWhenVisible";
import { client } from "@/libs/sanity.client";
import { groq } from "next-sanity";
import { PreviewSuspense } from "next-sanity/preview";
import Head from "next/head";
const Post = ({ preview, data, slug }: { preview: boolean; data: Post; slug: string }) => {
  console.log(data);
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
  return (
    <>
      <Head>
        <title>Web Dev Eren - Blog</title>
        <meta
          name="description"
          content="Join me on my web development journey and discover the intersection of code and creativity. From personal stories to tech tips, my blog has something for everyone."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <BlogHero
        title={data.title}
        description={data.description}
        descriptionFollowUp={false}
        publishedAt={data.publishedAt}
      />
      <main className="mx-auto w-full max-w-[1500px] flex-1 px-8 py-2 lg:px-28">
        <FadeInWhenVisible>
          <Divider />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <BlogPost data={data} />
        </FadeInWhenVisible>
      </main>
    </>
  );
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
