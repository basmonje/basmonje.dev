import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Container = (props) => {
  const { children, ...customMeta } = props;

  const meta = {
    title: "Basmonje",
    description: "",
    image: "",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Your Name" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@your-username" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Navbar />
      <main id="skip" className="flex flex-col content-center">
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Container;
