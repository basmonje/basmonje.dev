import { ThemeProvider } from "next-themes";
import "@uren/styles";
import "../src/styles/main.css";

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
