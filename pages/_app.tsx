import type { AppProps } from "next/app";

import "../styles/global.scss";
import "@basmonje/quarks_styles/dist/main.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
