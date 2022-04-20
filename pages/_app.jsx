import { ThemeProvider } from "next-themes";

import "@basmonje/css";
import "../src/styles/main.scss";

import ErrorBoundary from "../src/components/ErrorBoundary";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </ThemeProvider>
  );
}
