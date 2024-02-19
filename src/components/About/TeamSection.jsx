import { Fragment, useRef, useState } from "react";
import team_cursor from "../../assets/team-cursor.svg";
import { TeamData } from "../../data/TeamData";

export default function TeamSection() {
  const [selected, setSelected] = useState("Leadership");
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  function handleTab(type) {
    setSelected(type);
  }
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="h-full w-full select-none bg-[#E5EEFD] px-2 py-12 lg:pl-16 xl:pl-48">
      <div className="flex flex-col items-end justify-between md:flex-row">
        <div className="flex w-full flex-col gap-8 md:w-96">
          <div className="flex flex-row items-center gap-1">
            <div className="h-3 w-3 rounded-sm bg-rose-500" />
            <p className="font-mono text-sm uppercase">The team</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-condensed font-libre text-6xl text-zinc-800">
              The people stepping up
            </h1>
            <p className="text-zinc-600">
              To solve the world&rsquo;s biggest problems, we need all kinds of
              perspectives. That&rsquo;s why our leadership team brings together
              experts in food, tech, and sustainability.
            </p>
          </div>
          <div>
            <button
              type="button"
              className="group relative w-full overflow-hidden rounded-lg bg-blue-600 px-4 py-3 font-mono text-sm uppercase tracking-wide text-white xl:px-6 xl:py-4"
            >
              Read our story
              <div
                className={`absolute bottom-0 left-0 right-0 top-0 -z-10 h-0 w-full bg-blue-700 
                transition-all duration-500 group-hover:h-full`}
              />
            </button>
          </div>
        </div>
        <div className="w-full sm:w-fit">
          <div className="flex flex-row">
            {TeamData.map((tab) => (
              <ul
                key={tab.identifier}
                onClick={() => handleTab(tab.identifier)}
                className={`grid grid-cols-1 items-center justify-center gap-4 border-b-2 py-2 transition-all duration-300 ${selected === tab.identifier ? "border-blue-500" : "border-blue-100"}`}
              >
                <li className="w-40 cursor-pointer truncate py-2 text-center font-libre text-[11px] font-medium uppercase hover:border-blue-600 sm:text-xs">
                  {tab.identifier}
                </li>
              </ul>
            ))}
          </div>
          <div className="team_cursor relative flex h-[350px] w-full cursor-none flex-row gap-4 rounded-lg sm:p-4 md:w-[800px]">
            <div
              className="h-350 w-800 relative flex overflow-x-auto rounded-lg p-4"
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{ overflowX: "hidden" }}
            >
              <div className="flex h-full w-full flex-row gap-4 ">
                {TeamData.filter((data) => data.identifier === selected).map(
                  (data) => (
                    <Fragment key={data.identifier}>
                      {data.lead.map((response) => (
                        <div
                          key={response.id}
                          className="group relative h-full min-w-[300px] overflow-hidden rounded-lg bg-zinc-300"
                        >
                          <div
                            className={`absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/20`}
                          />
                          <img
                            src={response.image}
                            alt={response.name}
                            className="h-full w-full object-cover"
                          />
                          <div
                            className={`absolute -bottom-80 left-0 right-0 transition-all duration-700 group-hover:bottom-0`}
                          >
                            <div className="flex flex-col items-center justify-center py-2">
                              <h1 className="font-condensed text-center font-libre text-4xl font-extrabold text-white">
                                {response.name}
                              </h1>
                              <p
                                className={` ${response.personality ? "font-libre text-sm font-light tracking-wide text-zinc-300" : "font-mono text-xs uppercase tracking-tight text-white"}`}
                              >
                                {response.role}
                              </p>
                            </div>
                            {response.personality && (
                              <div className="h-16 w-full bg-green-950 px-2 py-2">
                                <h1 className="font-mono text-sm font-semibold text-green-600">
                                  Personality is {response.personality}
                                </h1>
                                <p className="text-xs font-light text-green-800">
                                  {response.personality_description}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </Fragment>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
       
        .team_cursor {
          cursor: url(${team_cursor}), auto; 
        }
      `}</style>
    </section>
  );
}
