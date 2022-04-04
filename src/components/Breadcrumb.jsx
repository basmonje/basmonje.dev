import NextLink from "next/link";
import { useRouter } from "next/router";

const Breadcrumb = ({ home }) => {
  const router = useRouter();
  return (
    <section className="px-5">
      <div className="container container-sm">
        <ul className="flex flex-wrap gap-1">
          <li>
            <NextLink href={home.href}>
              <a className="decoration-none color-black-400 dark-color-white-400 text-link">
                {home.text}
              </a>
            </NextLink>
          </li>
          <li className="color-black-700 dark-color-white-700">/</li>
          <li>{router.query.slug}</li>
        </ul>
      </div>
    </section>
  );
};

export default Breadcrumb;
