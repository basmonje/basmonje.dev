import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
          <link href="/static/favicons/site.webmanifest" rel="manifest" />
          <meta content="#000000eb" name="theme-color" />
          <meta content="#000000eb" name="msapplication-TileColor" />
        </Head>
        <body className="dark-bg-black-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
