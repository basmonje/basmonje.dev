import NextLink from "next/link";
import Container from "../src/components/Container";

export default function NotFound() {
  return (
    <Container title="404 - Bastián Monje">
      <section className="px-5 my-13">
        <div className="container container-sm flex flex-col gap-2 px-5">
          <h1>404 - No hemos encontrado lo que buscas.</h1>
          <div>
            <NextLink href="/">
              <a className="color-black-800 dark-color-white-800 outline-primary-400">
                Volver al inicio
              </a>
            </NextLink>
          </div>
        </div>
      </section>
    </Container>
  );
}
