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
    <footer className="--border-top-xs --border-gray-5 --mb-5">
      <Container size="small">
        <div className="--mt-5 --flex --flex-col --flex-sm-row --content-between">
          <FooterList list={pages} />
          <FooterList list={external} external />
          <FooterList list={utilities} />
        </div>
      </Container>

      <div>
        <Link href="#hero">
          <a className="--td-text-gray-3">Ir a inicio</a>
        </Link>
      </div>
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
            <Anchor
              href={item.href}
              className="--td-text-gray-5 --td-text-hover-gray-2 --tw-text-gray-6 --tw-text-hover-gray-8"
            >
              {item.label}
            </Anchor>
          </ul>
        ))}
    </div>
  );
}

function ExternalLink({ href, children, className }) {
  return (
    <a
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
}

function InternalLink({ href, children, className }) {
  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  );
}

Footer.defaultProps = defaultPropsFooter;

export default Footer;
