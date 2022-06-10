import dynamic from "next/dynamic";
import { enUS, esES } from "../lang";
import { useRouter } from "next/router";

const Container = dynamic(import("components/Container"));
const Welcome = dynamic(import("components/Welcome"));
const Projects = dynamic(import("components/Projects"));
const Footer = dynamic(import("components/Footer"));

const HomePage = () => {
  const { locale } = useRouter();
  const data = locale === "en-US" ? enUS : esES;

  return (
    <Container title="Bastián Monje">
      <Welcome data={data.header} />
      <Projects data={data.projects} />
      <Footer data={data.footer} />
    </Container>
  );
};

export default HomePage;
