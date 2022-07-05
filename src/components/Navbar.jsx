import NextLink from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Moon, Sun } from "@basmonje/lib-icon";
import { useTheme } from "next-themes";

const NavItem = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={`decoration-none text-link ${
          isActive
            ? "color-black-800 dark-color-white-800"
            : "color-black-600 dark-color-white-600 color-hover-black-800 dark-color-hover-white-800"
        }`}
      >
        {text}
      </a>
    </NextLink>
  );
};

const NavDarkTheme = ({ ariaLabel }) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <div className="flex items-center">
      <button
        aria-label={ariaLabel}
        className="button-icon-square bg-transparent button p-3 text-button radius-2 bg-hover-black-50 dark-bg-hover-white-50 outline-primary-400"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {mounted && (
          <div className="flex items-center content-center color-black-800 dark-color-white-800">
            {resolvedTheme === "dark" ? (
              <Sun strokeWidth={2} />
            ) : (
              <Moon strokeWidth={2} />
            )}
          </div>
        )}
      </button>
    </div>
  );
};

const Navbar = ({ data }) => (
  <header className="px-5">
    <nav className="container container-sm flex flex-row items-center content-between py-5 px-5">
      <NavItem href="/" text="basmonje." />
      <NavDarkTheme ariaLabel={data.button} />
    </nav>
  </header>
);

export default Navbar;
