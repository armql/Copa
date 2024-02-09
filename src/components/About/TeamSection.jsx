import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Cursor from "../common/Cursor";

export default function TeamSection() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [scaling, setScaling] = useState(false);
  console.log(scaling);

  useEffect(() => {
    const mousemove = (e) => {
      setLargeCircle({ x: e.clientX, y: e.clientY });
      setSmallCircle({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  const variants = {
    default: {
      x: cursorPos.x,
      y: cursorPos.y,
    },
  };

  return (
    <section className="h-full w-full bg-[#E5EEFD] py-12 pl-8 lg:pl-24 xl:pl-48">
      <div className="flex flex-row items-center justify-between">
        <div className="flex w-96 flex-col gap-8">
          <div className="flex flex-row items-center gap-1">
            <div className="h-3 w-3 rounded-sm bg-rose-500" />
            <p className="font-mono text-sm uppercase">The team</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-condensed font-libre text-6xl text-zinc-800">
              The people stepping up
            </h1>
            <p className="text-zinc-600">
              To solve the world’s biggest problems, we need all kinds of
              perspectives. That’s why our leadership team brings together
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
        <div
          className={`relative h-[500px] w-[800px] cursor-none bg-zinc-300 px-12 py-12`}
          onMouseEnter={() => setScaling(true)}
        >
          <Cursor scaling={scaling} />
        </div>
      </div>
    </section>
  );
}
