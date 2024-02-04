import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [state, setState] = useState({
    first: false,
    second: false,
    third: false,
    final: false,
  });

  useEffect(() => {
    if (state.third) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [state.third]);

  useEffect(() => {
    const first = setTimeout(() => {
      setState((prev) => ({
        ...prev,
        first: true,
      }));
    }, 400);

    const second = setTimeout(() => {
      setState((prev) => ({
        ...prev,
        second: true,
      }));
    }, 800);

    const third = setTimeout(() => {
      setState((prev) => ({
        ...prev,
        third: true,
      }));
    }, 1200);

    // const final = setTimeout(() => {
    //   setState((prev) => ({
    //     ...prev,
    //     final: true,
    //   }));
    // }, 1600);

    return () => {
      clearTimeout(first);
      clearTimeout(second);
      clearTimeout(third);
      // clearTimeout(final);
    };
  }, []);

  return (
    <div className="bg-blue-600 w-screen h-screen flex justify-center items-center flex-col relative">
      <div
        className={`text-center w-full transition-all ease-in-out font-montserrat uppercase font-extrabold ${
          state.first
            ? "xl:text-[120px] lg:text-[100px] md:text-[80px] sm:text-[60px] text-[40px] text-blue-700 translate-y-0"
            : "xl:text-[140px] lg:text-[120px] md:text-[100px] sm:text-[80px] text-[60px] translate-y-20 text-white"
        }`}
        style={{ height: "200px" }} // Fixed height to prevent layout shift
      >
        Big Impact
      </div>
      <div
        className={`text-center w-full transition-all ease-in-out font-montserrat uppercase font-extrabold ${
          state.second
            ? "xl:text-[140px] lg:text-[120px] md:text-[100px] sm:text-[80px] text-[60px] translate-y-0 text-blue-800"
            : "xl:text-[160px] lg:text-[140px] md:text-[120px] sm:text-[100px] text-[70px] translate-y-20 text-white"
        } ${!state.first ? "hidden" : "block"}`}
        style={{ height: "200px" }} // Fixed height to prevent layout shift
      >
        Biiig Flavor
      </div>
      <div
        className={`text-center w-full transition-all ease-in-out font-montserrat uppercase font-extrabold ${
          state.third
            ? "xl:text-[250px] lg:text-[240px] md:text-[200px] sm:text-[160px] text-[90px] text-white"
            : "xl:text-[300px] lg:text-[260px] md:text-[220px] sm:text-[170px] text-[70px] text-white translate-y-20"
        } ${!state.second ? "hidden" : "block"}`}
        style={{ height: "200px" }} // Fixed height to prevent layout shift
      >
        Eat up
      </div>
      {/* <div
        className={`w-full h-full absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-white transition-all ${
          !state.final ? "opacity-0" : "opacity-100"
        }`}
      ></div> */}
    </div>
  );
}
