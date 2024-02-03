import { LazyLoadImage } from "react-lazy-load-image-component";
import useScrollEffect from "../../../hooks/useScrollEffect";

export default function ProduceMobile() {
  const { scrollEffect } = useScrollEffect(700);

  return (
    <section
      className={`relative w-screen bg-stone-100 h-full overflow-hidden flex justify-center items-center flex-col sm:px-44 px-4 py-12`}
    >
      <figcaption className="w-full uppercase flex flex-row gap-2 items-center justify-start">
        <div className="flex flex-row gap-2 items-center">
          <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
          <p className="font-medium text-green-900 text-lg uppercase">
            Our Produce
          </p>
        </div>
      </figcaption>
      <figure className="relative py-12 w-[1450px] h-full flex justify-center items-center">
        <div className="absolute w-[300px] h-[300px] flex justify-center items-center">
          <LazyLoadImage
            src="https://static.vecteezy.com/system/resources/previews/023/742/374/non_2x/green-fresh-lettuce-illustration-ai-generative-free-png.png"
            alt=""
            className={`absolute top-0 left-0 right-0 bottom-0 brightness-90 z-10 transition-all duration-500 ${
              scrollEffect ? "rotate-45" : ""
            }`}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 w-[350px] h-[350px]">
          <div className="w-full flex justify-start">
            <p
              className={`text-green-700 font-extrabold tracking-tighter text-[36px] uppercase transition-all duration-300 sm:z-0 ${
                scrollEffect ? "translate-0" : "-translate-x-10"
              }`}
            >
              Great taste
            </p>
          </div>
          <div className="w-full flex z-10 justify-end">
            <p
              className={`text-green-300 font-extrabold tracking-tighter text-[36px] uppercase transition-all duration-300 ${
                scrollEffect ? "translate-0" : "translate-x-10"
              }`}
            >
              Lightly rune
            </p>
          </div>
          <div className="flex justify-start items-center">
            <p
              className={`text-green-400 font-extrabold tracking-tighter text-[36px] uppercase transition-all duration-300 lg:z-0 ${
                scrollEffect ? "translate-0" : "-translate-x-10"
              }`}
            >
              Vibrant eternal
            </p>
          </div>
        </div>
      </figure>
      <div className="flex flex-row gap-4 w-full items-center justify-center font-libre text-sm">
        <button
          type="button"
          className="bg-blue-600 border-2 rounded-md border-blue-600 text-white uppercase p-4 hover:bg-blue-700 hover:border-blue-700 transition"
        >
          Peep our produce
        </button>
        <button
          type="button"
          className="bg-transparent border-2 border-blue-500 rounded-md uppercase text-blue-500 p-4 hover:bg-sky-100 transition"
        >
          Find in store
        </button>
      </div>
    </section>
  );
}
