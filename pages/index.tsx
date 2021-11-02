import { Container } from "@basmonje/quarks_ui";
import Layout from "../layouts";
import Hero from "../components/Hero";
import Projects from "../components/ListProjects";

export default function HomePage() {
  return (
    <Layout title="Home">
      <Hero />
      <Projects />
      <div className="mt-6">
        <Container size="small">
          <div>Qie onda</div>
        </Container>
      </div>

      <div className="flex flex-col">
        <h1>que</h1>
        <h1>que</h1>
        <h1>que</h1>
      </div>
    </Layout>
  );
}
