import NextLink from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { enUS, esES } from "../lang";

const Container = dynamic(import("components/Container"));

export default function NotFound() {
  const { locale } = useRouter();
  const data = locale === "en-US" ? enUS : esES;
  return (
    <Container title="404 - Bastián Monje" navbar={data.navbar}>
      <section className="px-5 my-13">
        <div className="container container-sm flex flex-col gap-2 px-5">
          <h1>{data.notFound.title}</h1>
          <div>
            <NextLink href="/">
              <a
                role="navigation"
                className="color-black-800 dark-color-white-800 outline-primary-400"
              >
                {data.notFound.link}
              </a>
            </NextLink>
          </div>
        </div>
      </section>
    </Container>
  );
}
