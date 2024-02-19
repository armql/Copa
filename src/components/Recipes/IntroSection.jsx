export default function IntroSection() {
  return (
    <section className="flex h-[800px] w-full items-center justify-center px-12 py-8 lg:p-24 xl:px-48">
      <div className="relative h-full w-full overflow-hidden rounded-lg">
        <img
          src="https://bowery.co/wp-content/uploads/2024/01/2257-07d-07_Crostini_Closeup_0029-1024x683.png"
          alt="Crostini Closeup"
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 p-4">
          <div className="flex h-[300px] w-[600px] items-center justify-start rounded-lg bg-green-950 px-12 py-24">
            <div className="flex flex-col justify-between gap-8">
              <h1 className="font-mono uppercase text-white">
                Featured Recipes
              </h1>
              <h1 className="font-condensed font-libre text-5xl text-white">
                Baby Butter Fajita Boats
              </h1>
              <button className="w-full text-start text-white">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
