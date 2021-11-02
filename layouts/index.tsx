import { ReactNode } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface Props {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children, title = "Workspace" }: Props) {
  return (
    <div className="bg-dark">
      <Head>
        <title>{title}</title>
        <meta name="theme-color" content="#000" />
      </Head>
      <Navbar />
      <main className="main">
        {children}
        <Footer />
      </main>
    </div>
  );
}
