import { useState } from "react";
import { allSnippets } from "../.contentlayer/generated";
import { pick } from "../src/utils";

import { ListSnippets } from "../src/components/Snippets";
import { HeroSnippets } from "../src/components/Hero";
import Container from "../src/components/Container";

const HomePage = ({ snippets }) => {
  const [query, setQuery] = useState("");
  const filteredBlogPost = snippets.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <Container>
      <HeroSnippets value={query} onChange={(e) => setQuery(e.target.value)} />
      <ListSnippets data={filteredBlogPost} />
    </Container>
  );
};

export function getStaticProps() {
  const snippets = allSnippets.map((post) =>
    pick(post, [
      "slug",
      "title",
      "summary",
      "publishedAt",
      "readingTime",
      "tags",
    ])
  );
  return { props: { snippets } };
}

export default HomePage;
