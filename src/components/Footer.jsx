import NextLink from "next/link";
import { Github, Linkedin, Mail, Twitter } from "@basmonje/lib-icon";

const Footer = ({ data }) => (
  <footer className="px-5 mb-6">
    <div className="container container-sm flex flex-col gap-1 px-5">
      <div className="flex flex-row gap-2 content-between items-center">
        <div></div>
        <ol className="flex flex-wrap">
          <li>
            <a
              href="https://github.com/basmonje/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex color-black-600 color-hover-black-900 dark-color-hover-white-900 dark-color-white-600 outline-primary-400 text-link mr-3"
            >
              <Github strokeWidth={2} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/basmonje/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex color-black-600 color-hover-black-900 dark-color-hover-white-900 dark-color-white-600 outline-primary-400 text-link mr-3"
            >
              <Linkedin strokeWidth={2} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/basmonje"
              target="_blank"
              rel="noopener noreferrer"
              className="flex color-black-600 color-hover-black-900 dark-color-hover-white-900 dark-color-white-600 outline-primary-400 text-link mr-3"
            >
              <Twitter strokeWidth={2} />
            </a>
          </li>
          <li>
            <a
              href="mailto:devmonje@gmail.com"
              className="flex color-black-600 color-hover-black-900 dark-color-hover-white-900 dark-color-white-600 outline-primary-400 text-link mr-3"
            >
              <Mail strokeWidth={2} />
            </a>
          </li>
        </ol>
      </div>
      <span className="decoration-none color-black-600 dark-color-white-600 text-simple">
        {data.content}{" "}
        <a
          className="decoration-none color-black-600 dark-color-white-600 dark-color-hover-white-800 color-hover-black-900"
          target="_blank"
          rel="noopener noreferrer"
          href="https://nextjs.org/"
        >
          Next.js
        </a>{" "}
        {data.connector}{" "}
        <a
          className="decoration-none color-black-600 dark-color-white-600 dark-color-hover-white-800 color-hover-black-900"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/basmonje/css"
        >
          @basmonje/css
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;
