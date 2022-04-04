import { useState, useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Moon, Sun } from "@basmonje/lib-icon";
import { useTheme } from "next-themes";

const NavItem = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a className="decoration-none color-black-600 dark-color-white-600">
        {text}
      </a>
    </NextLink>
  );
};

const NavDarkTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <div>
      <button
        className="button-icon-square bg-transparent button p-3 text-button radius-2 bg-hover-black-50 dark-bg-hover-white-50 outline-black-600 dark-outline-primary-400"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {mounted && (
          <div className="flex items-center content-center">
            {resolvedTheme === "dark" ? <Sun /> : <Moon />}
          </div>
        )}
      </button>
    </div>
  );
};

const Navbar = () => {
  return (
    <header className="px-5">
      <nav className="container container-sm flex flex-row items-center content-between py-5">
        <NavItem href="/" text="basmonje." />
        <NavDarkTheme />
      </nav>
    </header>
  );
};

export default Navbar;
