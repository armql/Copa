import { LazyLoadImage } from "react-lazy-load-image-component";
import useScrollEffect from "../../../hooks/useScrollEffect";
import cabbage from "../../../assets/cabbage.webp";

export default function ProduceDefault() {
  const { scrollEffect } = useScrollEffect(700);

  return (
    <section
      className={`relative w-full bg-stone-100 h-full overflow-hidden flex justify-center items-center flex-col md:px-24 px-44 py-12 gap-12`}
    >
      <figcaption className="w-full uppercase flex flex-row gap-2 items-center justify-start">
        <div className="flex flex-row gap-2 items-center">
          <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
          <p className="font-medium text-green-900 text-lg uppercase">
            Our Produce
          </p>
        </div>
      </figcaption>
      <figure className="relative py-12 w-full h-full flex justify-center items-center">
        <div className="absolute lg:w-[450px] lg:h-[450px] w-[400px] h-[320px] flex justify-center items-center">
          <LazyLoadImage
            // src="https://bowery.co/wp-content/uploads/2023/04/strawberry.webp"
            src={cabbage}
            alt=""
            className={`absolute top-0 left-0 right-0 bottom-0 brightness-90 z-10 transition-all duration-500 ${
              scrollEffect ? "rotate-45" : ""
            }`}
          />
        </div>
        <div className="grid grid-cols-1 gap-12 w-full">
          <div className="w-full flex justify-start items-center">
            <p
              className={`sm:text-green-500 text-green-700 font-extrabold tracking-tighter xl:text-[96px] lg:text-[82px] md:text-[64px] sm:text-[48px] text-[48px] uppercase transition-all duration-300 sm:z-0 z-10 pl-24 ${
                scrollEffect ? "translate-0" : "-translate-x-10"
              }`}
            >
              Great taste
            </p>
          </div>
          <div className="w-full flex z-10 justify-end">
            <p
              className={`sm:text-green-500 text-green-950 font-extrabold tracking-tighter xl:text-[96px] lg:text-[82px] md:text-[64px] sm:text-[48px] text-[48px] uppercase transition-all duration-300 ${
                scrollEffect ? "translate-0" : "translate-x-10"
              }`}
            >
              Lightly rune
            </p>
          </div>
          <div className="flex items-center">
            <p
              className={`sm:text-green-500 text-green-400 font-extrabold tracking-tighter xl:text-[96px] lg:text-[82px] md:text-[64px] sm:text-[48px] text-[48px] uppercase transition-all duration-300 lg:z-0 z-10 ${
                scrollEffect ? "translate-0" : "-translate-x-10"
              }`}
            >
              Vibrant eternal
            </p>
          </div>
        </div>
      </figure>
      <div className="flex flex-row gap-4 font-libre text-sm">
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
