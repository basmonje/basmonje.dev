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
    <div className="px-2" id="projects">
      <Container size="small">
        <div className="--p-2 --border-x-xs --border-gray-5 --h-view">
          <div className="--pb-2">
            <h2 className="text-xl">Proyectos</h2>
          </div>
          <div className="--grid --grid-col-2 --gap-sm">
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
                  <Card.Footer className="--flex --flex-row items-center content-between px-2">
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
        </div>
      </Container>
    </div>
  );
}

ListProjects.defaultProps = defaultProjects;

export default ListProjects;
