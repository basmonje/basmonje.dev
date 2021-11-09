import { Container, Box, Button } from "@basmonje/quarks_ui";
import Link from "next/link";
import { ArrowDown } from "@basmonje/icons";

export default function Hero() {
  return (
    <div
      id="hero"
      className="--flex --flex-col --items-center --border-bottom-xs --border-gray-5"
    >
      <Container size="small">
        <Box className="--flex --flex-col --content-center --border-x-none --border-sm-x-xs --p-3 --border-gray-5 --td-bg-hover-gray-7 --py-200">
          <h1 className="text-bold text-4xl">Bastián Monje</h1>
          <p className="text-sm">Estudiante de desarrollo de software</p>
          <span className="text-base mt-2">
            Autodidacta, apasionado por la tecnología, amante de la música y las
            ciencias.
          </span>

          <div className="--flex --items-center --content-center --pt-5">
          <Link href="#projects">
            <a className="--outline-none">
              <Button bgHv="warning">
                <ArrowDown />
              </Button>
            </a>
          </Link>
          </div>
        </Box>
      </Container>
    </div>
  );
}
