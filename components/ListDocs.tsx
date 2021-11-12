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
    <Container size="thin">
      <div className="--grid --grid-col-1 --grid-xs-col-2">
        {posts &&
          posts.map((post, index) => (
            <Link href={`/${page}/${post.slug}`} key={index}>
              <a>
                <Card
                  border="thin"
                  radius="small"
                  className="--p-2 --flex --flex-col --content-between"
                >
                  <span className="--text-sm">{post.title}</span>
                  <Scroller>
                    <ul className="--flex --flex-row gap-1">
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
