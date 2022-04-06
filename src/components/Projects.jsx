import { ExternalLink } from "@basmonje/lib-icon";
import format from "../utils/format";

const getProjects = () => [
  {
    id: 1,
    title: "Shopping Vanilla",
    summary: "Evaluación Final de Curso Javascript Master, Escalab Academy.",
    publishedAt: "2021/11/13",
    urls: {
      demo: "https://basmonje.github.io/shopping_escalab/",
      code: "https://github.com/basmonje/shopping_escalab",
    },
  },
  {
    id: 2,
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
    <article className="w-full flex flex-col radius-2 gap-2 content-between bg-hover-black-50 dark-bg-hover-white-50">
      <header className="flex flex-col gap-1 p-5">
        <div className="flex content-between">
          <h5 className="text-title-6 color-black-700 dark-color-white-700">
            {title}
          </h5>
          <span className="p-2 icon">
            <ExternalLink strokeWidth={2} />
          </span>
        </div>
        <p className="text-body-2 color-black-600 dark-color-white-600">
          {summary}
        </p>
        <time className="color-black-600 dark-color-white-600 text-simple">
          {format({ date: publishedAt })}
        </time>
      </header>
    </article>
  </a>
);

const Projects = () => {
  const projects = getProjects();
  return (
    <section className="px-5 mb-10">
      <div className="container container-sm flex flex-col">
        <header className="mb-5 px-5">
          <h4 className="text-title-4 color-black-800 dark-color-white-700">
            Proyectos
          </h4>
        </header>
        <ol className="grid grid-cols-1 grid-sm-cols-2 gap-1">
          {projects.map((otherProps) => (
            <Card key={otherProps.id} {...otherProps} />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Projects;
