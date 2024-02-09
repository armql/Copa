import LazyImage from "../../../components/common/LazyImage";
import factory from "../../../assets/newsletter/factory.webp";
import farm from "../../../assets/newsletter/farm.webp";
import closeup from "../../../assets/newsletter/closeup.webp";

export default function NewsletterDefault() {
  return (
    <article
      className={`flex z-40 flex-col gap-4 bg-stone-100 items-start w-full justify-between xl:px-82 lg:px-32 md:px-12 transition-all duration-700 px-2 py-12 pt-10
    shadow-xl overflow-hidden`}
    >
      <div className="flex flex-col gap-2 text-start">
        <div className="flex flex-row gap-2 items-center">
          <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
          <p className="font-medium text-green-900 text-lg uppercase">
            Our Boweries
          </p>
        </div>
      </div>
      <div className="flex flex-row h-full gap-4 items-center justify-center">
        <div className="flex justify-end items-end h-full">
          <div className="w-[400px] h-[605px] flex flex-col items-end justify-end">
            <div className="w-full">
              <figure className="w-full h-[450px] relative rounded-lg overflow-hidden bg-purple-500">
                <LazyImage src={farm} alt="Farm factory" />
              </figure>
              <figcaption className="h-full w-full gap-2 py-4 px-2 flex justify-start items-start flex-col">
                <p className="font-libre text-lg">A letter from our founder</p>
                <p className="uppercase tracking-wider font-mono font-medium text-xs">
                  Company News
                </p>
              </figcaption>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-full justify-center items-center gap-12">
          <div className="w-96 items-center justify-center flex flex-col gap-4">
            <h1 className="font-extrabold font-libre tracking-tight text-5xl text-green-950">
              Leaf through what’s new.
            </h1>
            <p className="font-normal font-libre text-[14px] text-green-950 leading-relaxed tracking-wide">
              From tech to farm to table, we’re always cooking up something
              fresh.
            </p>
          </div>
          <div className="flex flex-row items-end justify-start w-full gap-4">
            <div className="w-[400px] h-[400px]">
              <div className="w-[400px] h-[605px] flex flex-col items-end justify-end">
                <figure className="w-full relative overflow-hidden h-[665px] rounded-lg bg-purple-500">
                  <LazyImage src={factory} alt="Robot factory" />
                </figure>
                <figcaption className="h-full w-full gap-2 py-4 px-2 flex justify-start items-start flex-col">
                  <p className="font-libre text-lg">
                    Part man. Part machine. All farmer.
                  </p>
                  <p className="uppercase tracking-wider font-mono font-medium text-xs">
                    FARM TECHNOLOGY
                  </p>
                </figcaption>
              </div>
            </div>
            <div className="w-full h-[300px]">
              <div className="w-full h-[420px] flex flex-col items-end justify-end">
                <figure className="w-full relative h-[450px] rounded-lg bg-purple-500 overflow-hidden">
                  <LazyImage src={closeup} alt="Crostini closeup" />
                </figure>
                <figcaption className="h-full w-full gap-2 py-4 px-2 flex justify-start items-start flex-col">
                  <p className="font-libre text-lg">
                    Bowery evolves branding, packaging, farms and launches new
                    product Part man. Part machine. All farmer.
                  </p>
                  <p className="uppercase tracking-wider font-mono font-medium text-xs">
                    COMPANY NEWS | THE PACKER
                  </p>
                </figcaption>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
