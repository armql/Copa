import { useState } from "react";
import { AboutData } from "../../data/AboutData";
import PlusIcon from "../../assets/icon/PlusIcon";
import MinusIcon from "../../assets/icon/MinusIcon";
export default function CardSection() {
  const [selected, setSelected] = useState("");

  function handleCard(id) {
    setSelected(id);
  }

  return (
    <section className="h-full w-full bg-[#E5EEFD] px-8 py-12 lg:px-24 xl:px-48">
      <div className="flex h-full w-full flex-col-reverse justify-between gap-2 rounded-lg bg-green-950/95 px-8 shadow-lg md:h-[700px] md:flex-row">
        <div className="relative flex h-full w-full flex-col items-center justify-start gap-6 py-24 md:w-[650px]">
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
          <div className="absolute bottom-0 left-0 right-0 -z-10">
            <img
              src="https://bowery.co/wp-content/themes/bowery-farming/assets/images/illustration03.svg"
              alt=""
              className="h-full w-[600px] lg:w-full"
            />
          </div>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 pt-12 md:h-[800px] md:w-[550px] md:py-24">
          {AboutData.map((data) => (
            <div
              key={data.id}
              className={`transition-all duration-500 ${selected === data.id ? "h-44" : "h-14"} w-full overflow-hidden border-t-2 border-green-900`}
            >
              <button
                type="button"
                disabled={data.id === selected}
                onClick={() => handleCard(data.id)}
                className={`group flex w-full flex-row justify-between px-2 py-6 transition ${selected === data.id ? "cursor-default" : "cursor-pointer"}`}
              >
                <div className="flex flex-row items-center gap-4 font-montserrat tracking-wide">
                  <p
                    className={`text-sm  ${selected === data.id ? "text-white" : "text-green-50 opacity-80 transition group-hover:text-white group-hover:opacity-100"}`}
                  >
                    {data.id}
                  </p>
                  <h1 className="truncate font-medium text-white">
                    {data.title}
                  </h1>
                </div>
                <div
                  className={`font-bold  transition-all  duration-500  ${selected === data.id ? "rotate-45 text-white" : "text-green-200 opacity-60 group-hover:text-white group-hover:opacity-100"}`}
                >
                  {selected === data.id ? <MinusIcon /> : <PlusIcon />}
                </div>
              </button>
              <div
                className={`text-wrap px-8 text-sm  text-green-100 transition-all duration-500`}
              >
                {data.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
