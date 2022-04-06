import NextLink from "next/link";
import { Github, Linkedin, Mail, Rss } from "@basmonje/lib-icon";

const Footer = () => (
  <footer className="px-5 mb-6">
    <div className="container container-sm flex flex-col gap-1 px-5">
      <div className="flex flex-row gap-2 content-between items-center">
        <ol className="flex flex-wrap gap-1">
          <li>
            <NextLink href="/">
              <a className="decoration-none color-black-600 dark-color-white-600 outline-primary-400 color-hover-black-900 dark-color-hover-white-900">
                Home
              </a>
            </NextLink>
          </li>
          <li>|</li>
          <li>
            <NextLink href="/snippets">
              <a className="decoration-none color-black-600 dark-color-white-600 outline-primary-400 color-hover-black-900 dark-color-hover-white-900">
                Snippets
              </a>
            </NextLink>
          </li>
        </ol>
        <ol className="flex flex-wrap gap-1">
          <li>
            <a
              href="https://github.com/basmonje/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex color-black-600 color-hover-black-900 dark-color-hover-white-900 dark-color-white-600 outline-primary-400 text-link"
            >
              <Github strokeWidth={2} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/basmonje/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex color-black-600 color-hover-black-900 dark-color-hover-white-900 dark-color-white-600 outline-primary-400 text-link "
            >
              <Linkedin strokeWidth={2} />
            </a>
          </li>
          <li>
            <a
              href="mailto:devmonje@gmail.com"
              className="flex color-black-600 color-hover-black-900 dark-color-hover-white-900 dark-color-white-600 outline-primary-400 text-link "
            >
              <Mail strokeWidth={2} />
            </a>
          </li>
          <li>
            <a
              href="/feed.xml"
              className="flex color-black-600 color-hover-black-900 dark-color-hover-white-900 dark-color-white-600 outline-primary-400 text-link "
            >
              <Rss strokeWidth={2} />
            </a>
          </li>
        </ol>
      </div>
      <span className="color-black-600 dark-color-white-600 text-body-2">
        ©2022 Basmonje. Construido con Next.js y @uren/styles.
      </span>
    </div>
  </footer>
);

export default Footer;
