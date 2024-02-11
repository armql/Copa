import QA from "../../features/Produce/QA";

export default function HeroSection() {
  return (
    <section className="relative flex h-screen w-screen flex-col items-center justify-end border-black bg-[#f1f9dc] px-24 dark:bg-red-400 lg:px-44">
      <div className="flex h-full w-full flex-col items-center justify-end gap-12">
        <p className="text-wide w-full text-center font-mono text-lg uppercase text-green-950 dark:font-bold">
          Our produce
        </p>
        <h1 className="text-center font-mono text-6xl font-extrabold text-green-950">
          Defying laws of flavour
        </h1>
        <QA />
        <img
          src="https://bowery.co/wp-content/uploads/2023/04/hero-img-produce-1024x254.webp"
          alt="hero img"
          className=""
        />
      </div>
    </section>
  );
}
