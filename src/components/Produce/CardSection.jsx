export default function CardSection() {
  return (
    <section className="flex h-[800px] w-full items-center justify-center px-12 py-8 lg:p-24 xl:px-48">
      <div className="relative flex h-[400px] w-full items-center justify-between overflow-hidden rounded-lg bg-green-950 pl-12 shadow-lg">
        <div className="z-10 flex h-full  w-[350px] flex-col items-start justify-center gap-4">
          <div className="flex w-full flex-row items-center gap-1">
            <div className="h-3 w-3 rounded-sm bg-lime-300" />
            <p className="font-mono font-medium  uppercase text-stone-100">
              Produce
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-libre text-5xl font-extrabold text-stone-100">
              Find us in your frontyard
            </h1>
            <p className="text-wrap font-libre text-base text-stone-100">
              We’re all about growing food closer to where it’s sold—like a
              store near you.
            </p>
          </div>
          <div>
            <button
              type="button"
              className="group relative w-full overflow-hidden rounded-lg bg-blue-600 px-4 py-3 font-mono text-sm uppercase tracking-wide text-white xl:px-6 xl:py-4"
            >
              Get Shopping
              <div
                className={`absolute bottom-0 left-0 right-0 top-0 -z-10 h-0 w-full bg-blue-700 
                transition-all duration-500 group-hover:h-full`}
              />
            </button>
          </div>
        </div>
        <div className="flex h-full items-end justify-end">
          <img
            src="https://bowery.co/wp-content/themes/bowery-farming/assets/images/illustrator01.svg"
            alt=""
            className="absolute bottom-0 left-0 right-0 w-full sm:relative sm:w-[350px] md:w-[450px] lg:w-[550px] xl:w-[720px]"
          />
        </div>
      </div>
    </section>
  );
}

{
  /* <picture>

</picture> */
}
