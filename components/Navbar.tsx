import { useState, useEffect } from "react";
import { Container, Button, Menu } from "@basmonje/quarks_ui";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "../hooks/useTheme";
import { Moon, Sun } from "@basmonje/icons";
export interface ListProps {
  list: { href: string; label: string }[];
}

function Navbar({ list }: typeof defaultPropsNavbar) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <header className="--position-sticky --index-1 --td-bg-gray-8 --tw-bg-gray-1 --top-none --p-x-2 --h-100">
      <Container size="thin">
        <nav className="--flex --flex-row --items-center --content-between --p-y-2">
          <div className="--flex --items-center">
            <Button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              radius="small"
              className="border-hover --border-xs --td-border-gray-7"
            >
              {mounted && (
                <span className="--td-text-gray-1 --tw-text-gray-8">
                  {resolvedTheme === "dark" ? (
                    <Sun strokeWidth="1" />
                  ) : (
                    <Moon strokeWidth="1" />
                  )}
                </span>
              )}
            </Button>
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
      href: "/blog",
      label: "blog",
    },
  ],
};

function SubNav({ list }: ListProps) {
  const { pathname } = useRouter();
  const classLink = `--tw-text-gray-3 --td-bg-hover-gray-7 --radius-small --p-t-1 --p-b-1 --p-l-2 --p-r-2`;
  return (
    <ul className="--flex --flex-row --gap-sm">
      {list &&
        list.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>
              <a
                className={`${classLink}
                    ${
                      pathname === item.href
                        ? "--td-text-gray-1 --tw-text-gray-8"
                        : "--td-text-gray-4 --td-text-gray-5"
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

Navbar.defaultProps = defaultPropsNavbar;

export default Navbar;
