import Layout from "../../layouts";
import { getAllFilesFrontMatter } from "../../lib/markdown";
import { GetStaticProps } from "next";

import { ListProps } from "../../components/ListDocs";
import { Container } from "@basmonje/quarks_ui";

import useSearch from "../../hooks/useSearch";
import Link from "next/link";

export default function SnippetsPage({ posts }: ListProps) {
  const { query, result, handleChange } = useSearch({ posts });

  console.log(result);

  return (
    <Layout title="Home">
      <section className="--p-4">
        <Container size="thin">
          <div className="--flex --flex-col">
            <div className="--flex --flex-row --content-between --gap-xs --p-2">
              <input
                className="--bg-trans --td-text-gray-3 --border-gray-5 --border-xs --radius-small --bg-gray-7 --p-3 --w-full"
                type="text"
                placeholder="Filtrar busqueda"
                value={query}
                onChange={handleChange}
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="--p-x-3 --p-b-100">
        <Container size="thin">
          <div className="--flex --flex-col --gap-md --m-x-2">
            {result.length !== 0 ? (
              result.map((post, index) => (
                <Link href={`/snippets/${post.slug}`} key={index}>
                  <a>
                    <div className="--p-3 --tw-bg-gray-2 --td-bg-gray-7 --flex --flex-col --gap-xs">
                      <h1 className="--text-medium --tw-text-gray-7 --td-text-gray-2">
                        {post.title}
                      </h1>
                      <p className="--text-small --text-weight-1 --text-gray-5">
                        {post.language}
                      </p>
                    </div>
                  </a>
                </Link>
              ))
            ) : (
              <div className="--p-2">
                <h5 className="--text-small --text-weight-1">
                  No se ha podido encontrar:{" "}
                  <span className="--text-weight-8">{query}</span>
                </h5>
              </div>
            )}
          </div>
        </Container>
      </section>
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
