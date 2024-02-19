import useOnObserve from "../../hooks/useOnObserve";
import strawberry from "../../assets/footer/strawberry.svg";
import spinach from "../../assets/footer/spinach.svg";
export default function HeroSection() {
  const { observeRef: videoRef, observe } = useOnObserve();

  return (
    <section className="h-full w-full bg-[#E5EEFD] px-8 py-12 lg:px-24 xl:px-48">
      <div className="flex flex-col items-center justify-center gap-12 py-24">
        <div>
          <p className="w-full text-center text-sm font-medium uppercase text-green-900">
            About us
          </p>
        </div>
        <div className="lg:24px flex w-full flex-col items-center justify-center gap-8 px-0 xl:px-48">
          <h1 className="font-condensed text-center font-libre text-7xl text-green-950">
            Wherever food is needed, we can grow it.
          </h1>
          <p className="w-[600px] text-center font-libre text-xl">
            We&rsquo;re not afraid of big, delicious plans. At Bowery,
            we&rsquo;re helping secure the future of food by growing smart
            produce that&rsquo;s more reliable and less harmful—wherever
            it&rsquo;s needed.
          </p>
        </div>
      </div>
      <div className="flex h-full w-full items-center justify-center">
        <div
          className={`relative h-[600px] w-[450px] rounded-lg shadow-md transition-all duration-500 sm:w-[550px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] ${observe ? "scale-110" : ""}`}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            src={
              "https://bowery.co/wp-content/uploads/2023/04/vision-video.mp4"
            }
            alt=""
            className={`h-full w-full object-cover brightness-75 contrast-150 `}
          />
          <div className="absolute -left-40 top-0 -z-10 sm:-left-52">
            <img
              src={strawberry}
              alt=""
              className="h-52 w-52 sm:h-60 sm:w-60 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96"
            />
          </div>
          <div className="absolute -right-20 bottom-0 -z-10 sm:-right-40">
            <img
              src={spinach}
              alt=""
              className="h-52 w-52 sm:h-60 sm:w-60 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96"
            />
          </div>
        </div>
      </div>
      <p className="flex flex-col gap-2 py-14 text-center text-2xl font-normal text-green-950">
        If we want to secure tomorrow, we need a smarter way. <br />
        <p className="">Starting today.</p>
      </p>
    </section>
  );
}
