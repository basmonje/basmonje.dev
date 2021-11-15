import Layout from "../../layouts";
import { getAllFilesFrontMatter } from "../../lib/markdown";
import { GetStaticProps } from "next";

import List, { ListProps } from "../../components/ListDocs";
import { Button, Container } from "@basmonje/quarks_ui";
import { useState, useEffect, useCallback } from "react";
import { format, search } from "../../lib/search";

import Link from "next/link";

export default function SnippetsPage({ posts }: ListProps) {
  const [postsList, setPosts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (posts) {
      setPosts(posts);
    }
  }, [posts, setPosts]);

  const handleChange = useCallback((e) => {
    const query = format(e.target.value);
    setQuery(query);

    if (query.length) {
      const response = posts.filter((post) => search(post.title, query));
      setPosts(response);
    } else {
      setPosts(posts);
    }
  }, []);

  return (
    <Layout title="Home">
      <section className="--p-4">
        <Container size="thin">
          <div className="--flex --flex-col --mt-100 --mb-100">
            <div className="--flex --flex-row --content-between --gap-xs">
              <input
                className="--border-gray-1 --border-xs --radius-small --bg-gray-7 --p-y-1 --p-x-2 --w-full"
                type="text"
                placeholder="Filtrar busqueda"
                value={query}
                onChange={handleChange}
              />
              <Button>Filtrar</Button>
            </div>
          </div>
        </Container>
      </section>
      <section className="--p-x-3 --p-b-100">
        <Container size="thin">
          <div className="--flex --flex-col --gap-md --m-x-2">
            {postsList.length !== 0 ? (
              postsList.map((post, index) => (
                <Link href={`/snippets/${post.slug}`} key={index}>
                  <a>
                    <div className="--p-2 --bg-gray-5">
                      <h1 className="--td-text-gray-2">{post.title}</h1>
                    </div>
                  </a>
                </Link>
              ))
            ) : (
              <div className="--p-2">
                <h1>No se ha podido encontrar</h1>
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
