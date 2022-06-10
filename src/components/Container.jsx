import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "./Navbar";

const Container = (props) => {
  const router = useRouter();
  const { children, ...customMeta } = props;
  const meta = {
    title: "Basmonje",
    description: "Fullstack developer, I ♥ Javascript",
    image: "https://basmonje.dev/static/img/banner.png",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://basmonje.dev${router.asPath}`}
        />
        <link rel="canonical" href={`https://basmonje.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Bastián Monje" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@basmonje" />
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
      </main>
    </>
  );
};

export default Container;
