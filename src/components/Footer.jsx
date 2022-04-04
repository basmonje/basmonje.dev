import { Github, Linkedin, Mail } from "@basmonje/lib-icon";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-5 py-6">
      <div className="container container-sm flex flex-col gap-1">
        <ol className="flex flex-wrap gap-2 content-center">
          <li>
            <a
              href="https://github.com/basmonje/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex color-black-600 color-hover-black-900 dark-color-white-600 dark-outline-primary-400"
            >
              <Github />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/basmonje/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex color-black-600 color-hover-black-900 dark-color-white-600 dark-outline-primary-400"
            >
              <Linkedin />
            </a>
          </li>
          <li>
            <a
              href="mailto:basmonje@gmail.com"
              className="flex color-black-600 color-hover-black-900 dark-color-white-600 dark-outline-primary-400"
            >
              <Mail />
            </a>
          </li>
        </ol>
        <div className="text-center">
          <span className="text-body-2 color-black-600 dark-color-white-600">
            © 2022 Basmonje. All right reserved{" "}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
