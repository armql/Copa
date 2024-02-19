import kale from "../../assets/footer/baby-kale.svg";
export default function CareerCard() {
  return (
    <section className="h-full w-screen bg-stone-100 px-8 py-32 lg:px-24 xl:px-48">
      <div className="relative h-[400px] w-full overflow-hidden rounded-3xl bg-pink-300 shadow-sm">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <p className="font-condensed font-libre text-[22px] leading-10 tracking-tighter text-white sm:text-[36px] md:text-[38px] lg:text-[42px] xl:text-[48px]">
            LET’S FEED THE FUTURE
          </p>
          <h1 className="font-condensed flex items-center font-libre text-[48px]  leading-10 tracking-tighter text-white sm:text-[96px] md:text-[120px] lg:text-[140px] xl:text-[170px]">
            TOGETH
            <img
              src="https://bowery.co/wp-content/themes/bowery-farming/assets/images/illustration-cta.svg"
              alt=""
              className="h-14 w-14 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-36 lg:w-36 xl:h-40 xl:w-40"
            />
            R
          </h1>
          <div className="mt-2 flex w-full items-center justify-center">
            <button
              type="button"
              className="group relative overflow-hidden rounded-lg bg-pink-600 px-4 py-3 font-mono text-xs uppercase tracking-wide text-white ease-linear sm:text-sm md:text-base lg:text-base xl:px-6 xl:py-4 xl:text-base"
            >
              See open roles
              <div
                className={`absolute bottom-0 left-0 right-0 top-0 -z-10 h-0 w-full bg-pink-700 
                transition-all duration-500 group-hover:h-full`}
              />
            </button>
          </div>

          <div className="absolute -right-16 -top-10 -z-10 -rotate-45 sm:-right-12 sm:-top-10 md:-right-16 md:-top-10 lg:-right-20 lg:-top-20">
            <img
              src={kale}
              alt=""
              className="h-40 w-40 sm:h-40 sm:w-40 md:h-40 md:w-40 lg:h-56 lg:w-56 xl:h-60 xl:w-60"
            />
          </div>
          <div className="absolute -bottom-6 right-10 -z-10 -rotate-45 sm:-bottom-6 md:-bottom-10 lg:-bottom-20">
            <img
              src="https://bowery.co/wp-content/themes/bowery-farming/assets/images/illustration-cta-2.svg"
              alt=""
              className="h-32 w-32 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-56 lg:w-56 xl:h-60 xl:w-60"
            />
          </div>
          <div className="absolute -left-6 -top-4 -z-10 -rotate-45 sm:-left-14 sm:top-10 md:-left-10 md:-top-10 lg:-left-14 lg:-top-20">
            <img
              src="https://bowery.co/wp-content/themes/bowery-farming/assets/images/illustration-cta-1.svg"
              alt=""
              className="h-32 w-32 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-56 lg:w-56 xl:h-60 xl:w-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
