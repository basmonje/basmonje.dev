import type { AppProps } from "next/app";

import "@basmonje/quarks_styles";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
