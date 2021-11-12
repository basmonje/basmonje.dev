import { useMemo } from "react";
import { getFiles, getFileBySlug } from "../../lib/markdown";
import { GetStaticProps, GetStaticPaths } from "next";
import { getMDXComponent } from "mdx-bundler/client";
import componentsMDX from "../../components/MDXComponents";
import Layout from "../../layouts/Content";

type Post = {
  dateUpdate: string;
  slug: string;
  tags: string[];
  title: string;
};

interface Props {
  code: string;
  frontmatter: Post;
}

export default function BlogSlugPage({ code, frontmatter }: Props) {
  const MarkdownPost = useMemo(() => getMDXComponent(code), [code]);
  return (
    <Layout type="snippets" frontmatter={frontmatter}>
      <MarkdownPost components={componentsMDX as any} />
    </Layout>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const files = getFiles("blog");

  return {
    paths: files.map((p) => ({
      params: {
        slug: p.replace(".mdx", ""),
      },
    })),
    fallback: false,
  };
};

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const post = await getFileBySlug("blog", params.slug);
  return {
    props: {
      ...post,
    },
  };
};
