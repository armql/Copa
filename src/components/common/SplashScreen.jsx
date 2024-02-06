import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [state, setState] = useState({
    first: false,
    second: false,
    third: false,
    final: false,
  });

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

    return () => {
      clearTimeout(first);
      clearTimeout(second);
      clearTimeout(third);
    };
  }, []);

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center bg-blue-600">
      <div
        className={`w-full text-center font-montserrat text-[40px] font-extrabold uppercase text-blue-700 transition-all ease-in-out sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] ${
          state.first ? "translate-y-0" : "translate-y-20"
        }`}
        style={{ height: "200px" }} // Fixed height to prevent layout shift
      >
        Big Impact
      </div>
      <div
        className={`w-full text-center font-montserrat text-[60px] font-extrabold uppercase text-blue-800 transition-all ease-in-out sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[140px] ${
          state.second ? "translate-y-0" : "translate-y-20"
        } ${!state.first ? "hidden" : "block"}`}
        style={{ height: "200px" }} // Fixed height to prevent layout shift
      >
        Biiig Flavor
      </div>
      <div
        className={`w-full text-center font-montserrat text-[90px] font-extrabold uppercase text-white transition-all ease-in-out sm:text-[160px] md:text-[200px] lg:text-[240px] xl:text-[250px] ${
          state.third ? "" : "translate-y-20"
        } ${!state.second ? "hidden" : "block"}`}
        style={{ height: "200px" }} // Fixed height to prevent layout shift
      >
        Eat up
      </div>
    </div>
  );
}
