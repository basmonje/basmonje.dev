import Welcome from "../src/components/Welcome";
import Container from "../src/components/Container";
import Projects from "../src/components/Projects";

const HomePage = () => {
  return (
    <Container title="Bastián Monje">
      <Welcome />
      <Projects />
    </Container>
  );
};

export default HomePage;
