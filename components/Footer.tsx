import { ReactNode } from "react";
import { Container } from "@basmonje/quarks_ui";
import Link from "next/link";

interface FooterProps {
  children: ReactNode;
}

const defaultPropsFooter = {
  pages: [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/blog",
      label: "Blog",
    },
  ],
  external: [
    {
      href: "https://github.com/basmonje",
      label: "Github",
    },
    {
      href: "https://www.linkedin.com/in/basmonje",
      label: "Linkedin",
    },
  ],
  utilities: [
    {
      href: "/notes",
      label: "Notes",
    },
    {
      href: "/snippets",
      label: "Snippets",
    },
    {
      href: "/javascript",
      label: "Javascript",
    },
  ],
};
function Footer({ external, pages, utilities }: typeof defaultPropsFooter) {
  return (
    <footer className="my-4">
      <Container size="small">
        <div className="grid col-1 sm-col-2 md-col-3">
          <FooterList list={pages} />
          <FooterList list={external} external />
          <FooterList list={utilities} />
        </div>
      </Container>
    </footer>
  );
}

interface ListProps {
  list?: {
    label: string;
    href: string;
  }[];
  external?: boolean;
}

function FooterList({ list, external = false }: ListProps) {
  const Anchor = external ? ExternalLink : InternalLink;
  return (
    <div className="footer__list">
      {list &&
        list.map((item, index) => (
          <ul key={index} className="flex flex-col gap-1">
            <Anchor href={item.href}>{item.label}</Anchor>
          </ul>
        ))}
    </div>
  );
}

function ExternalLink({ href, children }) {
  return (
    <a
      className="link link-white"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
}

function InternalLink({ href, children }) {
  return (
    <Link href={href}>
      <a className="link link-white">{children}</a>
    </Link>
  );
}

Footer.defaultProps = defaultPropsFooter;

export default Footer;
