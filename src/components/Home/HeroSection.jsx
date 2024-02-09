import React, { useEffect, useState } from "react";
import useScrollEffect from "../../hooks/useScrollEffect";
import leafHighQuality from "../../assets/leaf.webp";
import leafLowQuality from "../../assets/low-leaf.webp";
import useOnLoad from "../../hooks/useOnLoad";

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
      className={`relative h-screen w-screen overflow-hidden transition-all duration-300 ${
        scrollEffect ? "bg-blue-700" : "bg-blue-600"
      }`}
    >
      <article className="relative flex h-full w-full flex-col items-center justify-center">
        <h1
          className={`font-montserrat text-[90px] font-extrabold uppercase text-white transition-all duration-300 sm:text-[160px] md:text-[200px] lg:text-[240px] xl:text-[250px] ${
            scrollEffect ? "z-20 scale-110" : ""
          } ${loading ? "translate-y-72" : ""}`}
        >
          Eat up
        </h1>
        <div
          className={`absolute z-10 flex w-full flex-col items-center justify-center gap-4 text-4xl text-white transition-all duration-500 md:w-96 ${
            loading ? "-bottom-60" : "bottom-5"
          }`}
        >
          <p
            className={`text-center font-montserrat text-sm transition-all duration-300 sm:text-base md:text-lg lg:text-lg xl:text-xl ${
              scrollEffect ? "z-20 scale-110" : ""
            }`}
          >
            Deep inside our wonderful world of vertical farms, freshness runs
            free, bland gets banished, and smart produce secures the future of
            food.
          </p>
          <button className="rounded-lg bg-white px-4 py-2.5 font-libre text-sm uppercase text-blue-900">
            Discover how
          </button>
        </div>
      </article>
      {imageLoaded && (
        <figure
          className={`absolute left-1/2 -z-10 -translate-x-1/2 transform transition-all duration-500 ${
            loading
              ? "-bottom-[2000px] sm:-bottom-[2000px]"
              : "-bottom-[1110px] sm:-bottom-[1450px]"
          }`}
        >
          <img
            src={imgSrc}
            alt="A leaf"
            height={400}
            width={1400}
            className={`max-w-[1100px] brightness-90 transition-all duration-300 sm:max-w-[1400px] ${
              scrollEffect ? "-translate-y-10" : ""
            }`}
          />
        </figure>
      )}
    </section>
  );
}
