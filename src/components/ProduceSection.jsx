import useScrollEffect from "../hooks/useScrollEffect";

export default function ProduceSection() {
  const { scrollEffect } = useScrollEffect(700);

  return (
    <section
      className={`relative w-screen bg-stone-100 h-screen overflow-hidden flex justify-center items-center flex-col px-44 py-12`}
    >
      <figure className="relative w-[1450px] h-full flex justify-center items-center">
        <figcaption className="absolute top-40 left-0 uppercase flex flex-row gap-2 items-center justify-start">
          <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
          <p className="font-medium text-green-900">Our Produce</p>
        </figcaption>
        <div className="absolute lg:w-[450px] lg:h-[450px] w-[400px] h-[320px] flex justify-center items-center">
          <img
            // src="https://bowery.co/wp-content/uploads/2023/04/strawberry.webp"
            src="https://static.vecteezy.com/system/resources/previews/023/742/374/non_2x/green-fresh-lettuce-illustration-ai-generative-free-png.png"
            alt=""
            className={`absolute top-0 left-0 right-0 bottom-0 brightness-90 z-10 transition-all duration-500 ${
              scrollEffect ? "rotate-45" : ""
            }`}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 xl:w-full lg:w-[1200px] md:w-[700px] sm:w-[600px] w-[500px] h-[400px]">
          <div className="w-full flex justify-start items-center">
            <p
              className={`sm:text-green-500 text-green-700 font-extrabold tracking-tighter xl:text-[96px] lg:text-[82px] md:text-[64px] sm:text-[48px] text-[48px] uppercase transition-all duration-300 sm:z-0 z-10 ${
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
