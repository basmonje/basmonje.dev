import { Tags } from "./Snippets";

import Search from "./Search";
import format from "../utils/format";

export const HeroSnippets = ({ value, onChange }) => (
  <section className="px-5 py-5 py-sm-8">
    <div className="container container-sm">
      <header className="flex flex-col gap-2 px-5">
        <div className="flex flex-col gap-1">
          <div className="flex flex-row content-between overflow-hidden">
            <h1 className="text-title-1 color-black-800 dark-color-white-800">
              Snippets
            </h1>
          </div>
          <p className="text-subtitle-2 color-black-600 dark-color-white-600">
            Fragmentos de códigos para reutilizar, Javascript, Python, React,
            Nextjs, etc.
          </p>
        </div>
        <Search
          value={value}
          onChange={onChange}
          placeholder="Buscar snippet"
          name="query"
        />
      </header>
    </div>
  </section>
);

export const HeroSnippet = ({ title, summary, tags, publishedAt }) => (
  <section className="px-5 mb-5 mt-6">
    <div className="container container-sm">
      <header className="flex flex-col gap-2 px-5">
        <div className="flex flex-col gap-1">
          <h1 className="text-title-1 color-black-800 dark-color-white-800 text-wrap">
            {title}
          </h1>
          <p className="text-subtitle-2 color-black-600 dark-color-white-600">
            {summary}
          </p>
        </div>
        <div className="flex flex-row content-between">
          <Tags tags={tags} />
          <span className="color-black-600 dark-color-white-600">
            {format({
              date: publishedAt,
            })}
          </span>
        </div>
      </header>
    </div>
  </section>
);
