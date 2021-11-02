import { ReactNode } from "react";
import { Container } from "@basmonje/quarks_ui";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Subnav from "../components/Subnav";

interface Props {
  children?: ReactNode;

  type: string;

  frontmatter?: {
    title?: string;
    description?: string;
    dateUpdate?: string;
    tags?: string[];
  };
}

export default function ContentLayout({ children, frontmatter, type }: Props) {
  return (
    <div className="bg-dark">
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="theme-color" content="#000" />
      </Head>
      <Navbar />
      <main>
        <Subnav page={type} className="bg-gray-900" />

        <article className="mx-2 overflowy-auto overflowx-hidden">
          <Container size="small">
            <div className="flex flex-col my-5 gap-1">
              <h1 className="text-3xl text-bold">{frontmatter.title}</h1>
              <p className="text-sm text-thin">{frontmatter.dateUpdate}</p>
            </div>
          </Container>
          <Container size="small" className="markdown">
            {children}
          </Container>
        </article>
        <Footer />
      </main>
    </div>
  );
}
