import NextLink from "next/link";
import { ExternalLink } from "@basmonje/lib-icon";
export const Tags = ({ tags }) => (
  <ol className="flex flex-wrap gap-1">
    {tags.map((props, idx) => (
      <span
        key={idx}
        className="text-simple bg-black-50 dark-bg-black-500 color-black-800 dark-color-white-700 py-2 px-3 radius-2"
      >
        {props}
      </span>
    ))}
  </ol>
);

const CardSnippet = ({ slug, title, summary, tags }) => {
  return (
    <NextLink href={`/snippet/${slug}`}>
      <a className="decoration-none outline-primary-400 color-black-400 color-hover-black-800 dark-color-white-400 dark-color-hover-white-800 text-zoom">
        <article className="flex flex-col gap-2">
          <header className="flex flex-col gap-1">
            <div className="flex content-between items-center">
              <h6 className="text-title-6 color-black-800 dark-color-white-800">
                {title}
              </h6>
              <span className="p-2 icon">
                <ExternalLink />
              </span>
            </div>
            <p className="text-body-2 color-black-600 dark-color-white-600">
              {summary}
            </p>
          </header>
          <footer>
            <Tags tags={tags} />
          </footer>
        </article>
      </a>
    </NextLink>
  );
};

export const Snippets = ({ data }) => {
  return (
    <section className="px-5 mb-6">
      <div className="container container-sm">
        <header className="flex items-center content-between mb-5">
          <h4 className="text-title-5 color-black-800 dark-color-white-800">
            Snippets
          </h4>
          <NextLink href="/snippets">
            <a className="color-black-600 dark-color-white-600 outline-primary-400">
              Ver más
            </a>
          </NextLink>
        </header>
        <div className="flex flex-col gap-2">
          {data.map((otherProps) => (
            <CardSnippet key={otherProps.slug} {...otherProps} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const ListSnippets = ({ data }) => {
  return (
    <section className="px-5 mb-6">
      <div className="container container-sm">
        <div className="flex flex-col gap-2">
          {data.map((otherProps) => (
            <CardSnippet key={otherProps.slug} {...otherProps} />
          ))}
        </div>
      </div>
    </section>
  );
};
