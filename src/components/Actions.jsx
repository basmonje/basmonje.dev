import { useRouter } from "next/router";

const Actions = () => {
  const router = useRouter();
  return (
    <section className="px-5 my-10">
      <div className="container container-sm">
        <div className="px-5 flex flex-col">
          <button
            onClick={router.back}
            className="p-5 b-1 b-solid b-black-400 dark-b-white-400 bg-transparent pointer radius-2 bg-hover-black-50 dark-bg-hover-white-50 text-button"
          >
            Volver atrás
          </button>
        </div>
      </div>
    </section>
  );
};

export default Actions;
