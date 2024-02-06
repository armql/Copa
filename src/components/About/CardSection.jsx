export default function CardSection() {
  return (
    <section className="h-screen w-screen bg-[#E5EEFD] px-48 py-12">
      <div className="flex h-[700px] w-full flex-row justify-between gap-2 rounded-lg bg-green-950/95 px-8  shadow-lg">
        <div className="relative flex w-[650px] flex-col items-center justify-start gap-6 py-24">
          <div className="flex w-full flex-row items-center gap-1">
            <div className="h-3 w-3 rounded-sm bg-lime-300" />
            <p className="font-mono text-sm uppercase text-white">At bowery</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="font-condensed font-libre text-6xl font-extrabold text-white">
              We’re creating alongside nature—not harvesting from it.
            </h1>
            <p className="font-libre text-lg text-stone-100">
              Powered by BoweryOS, our proprietary operating system, our network
              of indoor farms are growing food smarter for more people in more
              places.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <img
              src="https://bowery.co/wp-content/themes/bowery-farming/assets/images/illustration03.svg"
              alt=""
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="flex w-[550px] flex-col gap-2 py-24">
          <div className="border-t-2 border-green-900">
            <div className="group flex cursor-pointer flex-row justify-between px-2 py-4 transition">
              <div className="flex flex-row items-center gap-4 font-montserrat tracking-wide">
                <p className="text-sm text-green-50 opacity-80 transition group-hover:text-white group-hover:opacity-100">
                  01
                </p>
                <h1 className="font-medium text-white">
                  First-of-its-kind technology
                </h1>
              </div>
              <div className="font-bold text-green-200 opacity-60 transition group-hover:text-white group-hover:opacity-100">
                -
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
