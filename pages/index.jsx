import React from "react";
import { allSnippets } from "../.contentlayer/generated";
import { pick } from "../src/utils";

import { Snippets } from "../src/components/Snippets";
import Welcome from "../src/components/Welcome";

import Container from "../src/components/Container";
import Projects from "../src/components/Projects";
import Now from "../src/components/Message";

const HomePage = ({ snippets }) => {
  return (
    <Container>
      <Welcome />
      <Projects />
      <Snippets data={snippets} />
      <Now />
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
