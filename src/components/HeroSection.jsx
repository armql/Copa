import { useEffect, useState } from "react";
import useScrollEffect from "../hooks/useScrollEffect";
import leafHighQuality from "../assets/leaf.webp";
import leafLowQuality from "../assets/low-leaf.webp";
import useOnLoad from "../hooks/useOnLoad";

export default function HeroSection() {
  const { loading } = useOnLoad(500);
  const { scrollEffect } = useScrollEffect(200);
  const [imgSrc, setImgSrc] = useState(leafLowQuality);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = leafHighQuality;

    const timer = setTimeout(() => {
      setImgSrc(leafHighQuality);
    }, 1000);

    img.onload = () => {
      clearTimeout(timer);
      setImgSrc(leafHighQuality);
      setImageLoaded(true);
    };

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`relative w-screen h-screen overflow-hidden transition-all duration-300 ${
        scrollEffect ? "bg-blue-700" : "bg-blue-600"
      }`}
    >
      <article className="w-full h-full flex flex-col justify-center items-center relative">
        <h1
          className={`text-white uppercase font-extrabold font-montserrat xl:text-[250px] lg:text-[240px] md:text-[200px] sm:text-[160px] text-[90px] transition-all duration-300 ${
            scrollEffect ? "scale-110 z-20" : ""
          } ${loading ? "translate-y-52" : ""}`}
        >
          Eat up
        </h1>
        <div
          className={`flex transition-all duration-500 flex-col justify-center items-center text-white text-4xl md:w-96 w-full absolute gap-4 z-10 ${
            loading ? "-bottom-60" : "bottom-5"
          }`}
        >
          <p
            className={`xl:text-xl lg:text-lg md:text-lg sm:text-base text-sm text-center font-montserrat transition-all duration-300 ${
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
      {imageLoaded && (
        <figure
          className={`absolute transition-all duration-500 left-1/2 transform -translate-x-1/2 ${
            loading
              ? "sm:-bottom-[2000px] -bottom-[2000px]"
              : "sm:-bottom-[1450px] -bottom-[1110px]"
          }`}
        >
          <img
            src={imgSrc}
            alt="A leaf"
            className={`brightness-90 sm:max-w-[1400px] max-w-[1100px] transition-all duration-300 ${
              scrollEffect ? "-translate-y-10" : ""
            }`}
          />
        </figure>
      )}
    </section>
  );
}
