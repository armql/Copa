import useOnObserve from "../../../hooks/useOnObserve";
import butterhead from "../../../assets/butterhead_optimised_better.mp4";

export default function ProcessDefault() {
  const { observeRef: videoRef } = useOnObserve();
  return (
    <article className="xl:px-82 mx-auto flex w-full flex-col items-center justify-between gap-4 bg-stone-100 px-2 py-48 sm:flex-row  md:px-12 lg:px-32">
      <div className="flex w-96 flex-col gap-2 text-start">
        <div className="flex flex-row items-center gap-2">
          <div className="h-3 w-3 rounded-sm bg-green-400"></div>
          <p className="text-lg font-medium uppercase text-green-900">
            Process
          </p>
        </div>
        <h1 className="font-libre text-5xl font-extrabold tracking-tight text-green-950">
          How we grow our greens.
        </h1>
        <p className="text-base font-light leading-relaxed text-green-950">
          With BoweryOS, the proprietary technology that powers our farms, every
          crop is the cream of the crop.
        </p>
      </div>
      <div className="flex flex-row items-end">
        <div className="h-[400px] w-[450px] overflow-hidden rounded-lg shadow-md">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            src={butterhead}
            alt=""
            className="h-full w-full object-cover brightness-75 contrast-150"
          />
        </div>
      </div>
    </article>
  );
}
