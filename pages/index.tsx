import { Button, Container } from "@basmonje/quarks_ui";
import Layout from "../layouts";
import Hero from "../components/Hero";
import { getAllFilesFrontMatter } from "../lib/markdown";
import Projects from "../components/ListProjects";
import Link from "next/link";
import { GetStaticProps } from "next";

export default function HomePage({ posts }) {
  return (
    <Layout title="Home">
      <Hero />

      <section className="--p-t-100 --p-b-100">
        <Container size="thin">
          <div className="--p-3">
            <div className="--p-x-2 --flex --flex-col">
              <h1 className="--text-xlarge --text-sm-2xl --text-height-xlarge --p-t-5 --p-b-2">
                Publicado recientemente
              </h1>
              <p className="--text-small --text-height-small --tw-text-gray-4">
                Una de las cosas que recomiendo para aprender algo,{" "}
                <i>"lo que sea"</i>, es documentar lo aprendido con tus propias
                palabras, si no sabes como hacerlo te dejo la siguiente{" "}
                <Link href="/blog/learn-to-learn">
                  <a className="--text-success">
                    <i>documentación</i>
                  </a>
                </Link>{" "}
                basada en la técnica de Feyman.
              </p>
            </div>

            <div className="--m-t-5 --flex --flex-col">
              {posts &&
                posts.map((post, index) => (
                  <div
                    className="--flex --flex-col --border-bottom-xs --tw-border-gray-2 --td-border-gray-7"
                    key={index}
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <a>
                        <div className="--p-x-2 --p-y-4 --tw-bg-hover-gray-1 --td-bg-hover-gray-7 --flex --flex-row --items-center --content-between">
                          <h1 className="--text-medium --text-height-medium --text-sm-large --text-sm-height-large --tw-text-gray-8 --td-text-gray-2">
                            {post.title}
                          </h1>
                          {post?.language && (
                            <p className="--tw-text-gray-4 --td-text-gray-2">{post.language}</p>
                          )}
                        </div>
                      </a>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </Container>
      </section>
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
