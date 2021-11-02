import { useState } from "react";
import { Container, Button, Menu } from "@basmonje/quarks_ui";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu as Icon } from "@basmonje/icons";

export interface ListProps {
  list: { href: string; label: string }[];
}

export const defaultPropsNavbar = {
  list: [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/snippets",
      label: "Snippets",
    },
    {
      href: "/projects",
      label: "Projects",
    },
  ],
};

function SubNav({ list }: ListProps) {
  const { pathname } = useRouter();
  return (
    <ul className="flex flex-row">
      {list &&
        list.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>
              <a
                className={`link link-white link-hover
                    ${pathname === item.href ? "active" : ""}
                  `}
              >
                {item.label}
              </a>
            </Link>
          </li>
        ))}
    </ul>
  );
}

function Navbar({ list }: typeof defaultPropsNavbar) {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="p-2">
      <Container size="small">
        <nav className="flex flex-row content-between py-2 items-center">
          <div className="logo">
            <Link href="/">
              <a className="text-gray-400">basmonje.</a>
            </Link>
          </div>
          <div className="navbar-menu">
            <div className="navbar-menu__list">
              <SubNav list={list} />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}

Navbar.defaultProps = defaultPropsNavbar;

export default Navbar;
