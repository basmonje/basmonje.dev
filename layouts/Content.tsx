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
    date?: string;
    tags?: string[];
    readingTime: {
      text: string;
      minutes: number;
      time: number;
      words: number;
    };
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
                <div className="--flex --flex-col --flex-xs-row --items-xs-center --content-between --p-y-3">
                  <div className="--flex --items-center --gap-xs">
                    <span className="--text-small --tw-text-gray-3 --text-height-small --text-weight-5">
                      Bastian Monje
                    </span>
                    ~
                    <span className="--text-small --tw-text-gray-3 --text-height-small --text-weight-5">
                      {frontmatter.date}
                    </span>
                  </div>
                  <p className="--text-small --tw-text-gray-3 --text-height-small --text-weight-5">
                    {frontmatter.readingTime.text}
                  </p>
                </div>
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
