import { Github, Linkedin, Mail, Twitter } from "@basmonje/lib-icon";

const Footer = ({ data }) => (
  <footer className="px-5 mb-6">
    <div className="container container-sm flex flex-col items-center gap-1 px-5">
      <div>
        <ol className="flex flex-wrap">
          <li>
            <a
              title="Go to my repository in github"
              aria-label="Go to my repository in github"
              href="https://github.com/basmonje/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex color-black-700 color-hover-black-900 dark-color-hover-white-900 dark-color-white-600 outline-primary-400 text-link icon-footer"
            >
              <Github strokeWidth={2} />
            </a>
          </li>
          <li>
            <a
              title="Go to my Linkedin"
              aria-label="Go to my Linkedin"
              href="https://www.linkedin.com/in/basmonje/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex color-black-700 color-hover-black-900 dark-color-hover-white-900 dark-color-white-600 outline-primary-400 text-link icon-footer"
            >
              <Linkedin strokeWidth={2} />
            </a>
          </li>
          <li>
            <a
              title="Go to my Twitter"
              aria-label="Go to my Twitter"
              href="https://twitter.com/basmonje"
              target="_blank"
              rel="noopener noreferrer"
              className="flex color-black-700 color-hover-black-900 dark-color-hover-white-900 dark-color-white-600 outline-primary-400 text-link icon-footer"
            >
              <Twitter strokeWidth={2} />
            </a>
          </li>
          <li>
            <a
              title="Send email to devmonje@gmail.com"
              aria-label="Send email to devmonje@gmail.com"
              href="mailto:devmonje@gmail.com"
              className="flex color-black-700 color-hover-black-900 dark-color-hover-white-900 dark-color-white-600 outline-primary-400 text-link icon-footer"
            >
              <Mail strokeWidth={2} />
            </a>
          </li>
        </ol>
      </div>
      <span className="text-center decoration-none color-black-700 dark-color-white-600 text-caption">
        {data.content}{" "}
        <a
          title="Go to Next.js"
          aria-label="Go to Next.js"
          className="decoration-none color-black-700 dark-color-white-600 dark-color-hover-white-800 color-hover-black-900"
          target="_blank"
          rel="noopener noreferrer"
          href="https://nextjs.org/"
        >
          Next.js
        </a>{" "}
        {data.connector}{" "}
        <a
          title="See repository of basmonje/css"
          aria-label="See repository of basmonje/css"
          className="decoration-none color-black-700 dark-color-white-600 dark-color-hover-white-800 color-hover-black-900"
          target="_blank"
          rel="noopener noreferrer"
          href="https://css.basmonje.dev"
        >
          @basmonje/css
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;
