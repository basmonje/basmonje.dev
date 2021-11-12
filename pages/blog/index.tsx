import Layout from "../../layouts";
import { getAllFilesFrontMatter } from "../../lib/markdown";
import { GetStaticProps } from "next";

import List, { ListProps } from "../../components/ListDocs";
import { Button, Container } from "@basmonje/quarks_ui";

export default function BlogPage({ posts }: ListProps) {
  return (
    <Layout title="Home">
      <section className="--px-3">
        <Container size="small">
          <div className="--flex --flex-col --mt-100 --mb-100">
            <div className="--flex --flex-row --content-between --gap-xs">
              <input
                className="--border-gray-1 --border-xs --radius-small --bg-gray-7 --py-1 --px-2 --w-full"
                type="text"
                placeholder="Filtrar busqueda"
              />
              <Button>Filtrar</Button>
            </div>
          </div>
        </Container>
      </section>
      <div className="--mx-2">
        <List posts={posts} page="blog" />
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = getAllFilesFrontMatter("blog");
  return {
    props: {
      posts: response,
    },
  };
};
