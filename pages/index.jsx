import Welcome from "../src/components/Welcome";
import Container from "../src/components/Container";
import Projects from "../src/components/Projects";
import Footer from "../src/components/Footer";

import { enUS, esES } from "../lang";
import { useRouter } from "next/router";

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
