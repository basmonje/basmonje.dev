import Layout from "../../layouts";
import { getAllFilesFrontMatter } from "../../lib/markdown";
import { GetStaticProps } from "next";

import List, { ListProps } from "../../components/ListDocs";

export default function SnippetsPage({ posts }: ListProps) {
  return (
    <Layout title="Home">
      <div className="mx-2">
        <List posts={posts} page="snippets" />
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = getAllFilesFrontMatter("snippets");
  return {
    props: {
      posts: response,
    },
  };
};
