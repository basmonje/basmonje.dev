import { ExternalLink } from "@basmonje/lib-icon";
import NextLink from "next/link";

export const Tags = ({ tags }) => (
  <ol className="flex flex-wrap gap-1">
    {tags.map((props, idx) => (
      <span
        key={idx}
        className="text-simple bg-black-50 dark-bg-white-50 color-black-800 dark-color-white-700 py-2 px-3 radius-2"
      >
        {props}
      </span>
    ))}
  </ol>
);

const CardSnippet = ({ slug, title, summary }) => (
  <NextLink href={`/snippet/${slug}`}>
    <a className="decoration-none outline-primary-400 color-black-400 color-hover-black-800 dark-color-white-400 dark-color-hover-white-800 text-zoom">
      <article className="flex flex-col gap-2 bg-hover-black-50 dark-bg-hover-white-50 radius-2 overflow-hidden">
        <header className="flex flex-col gap-1 p-5">
          <div className="flex content-between items-center">
            <h5 className="text-title-5 color-black-800 dark-color-white-800">
              {title}
            </h5>
            <span className="p-2 icon">
              <ExternalLink strokeWidth={2} />
            </span>
          </div>
          <p className="text-body-2 color-black-600 dark-color-white-600">
            {summary}
          </p>
        </header>
      </article>
    </a>
  </NextLink>
);

export const Snippets = ({ data }) => (
  <section className="px-5 mb-6">
    <div className="container container-sm">
      <div className="flex flex-col gap-1">
        {!data.length && (
          <p className="text-body-2 color-black-700 dark-color-white-700 px-5">
            No existe lo que estas buscando
          </p>
        )}
        {data.map((otherProps) => (
          <CardSnippet key={otherProps.slug} {...otherProps} />
        ))}
      </div>
    </div>
  </section>
);
