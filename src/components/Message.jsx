const Message = () => {
  return (
    <section className="px-5 mb-10">
      <div className="container container-sm">
        <header className="mb-5">
          <h4 className="text-title-5 color-black-800 dark-color-white-800">
            Ahora
          </h4>
        </header>
        <div className="flex flex-col gap-2">
          <p className="text-body-2 color-black-600 dark-color-white-600">
            Enfocado en la lectura, el aprendizaje y construcción de software,
            me encanta crear productos reutilizables y fáciles de utilizar.
          </p>
          <p className="text-body-2 color-black-600 dark-color-white-600">
            Actualmente estoy utilizando el lenguaje de programación Javascript
            para la gran mayoría de mis proyectos. Uso React y Next.js para
            crear interfaces de usuarios.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Message;
