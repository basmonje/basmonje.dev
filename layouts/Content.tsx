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
        <meta name="theme-color" content="#191919" />
      </Head>
      <Navbar />
      <main>
        {/* <Subnav page={type} className="--bg-gray-900" /> */}

        <article className="overflowy-auto overflowx-hidden">
          <div className="--tw-bg-gray-1 --td-bg-gray-8">
            <Container size="thin">
              <div className="--flex --flex-col --p-y-100 --gap-1 --m-x-3">
                <h1 className="--text-2xl --text-height-2xl --text-md-3xl --text-md-height-3xl">
                  {frontmatter.title}
                </h1>
                <p className="text-sm text-thin">{frontmatter.dateUpdate}</p>
              </div>
            </Container>
          </div>
          <Container size="small" className="--markdown">
            {children}
          </Container>
        </article>
        <Footer />
      </main>
    </div>
  );
}
