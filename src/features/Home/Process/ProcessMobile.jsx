import useOnObserve from "../../../hooks/useOnObserve";
import butterhead from "../../../assets/butterhead_optimised_better.mp4";

export default function ProcessMobile() {
  const { observeRef: videoRef } = useOnObserve();

  return (
    <article className="mx-auto flex w-full flex-col items-center justify-between gap-4 bg-stone-100 px-4 py-24 sm:flex-row">
      <div className="flex flex-col gap-2 text-start">
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
        <div className="h-[400px] w-full overflow-hidden rounded-lg border-4 border-lime-700">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            src={butterhead}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </article>
  );
}
