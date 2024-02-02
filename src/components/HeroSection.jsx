import useScrollEffect from "../hooks/useScrollEffect";
import leafHighQuality from "../assets/leaf.webp";
import leafLowQuality from "../assets/low-leaf.webp";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const { scrollEffect } = useScrollEffect(200);
  const [imgSrc, setImgSrc] = useState(leafLowQuality);

  useEffect(() => {
    const img = new Image();
    img.src = leafHighQuality;
    img.onload = () => {
      setImgSrc(leafHighQuality);
    };
  }, []);

  return (
    <section
      className={` relative w-screen h-screen overflow-hidden transition-all duration-300 ${
        scrollEffect ? "bg-blue-700" : "bg-blue-600"
      }`}
    >
      <article className="w-full h-full flex flex-col justify-center items-center relative">
        <h1
          className={`uppercase font-extrabold font-libre xl:text-[340px] lg:text-[260px] md:text-[200px] sm:text-[160px] text-[100px] text-white transition-all duration-300 ${
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
      <figure className="absolute sm:-bottom-[1450px] -bottom-[1110px] left-1/2 transform -translate-x-1/2">
        <img
          src={imgSrc}
          alt="A leaf"
          className={`brightness-90 sm:max-w-[1400px] max-w-[1100px] transition-all duration-300 ${
            scrollEffect ? "translate-y-10" : ""
          }`}
        />
      </figure>
    </section>
  );
}
