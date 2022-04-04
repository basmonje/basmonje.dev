import Search from "./Search";
import { Tags } from "./Snippets";

export const HeroSnippets = ({ value, onChange }) => {
  return (
    <section className="px-5 pb-5 pt-8">
      <div className="container container-sm">
        <header className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <h1 className="text-title-1 color-black-800 dark-color-white-800">
              Snippets
            </h1>
            <p className="text-subtitle-2 color-black-600 dark-color-white-600">
              Fragmentos de códigos
            </p>
          </div>
          <Search
            value={value}
            onChange={onChange}
            placeholder="Buscar"
            name="query"
          />
        </header>
      </div>
    </section>
  );
};

export const HeroSnippet = ({ title, summary, tags, publishedAt }) => {
  return (
    <section className="px-5 my-5">
      <div className="container container-sm">
        <header className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <h1 className="text-title-1 color-black-800 dark-color-white-800">
              {title}
            </h1>
            <p className="text-subtitle-2 color-black-600 dark-color-white-600">
              {summary}
            </p>
          </div>
          <div className="flex flex-row content-between">
            <Tags tags={tags} />
            <span>{publishedAt}</span>
          </div>
        </header>
      </div>
    </section>
  );
};
