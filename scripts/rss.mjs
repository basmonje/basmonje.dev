import { writeFileSync } from "fs";
import RSS from "rss";
import { allSnippets } from "../.contentlayer/generated/Snippet/_index.mjs";

async function generate() {
  const feed = new RSS({
    title: "Bastian Monje",
    site_url: "https://basmonje.dev",
    feed_url: "https://basmonje.dev/feed.xml",
  });

  allSnippets.map((post) => {
    feed.item({
      title: post.title,
      url: `https://basmonje.dev/snippet/${post.slug}`,
      date: post.publishedAt,
      description: post.summary,
    });
  });

  writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}

generate();
