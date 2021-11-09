import type { AppProps } from "next/app";
import { ThemeProvider } from "../hooks/useTheme";

import "../styles/global.scss";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
