import { Container, Box, Button } from "@basmonje/quarks_ui";
import Link from "next/link";
import { ArrowDown } from "@basmonje/icons";

export default function Hero() {
  return (
    <div id="hero" className="--p-x-3 --tw-bg-gray-1">
      <Container size="medium">
        <Box className="--flex --flex-col --items-center --content-center --p-t-100 --p-b-100">
          <h1 className="--text-4xl --text-height-4xl --text-sm-6xl --text-sm-height-6xl --text-center">
            Bastián Monje
          </h1>
          <p className="--p-x-3 --p-sm-x-100 --p-md-x-200 --text-center">
            Soy desarrollador full stack interesado en jamstack y sistemas de
            diseño. Me encanta construir contenido simple y escribir las cosas
            que voy aprendiendo en este largo camino del desarrollo.
          </p>

          <div className="--flex --gap-sm --items-center --content-center --p-t-5">
            <Link href="#recently-post">
              <a className="--outline-none">
                <Button bg="success" bgHv="success">
                  Últimos post
                </Button>
              </a>
            </Link>
            <Link href="/snippets">
              <a className="--outline-none">
                <Button bg="gray" bgHv="gray">
                  Snippets
                </Button>
              </a>
            </Link>
          </div>
        </Box>
      </Container>
    </div>
  );
}
