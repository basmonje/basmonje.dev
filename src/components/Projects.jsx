import { ExternalLink, Folder } from "@basmonje/lib-icon";
import format from "../utils/format";

const config = [
  {
    id: 3,
    title: "Mini Framework CSS",
    summary: "Framework CSS de uso personal",
    publishedAt: "2022/04/19",
    urls: {
      demo: null,
      code: "https://github.com/basmonje/css",
    },
  },
  {
    id: 2,
    title: "Shopping Vanilla",
    summary: "Evaluación Final de Curso Javascript Master, Escalab Academy.",
    publishedAt: "2021/11/13",
    urls: {
      demo: "https://basmonje.github.io/shopping_escalab/",
      code: "https://github.com/basmonje/shopping_escalab",
    },
  },
  {
    id: 1,
    title: "Replach",
    summary: "Evaluación Final de curso de React Developer",
    publishedAt: "2022/03/10",
    urls: {
      demo: "https://replach.vercel.app/",
      code: "https://github.com/basmonje/replach",
    },
  },
];

const Card = ({ title, summary, urls, publishedAt }) => (
  <a
    href={urls.code}
    target="_blank"
    rel="noopener noreferrer"
    className="decoration-none flex gap-1 color-black-600 dark-color-white-600 color-hover-black-800 dark-color-hover-white-800 text-link text-zoom"
  >
    <article className="w-full flex flex-col radius-2 gap-2 content-between bg-black-50 dark-bg-white-100 card-project">
      <header className="flex flex-col gap-1 p-5 h-full">
        <div className="flex content-between color-black-800 dark-color-white-800 mb-3">
          <Folder strokeWidth={2} width={32} height={32} />
          <ExternalLink strokeWidth={2} />
        </div>
        <h5 className="text-subtitle-1 color-black-700 dark-color-white-700">
          {title}
        </h5>
        <div className="flex flex-col content-between h-full">
          <p className="text-body-2 color-black-600 dark-color-white-600">
            {summary}
          </p>
          <time className="color-black-600 dark-color-white-600 text-simple">
            {format({ date: publishedAt })}
          </time>
        </div>
      </header>
    </article>
  </a>
);

const Projects = ({ data }) => (
  <section className="px-5 mb-10">
    <div className="container container-sm flex flex-col">
      <header className="mb-5 px-5">
        <h4 className="text-title-4 color-black-800 dark-color-white-700">
          Proyectos
        </h4>
      </header>
      {data && (
        <ol className="grid grid-cols-1 grid-sm-cols-2 gap-2">
          {data.map((otherProps) => (
            <Card key={otherProps.id} {...otherProps} />
          ))}
        </ol>
      )}
    </div>
  </section>
);

Projects.defaultProps = {
  data: config,
};

export default Projects;
