import { useState } from "react";
import { Container, Button, Menu } from "@basmonje/quarks_ui";
import Link from "next/link";
import { useRouter } from "next/router";

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
    <ul className="--flex --flex-row">
      {list &&
        list.map((item, index) => (
          <li className="--pl-2" key={index}>
            <Link href={item.href}>
              <a
                className={`--tw-text-gray-5
                    ${
                      pathname === item.href
                        ? "--td-text-gray-1 --tw-text-gray-8"
                        : "--td-text-gray-4 --td-text-gray-6"
                    }
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
    <header className="p-2 --border-bottom-xs">
      <Container size="small">
        <nav className="--flex --flex-row --content-between --py-2 --items-center">
          <div className="logo">
            <Link href="/">
              <a className="--tw-text-gray-5 --tw-text-hover-gray-8 --td-text-gray-5 --td-text-hover-gray-2">
                basmonje.
              </a>
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
