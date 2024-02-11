import { BrandData } from "../../data/BrandData";
import useRefObserve from "../../hooks/useRefObserve";

export default function OutroSection() {
  const { sectionRef, observe } = useRefObserve();

  return (
    <section
      ref={sectionRef}
      className="h-[600px] w-screen bg-[#E5EEFD] px-8 py-12 lg:px-24 xl:px-48"
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <div className="flex flex-col gap-2">
          <h1
            className={`text-center font-libre text-2xl font-extrabold text-blue-600 transition-all duration-1000 ease-in-out sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${observe ? "translate-y-0" : "translate-y-20"}`}
          >
            Your store + our products = <br />
          </h1>
          <span
            className={`font-condensed text-center font-libre text-[54px] font-extrabold text-blue-600 transition-all duration-1000 ease-in-out sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] ${observe ? "translate-y-0 opacity-100" : "translate-y-20 opacity-60"} `}
          >
            More MMMMM
          </span>
        </div>
        <div className="flex w-full flex-row justify-center gap-2 overflow-hidden overflow-x-auto">
          {BrandData.map((brand) => (
            <img
              src={brand.src}
              alt={brand.name}
              key={brand.name}
              className={`h-32 w-32 transition-all duration-1000 ease-in-out  ${observe ? `translate-y-0 delay-${brand.delay}` : "translate-y-20"}`}
            />
          ))}
        </div>
        <div className="flex w-full items-center justify-center">
          <button
            type="button"
            className="group relative overflow-hidden rounded-lg bg-blue-600 px-4 py-3 font-mono text-sm uppercase tracking-wide text-white ease-linear xl:px-6 xl:py-4"
          >
            Learn more about selling bowery
            <div
              className={`absolute bottom-0 left-0 right-0 top-0 -z-10 h-0 w-full bg-blue-700 
                transition-all duration-500 group-hover:h-full`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
