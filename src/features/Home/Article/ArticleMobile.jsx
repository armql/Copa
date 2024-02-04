import PlusIcon from "../../../assets/icon/PlusIcon";
import LazyImage from "../../../components/common/LazyImage";
import hq01 from "../../../assets/articles/farm-01.webp";
import hq02 from "../../../assets/articles/farm-02.webp";
import hq03 from "../../../assets/articles/farm-03.webp";
import { Fragment, useState } from "react";

const data = [
  {
    id: 1,
    image: hq01,
    title: "Kearny R&D Bowery",
    location: "New Jersey",
  },
  {
    id: 2,
    image: hq02,
    title: "Nottingham Bowery",
    location: "Maryland",
  },
  {
    id: 3,
    image: hq03,
    title: "Bethlehem Bowery",
    location: "Pennsylvania",
  },
];

export default function ArticleMobile() {
  const [selected, setSelected] = useState(1);

  const handleButtonClick = (id) => {
    setSelected(id);
  };

  return (
    <article className="flex flex-col gap-4 bg-stone-100 items-start w-full justify-between xl:px-82 lg:px-32 px-4 py-48">
      <div className="flex flex-col gap-2 text-start">
        <div className="flex flex-row gap-2 items-center">
          <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
          <p className="font-medium text-green-900 text-lg uppercase">
            Our Boweries
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full items-center justify-start">
        <div className="w-full flex flex-col gap-4">
          <h1 className="font-extrabold font-libre tracking-tight text-5xl text-green-950">
            More with less? <span>Oh yes.</span>
          </h1>
          <p className="font-normal font-libre text-[14px] text-green-950 leading-relaxed tracking-wide">
            Inspired by the Dutch word for “farm,” our{" "}
            <span className="text-blue-600 font-medium">Boweries</span> WHAT
            EVEN IS A BOWERY? A nod to the Bowery, a historic NYC neighborhood
            historically known for connecting the city to fresh farm produce in
            the 1600s. are indoor smart farms teeming with technology that helps
            us bring local foods closer to the communities we’re apart of. Our
            Boweries provide 100x more produce per square foot of land than
            traditional farms with the same footprint—with 100% renewable energy
            and 90% less water.
          </p>
        </div>

        <div className="w-full h-[500px] relative shadow-lg rounded-lg overflow-hidden transition-all group relative cursor-pointer">
          {data
            .filter((item) => item.id === selected)
            .map((item) => (
              <Fragment key={item.id}>
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent opacity-20 transition-all duration-300 from-10% to-80% group-hover:opacity-30"></div>
                <div className="absolute w-full left-0 right-0 bottom-0 text-white flex justify-center items-center py-8">
                  <p className="text-3xl font-libre">{item.title}</p>
                </div>
                <div className="absolute w-full left-0 right-0 top-0 text-white flex justify-between items-center p-8">
                  <p className="font-libre tracking-wider uppercase">
                    {item.location}
                  </p>
                  <div className="w-12 h-12 rounded-full bg-zinc-200 bg-opacity-40 backdrop-blur-sm flex justify-center items-center group-hover:bg-blue-400 group-hover:backdrop-blur-sm group-hover:bg-opacity-80">
                    <PlusIcon />
                  </div>
                </div>
                <LazyImage src={item.image} alt="bethlehem grow room" />\
              </Fragment>
            ))}
        </div>
        <div className="flex flex-row h-12 items-center justify-center gap-2 w-full px-24">
          {data.map((item) => (
            <Fragment key={item.id}>
              <button
                onClick={() => handleButtonClick(item.id)}
                className={`w-3 transition-all duration-500 border-2 rounded-full ${
                  item.id === selected
                    ? "bg-green-950 border-green-950 h-12"
                    : "bg-stone-300 border-stone-300 h-8"
                }`}
              ></button>
            </Fragment>
          ))}
        </div>
      </div>
    </article>
  );
}
