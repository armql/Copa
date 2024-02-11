import LazyImage from "../common/LazyImage";
import vertical from "../../assets/footer/vertical-nuo.svg";
import spinach from "../../assets/footer/spinach.svg";

export default function RecipeSection() {
  return (
    <section className="h-full w-full px-14 py-12 sm:px-28 lg:px-24 xl:px-48">
      <div className="flex h-full w-full flex-col items-center justify-between gap-12 lg:flex-row lg:gap-0">
        <div className="relative shadow-sm lg:h-[300px] lg:w-[400px] xl:h-[400px] xl:w-[500px]">
          <LazyImage
            src="https://bowery.co/wp-content/uploads/2023/03/eric-adjepong-headshot-1-1-1024x930-1.webp"
            alt="Eric Adjepong"
          />
          <div className="absolute -left-12 top-0 -z-10 h-16 w-16 sm:-left-20 sm:h-24 sm:w-24">
            <img src={vertical} alt="" />
          </div>
          <div className="absolute -right-12 bottom-4 -z-10 h-20 w-20 rotate-12 sm:-right-24 sm:h-32 sm:w-32">
            <img src={spinach} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-4 lg:h-[300px] lg:w-[400px] xl:h-[400px] xl:w-[500px]">
          <div className="flex flex-row items-center gap-1">
            <div className="h-3 w-3 rounded-sm bg-lime-400" />
            <p className="font-mono text-base uppercase text-green-950">
              Recipes
            </p>
          </div>
          <div className="flex flex-col items-center justify-start gap-2">
            <h1 className="text-start font-libre text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
              The only thing better than really good produce?
            </h1>
            <p className="text-wrap font-montserrat text-base text-zinc-700 lg:text-sm xl:text-base">
              Really good recipes. Every season, we team up with
              community-minded chefs to create easy dishes using Bowery produce.
            </p>
          </div>
          <div>
            <button
              type="button"
              className="group relative w-full overflow-hidden rounded-lg bg-blue-600 px-4 py-3 font-mono text-sm uppercase tracking-wide text-white xl:px-6 xl:py-4"
            >
              Discover recipes
              <div
                className={`absolute bottom-0 left-0 right-0 top-0 -z-10 h-0 w-full bg-blue-700 
                transition-all duration-500 group-hover:h-full`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
