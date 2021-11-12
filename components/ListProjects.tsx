import { Container, Card, Link } from "@basmonje/quarks_ui";

export const defaultProjects = {
  projects: [
    {
      title: "Javascript Master Escalab Academy",
      short: "@basmonje/shopping_escalab",
      url: "https://github.com/basmonje/shopping_escalab",
    },
    {
      title: "Libreria de componentes React",
      short: "@basmonje/quarks",
      url: "https://github.com/basmonje/quarks",
    },
    {
      title: "Librería de Iconos React",
      short: "@basmonje/icons",
      url: "https://github.com/basmonje/icons",
    },
  ],
};

function ListProjects({ projects }: typeof defaultProjects) {
  return (
    <div className="" id="projects">
      <Container size="small">
        <div className="--mt-100 --p-b-5">
          <h2 className="text-xl">Mis proyectos</h2>
        </div>
        <div className="--grid --grid-col-1 --grid-sm-col-2 --gap-sm">
          {projects &&
            projects.map((project, index) => (
              <Card
                key={index}
                radius="large"
                className="--border-xs --border-gray-5 --td-bg-hover-gray-7"
              >
                <Card.Header className="">
                  <h5 className="text-base text-normal">{project.title}</h5>
                </Card.Header>
                <Card.Footer className="--flex --flex-row --items-center --content-between --p-x-2">
                  <span className="text-sm text-thin">{project.short}</span>
                  <Link
                    href={project.url}
                    target="__blank"
                    aria-label={project.title}
                    className="link-white"
                  >
                    Ver
                  </Link>
                </Card.Footer>
              </Card>
            ))}
        </div>
      </Container>
    </div>
  );
}

ListProjects.defaultProps = defaultProjects;

export default ListProjects;
