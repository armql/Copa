import useScrollEffect from "../hooks/useScrollEffect";

export default function HeroSection() {
  const { scrollEffect } = useScrollEffect(200);

  return (
    <section
      className={` relative w-screen h-screen overflow-hidden transition-all duration-300 ${
        scrollEffect ? "bg-blue-700" : "bg-blue-600"
      }`}
    >
      <article className="w-full h-full flex flex-col justify-center items-center relative">
        <h1
          className={`uppercase font-extrabold font-libre xl:text-[380px] lg:text-[320px] md:text-[240px] sm:text-[120px] text-[120px] text-white transition-all duration-300 ${
            scrollEffect ? "scale-110 z-20" : ""
          }`}
        >
          Eat up
        </h1>
        <div className="flex flex-col justify-center items-center text-white text-4xl w-96 absolute bottom-5 gap-4 z-10">
          <p
            className={`text-lg text-center font-montserrat transition-all duration-300 ${
              scrollEffect ? "scale-110 z-20" : ""
            }`}
          >
            Deep inside our wonderful world of vertical farms, freshness runs
            free, bland gets banished, and smart produce secures the future of
            food.
          </p>
          <button className="bg-white uppercase text-blue-900 font-libre px-4 py-2.5 text-sm rounded-lg">
            Discover how
          </button>
        </div>
      </article>
      <figure className="absolute -bottom-[1000px] left-1/2 transform -translate-x-1/2">
        <img
          src="https://bowery.co/wp-content/uploads/2023/04/baby-butter-1.webp"
          alt="A leaf"
          className={`brightness-90 max-w-[1100px] transition-all duration-300 ${
            scrollEffect ? "translate-y-10" : ""
          }`}
        />
      </figure>
    </section>
  );
}
