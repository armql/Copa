import useOnObserve from "../../../hooks/useOnObserve";
import butterhead from "../../../assets/butterhead_optimised.mp4";

export default function ProcessMobile() {
  const { observeRef: videoRef } = useOnObserve();

  return (
    <article className="flex sm:flex-row flex-col gap-4 bg-stone-100 items-center w-full justify-between px-4 py-24 mx-auto">
      <div className="flex flex-col gap-2 text-start">
        <div className="flex flex-row gap-2 items-center">
          <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
          <p className="font-medium text-green-900 text-lg uppercase">
            Process
          </p>
        </div>
        <h1 className="font-extrabold font-libre tracking-tight text-5xl text-green-950">
          How we grow our greens.
        </h1>
        <p className="font-light text-base text-green-950 leading-relaxed">
          With BoweryOS, the proprietary technology that powers our farms, every
          crop is the cream of the crop.
        </p>
      </div>
      <div className="flex flex-row items-end">
        <div className="w-full border-4 border-lime-700 h-[400px] overflow-hidden rounded-lg">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            src={butterhead}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </article>
  );
}
