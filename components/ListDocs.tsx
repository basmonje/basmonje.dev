import Link from "next/link";
import { Container, Card, Scroller, Badge } from "@basmonje/quarks_ui";

type PostProps = {
  date: string;
  slug: string;
  tags: string[];
  title: string;
};

export interface ListProps {
  posts: PostProps[];
  page: string;
}

export default function ListDocs({ posts, page }: ListProps) {
  return (
    <Container size="small">
      <div className="grid col-1 sm-col-2 md-col-3">
        {posts &&
          posts.map((post, index) => (
            <Link href={`/${page}/${post.slug}`} key={index}>
              <a>
                <Card
                  border="thin"
                  radius="small"
                  className="p-2 flex flex-col content-between light:bg-gray-200"
                >
                  <span className="text-sm white">{post.title}</span>
                  <Scroller>
                    <ul className="flex flex-row gap-1">
                      {post.tags &&
                        post.tags.map((tag, index) => (
                          <li key={index}>
                            <Badge text={tag} type="primary" size="sm" />
                          </li>
                        ))}
                    </ul>
                  </Scroller>
                </Card>
              </a>
            </Link>
          ))}
      </div>
    </Container>
  );
}
