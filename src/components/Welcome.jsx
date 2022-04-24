const Welcome = () => (
  <header className="px-5 py-5 py-sm-8">
    <div className="container container-sm">
      <div className="flex flex-col px-5">
        <h1 className="text-title-2 text-sm-title-1 color-black-800 dark-color-white-800 text-wrap mb-4">
          Bastián Monje
        </h1>
        <p className="text-subtitle-1 color-black-600 dark-color-white-600 text-wrap  mb-4">
          Desarrollador independiendete y full-stack con sede en Concepción,
          tengo una gran pasión por aprender y crear servicios digitales.
        </p>
        <p className="text-subtitle-1 color-black-600 dark-color-white-600 text-wrap  mb-4">
          Enfocado en la lectura, el aprendizaje y construcción de librerías de
          componentes, sistemas de diseños y guías de estilos.
        </p>
        <p className="text-subtitle-1 color-black-600 dark-color-white-600 text-wrap">
          Si quieres contactarte conmigo hazlo por{" "}
          <a
            href="https://twitter.com/basmonje"
            target="_blank"
            rel="noopener noreferrer"
            className="color-black-700 dark-color-white-700 color-hover-black-800 dark-color-hover-white-800"
          >
            @basmonje
          </a>{" "}
          ó al correo{" "}
          <a
            href="mailto:devmonje@gmail.com"
            className="color-black-700 dark-color-white-700 color-hover-black-800 dark-color-hover-white-800"
          >
            devmonje@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  </header>
);

export default Welcome;
