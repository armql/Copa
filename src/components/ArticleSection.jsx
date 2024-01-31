import PlusIcon from "./icons/PlusIcon";

export default function ArticleSection() {
  return (
    <article className="flex flex-col gap-4 bg-stone-100 items-start w-full justify-between xl:px-82 lg:px-32 md:px-12 px-2 py-48">
      <caption className="flex flex-col gap-2 text-start">
        <div className="flex flex-row gap-2 items-center">
          <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
          <p className="font-medium text-green-900 text-lg uppercase">
            Our Boweries
          </p>
        </div>
      </caption>
      <div className="grid grid-rows-2 w-full h-full items-center">
        <div className="flex flex-row w-full justify-around">
          <div className="w-96 flex flex-col gap-4">
            <h1 className="font-extrabold font-libre tracking-tight text-5xl text-green-950">
              More with less? <span>Oh yes.</span>
            </h1>
            <p className="font-normal font-libre text-[14px] text-green-950 leading-relaxed tracking-wide">
              Inspired by the Dutch word for “farm,” our{" "}
              <span className="text-blue-600 font-medium">Boweries</span> WHAT
              EVEN IS A BOWERY? A nod to the Bowery, a historic NYC neighborhood
              historically known for connecting the city to fresh farm produce
              in the 1600s. are indoor smart farms teeming with technology that
              helps us bring local foods closer to the communities we’re apart
              of. Our Boweries provide 100x more produce per square foot of land
              than traditional farms with the same footprint—with 100% renewable
              energy and 90% less water.
            </p>
          </div>

          <div className="w-96 h-[500px] shadow-lg rounded-lg overflow-hidden transition-all group relative cursor-pointer">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent opacity-20 transition-all duration-300 from-10% to-80% group-hover:opacity-30"></div>
            <div className="absolute w-full left-0 right-0 bottom-0 text-white flex justify-center items-center py-8">
              <p className="text-3xl font-libre">Kearny R&D Bowery</p>
            </div>
            <div className="absolute w-full left-0 right-0 top-0 text-white flex justify-between items-center p-8">
              <p className="font-libre tracking-wider uppercase">New Jersey</p>
              <figure className="w-12 h-12 rounded-full bg-zinc-200 bg-opacity-40 backdrop-blur-sm flex justify-center items-center group-hover:bg-blue-400 group-hover:backdrop-blur-sm group-hover:bg-opacity-80">
                <PlusIcon />
              </figure>
            </div>
            <img
              src="https://bowery.co/wp-content/uploads/2023/03/bethlehem-grow-room-4-1024x681-copy.webp"
              alt="bethlehem grow room"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-row w-full justify-around items-end">
          <div className="w-96 group transition-all relative h-[500px] shadow-lg rounded-lg overflow-hidden cursor-pointer">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent opacity-20 transition-all duration-300 from-10% to-80% group-hover:opacity-30"></div>
            <div className="absolute w-full left-0 right-0 bottom-0 text-white flex justify-center items-center py-8">
              <p className="text-3xl font-libre">Kearny R&D Bowery</p>
            </div>
            <div className="absolute w-full left-0 right-0 top-0 text-white flex justify-between items-center p-8">
              <p className="font-libre tracking-wider uppercase">New Jersey</p>
              <figure className="w-12 h-12 rounded-full bg-zinc-200 bg-opacity-40 backdrop-blur-sm flex justify-center items-center group-hover:bg-blue-400 group-hover:backdrop-blur-sm group-hover:bg-opacity-80">
                <PlusIcon />
              </figure>
            </div>
            <img
              src="https://bowery.co/wp-content/uploads/2023/04/farm-photo-1.webp"
              alt="farm photo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[600px] h-[350px] shadow-lg rounded-lg overflow-hidden relative transition-all group cursor-pointer">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent opacity-20 transition-all duration-300 from-10% to-80% group-hover:opacity-30"></div>
            <div className="absolute w-full left-0 right-0 bottom-0 text-white flex justify-center items-center py-8">
              <p className="text-3xl font-libre">Kearny R&D Bowery</p>
            </div>
            <div className="absolute w-full left-0 right-0 top-0 text-white flex justify-between items-center p-8">
              <p className="font-libre tracking-wider uppercase">New Jersey</p>
              <figure className="w-12 h-12 rounded-full bg-zinc-200 bg-opacity-40 backdrop-blur-sm flex justify-center items-center group-hover:bg-blue-400 group-hover:backdrop-blur-sm group-hover:bg-opacity-80">
                <PlusIcon />
              </figure>
            </div>
            <img
              src="https://bowery.co/wp-content/uploads/2023/03/screenshot-2023-04-14-at-171222-818x1024-1.webp"
              alt="bethlehem grow room"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
