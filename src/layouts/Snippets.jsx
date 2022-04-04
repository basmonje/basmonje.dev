import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import { HeroSnippet } from "../components/Hero";

const LayoutSnippet = ({ post, children }) => {
  return (
    <Container {...post}>
      <Breadcrumb home={{ href: "/snippets", text: "Snippets" }} />
      <HeroSnippet {...post} />
      <section>
        <div className="container container-sm">
          <div className="mdx">{children}</div>
        </div>
      </section>
    </Container>
  );
};

export default LayoutSnippet;
