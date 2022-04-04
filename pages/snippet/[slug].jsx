import { useMDXComponent } from "next-contentlayer/hooks";
import { allSnippets } from "contentlayer/generated";

import Layout from "../../src/layouts/Snippets";
import components from "../../src/components/MDXComponent";

const PostSnippet = ({ post }) => {
  const Component = useMDXComponent(post.body.code);
  return (
    <Layout post={post}>
      <Component components={components} />
    </Layout>
  );
};

export async function getStaticPaths() {
  return {
    paths: allSnippets.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allSnippets.find((post) => post.slug === params.slug);

  return { props: { post } };
}

export default PostSnippet;
