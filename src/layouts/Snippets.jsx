import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import { HeroSnippet } from "../components/Hero";
import Actions from "../components/Actions";

const LayoutSnippet = ({ post, children }) => {
  return (
    <Container {...post}>
      <Breadcrumb home={{ href: "/snippets", text: "Snippets" }} />
      <HeroSnippet {...post} />
      <section className="px-5">
        <div className="container container-sm">
          <div className="mdx">{children}</div>
        </div>
      </section>
      <Actions />
    </Container>
  );
};

export default LayoutSnippet;
