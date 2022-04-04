import { ExternalLink, Code } from "@basmonje/lib-icon";

const getProjects = () => [
  {
    id: 1,
    title: "Carrito de Compras",
    description: "Evaluación Final de curso de Javascript Master",
    createdAt: "Nov 2021",
    urls: {
      demo: "https://basmonje.github.io/shopping_escalab/",
      code: "https://github.com/basmonje/shopping_escalab",
    },
  },
  {
    id: 2,
    title: "Replach",
    description: "Evaluación Final de curso de React Developer",
    createdAt: "Mar 2022",
    urls: {
      demo: "https://replach.vercel.app/",
      code: "https://github.com/basmonje/replach",
    },
  },
];

const CardProject = ({ title, description, urls }) => {
  return (
    <article className="card-project pos-relative radius-2 flex flex-col content-between overflow-hidden b-1 b-solid b-black-200 dark-b-white-200">
      <header className="card-project__header flex flex-col gap-1 p-5">
        <h5 className="text-title-6 color-black-700 dark-color-white-700">
          {title}
        </h5>
        <p className="text-body-2 color-black-500 dark-color-white-500">
          {description}
        </p>
      </header>
      <footer className="flex flex-row items-center pb-3 px-3 gap-1">
        <a
          href={urls.code}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center content-center w-full color-black-400 color-hover-black-800 dark-color-white-400 dark-color-hover-white-600 outline-primary-500 dark-outline-primary-500 text-link decoration-none py-3 radius-2 b-1 b-solid b-black-200 dark-b-white-200 gap-2"
        >
          Code
          <Code />
        </a>
        <a
          href={urls.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center content-center w-full color-black-800 dark-color-white-800 outline-black-600 dark-outline-primary-500 text-link decoration-none py-3 dark-bg-black-500 bg-black-50 radius-2 gap-2"
        >
          Demo
          <ExternalLink />
        </a>
      </footer>
    </article>
  );
};

const Projects = () => {
  const projects = getProjects();

  return (
    <section className="px-5 mb-6">
      <div className="container container-sm flex flex-col">
        <header className="mb-5">
          <h4 className="text-title-5 color-black-800 dark-color-white-800">
            Proyectos
          </h4>
        </header>
        <ol className="grid grid-cols-1 grid-sm-cols-2 gap-2">
          {projects.map((otherProps) => (
            <CardProject key={otherProps.id} {...otherProps} />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Projects;
