const Welcome = ({ data }) => (
  <header className="px-5 py-5 py-sm-8">
    <div className="container container-sm">
      <div className="flex flex-col px-5">
        <h1 className="text-title-2 text-sm-title-1 color-black-800 dark-color-white-800 text-wrap mb-4">
          {data.title}
        </h1>
        {data.content.map((text, idx) => (
          <p
            key={idx}
            className="text-subtitle-1 color-black-600 dark-color-white-600 text-wrap  mb-5"
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  </header>
);

export default Welcome;
