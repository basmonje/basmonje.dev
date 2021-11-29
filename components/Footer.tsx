import { ReactNode } from "react";
import { Container } from "@basmonje/quarks_ui";
import Link from "next/link";

interface FooterProps {
  children: ReactNode;
}

const defaultPropsFooter = {
  social: [
    {
      href: "https://github.com/basmonje",
      label: "Github",
    },
    {
      href: "https://www.linkedin.com/in/basmonje",
      label: "Linkedin",
    },
  ],
  sitemap: [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/blog",
      label: "Blog",
    },
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
function Footer({ social, sitemap }: typeof defaultPropsFooter) {
  return (
    <footer className="--border-top-xs --td-border-gray-7 --mb-5 --p-x-2">
      <Container size="thin">
        <div className="--m-y-5 --flex --flex-col --flex-xs-row --gap-sm --items-center --content-center --content-md-between">
          <div className="--flex --flex-col --gap-lg">
            <span className="--text-small --text-weight-5 --td-text-gray-5 --text-height-small">
              REDES
            </span>
            <FooterList list={social} external />
          </div>

          <div className="--flex --flex-col --gap-lg">
            <span className="--text-small --text-weight-5 --td-text-gray-5 --text-height-small">
              SITEMAP
            </span>
            <FooterList list={sitemap} />
          </div>
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
    <div className="--flex --flex-col --gap-sm">
      {list &&
        list.map((item, index) => (
          <ul key={index} className="--flex --flex-col --gap-xs">
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
