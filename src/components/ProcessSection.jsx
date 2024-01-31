import { useEffect, useRef, useState } from "react";

export default function ProcessSection() {
  const videoRef = useRef(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true);
          videoRef.current.play();
        } else {
          setIsVideoVisible(false);
          videoRef.current.pause();
        }
      });
    }, options);

    observer.observe(videoRef.current);

    return () => {
      observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <article className="flex sm:flex-row flex-col gap-4 bg-stone-100 items-center w-full justify-between xl:px-82 lg:px-32 md:px-12 px-2  py-48 mx-auto">
      <caption className="flex flex-col gap-2 w-96 text-start">
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
      </caption>
      <div className="flex flex-row items-end">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 400 240"
            enableBackground="new 0 0 400 240"
            xmlSpace="preserve"
          >
            <g
              id="water-can"
              style={{
                transform: "none",
                rotate: "none",
                scale: "none",
                opacity: 1,
                visibility: "inherit",
                transformOrigin: "0px 0px",
              }}
              data-svg-origin="186.56807708740234 211.62141036987305"
              transform="matrix(1,0,0,1,100,0.00001)"
            >
              <g
                id="water-can-inner"
                style={{
                  transform: "none",
                  rotate: "none",
                  scale: "none",
                  transformOrigin: "0px 0px",
                }}
                data-svg-origin="170.3403434753418 238.26568984985352"
                transform="matrix(1,0,0,1,99.4412,-26.64428)"
              >
                <path
                  id="can-bg"
                  fill="#325009"
                  d="M74.2,103.8l3.3-0.3c4.1-0.4,10.2-0.2,12.7,0l4,0.4c6.1,0.6,12.3,2.4,14.1,4
            c1.9,3.2-12.4,7.5-22.7,7.1c-3.9-0.2-9.4,0-13.9-0.6c-7.2-1-12.9-3-12-4.6c0.4-0.7,0.9-1.2,1.8-1.8
            C64.3,105.7,68.1,104.5,74.2,103.8z"
                ></path>
                <path
                  id="can-drop-4"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="#0F6EFD"
                  d="M109.2,39.7c-7.9,0.7-12.3,3.3-12.3,7.4
            c0,4.6,4.2,4.8,12.9,0.5C119.9,42.5,119.6,38.8,109.2,39.7z"
                  style={{ opacity: 0, visibility: "hidden" }}
                ></path>
                <path
                  id="can-drop-3"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="#0F6EFD"
                  d="M129.7,39.9c-4.2,1.9-2,7.1,3.1,7.5
            c0.9,0.1,3.5,0.3,5.7,0.5c5.2,0.4,5.8,0,4.1-2.9C140.2,40.9,133.5,38.2,129.7,39.9z"
                  style={{ opacity: 0, visibility: "hidden" }}
                ></path>
                <path
                  id="can-drop-2"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="#0F6EFD"
                  d="M154.2,51.6c-2.7,1-4.1,3.7-3.4,6.4
            c0.4,1.6,10.9,12.4,11.9,12.4c0.8,0,1.1-1.4,1.1-5.7C163.8,56,159.1,49.7,154.2,51.6z"
                  style={{ opacity: 0, visibility: "hidden" }}
                ></path>
                <path
                  id="can-drop-5"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="#0F6EFD"
                  d="M84,63.8c-6.9,9.8-5.9,23,1.7,20.9
            c5.3-1.5,6.8-8.7,3.7-17.8C87.4,61.4,86.2,60.7,84,63.8z"
                  style={{ opacity: 0, visibility: "hidden" }}
                ></path>
                <path
                  id="can-drop-1"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="#0F6EFD"
                  d="M164.5,82.2c-2.8,0.8-3.3,2.4-3.3,10.4
            c0,9.7,0.1,10.1,2.9,7.5C172.2,92.5,172.5,80,164.5,82.2z"
                  style={{ opacity: 0, visibility: "hidden" }}
                ></path>
                <path
                  id="can-drop-6"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="#0F6EFD"
                  d="M81.8,99.9c-10.5,12.5-8.9,29.4,2.5,26.7
            c8.1-1.9,10.3-11,5.6-22.7C87,96.8,85.2,95.9,81.8,99.9z"
                  style={{ opacity: 1, visibility: "inherit" }}
                ></path>
                <path
                  id="can-body"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="#FE6A01"
                  d="M73.3,114.2c-5.4-0.7-7.1-1-8.7-1.6
            c-2.2-0.9-3.9-2-4.9-2.8c-0.3,0.2-0.4,0.3-1.4,4.5c-0.4,1.9-0.9,3.7-1,4.1c-0.1,0.5-0.7,0.8-3.1,1.3c-27.6,6.3-45.4,26.2-49.6,55.5
            c-2,14,0.4,26,6.8,34.6c2.6,3.5,7.6,7.9,13.8,12.2l1.4,1l-0.7,1.6c-0.7,1.6-2.3,5.3-3.6,8.9c-1.7,4.5-2.2,4.3,13.9,4.1
            c7.5-0.1,15-0.1,18.2,0.1c6.8,0.4,70.6,0.8,71,0.4c0.2-0.1,0.8-1.5,1.3-3.1c0.5-1.6,1.8-4.9,2.7-7.3c2.4-6.2,3.9-10.5,5.2-14.5
            c0.6-1.9,1.3-4.1,1.7-4.9c0.8-2.2,3.8-12.1,4.8-15.8c0.3-1.2,1.1-3.8,1.7-5.8c0.6-2,1.8-5.9,2.6-8.7c2.5-8.6,7.3-23.3,11.9-36.4
            c2.3-6.6,3.2-9.3,6.4-19.9c1.3-4.4,2.5-7.9,2.9-8.7c1.7-4.2-0.6-6.4-5.4-7c-5.7-0.7-7.9,1.5-12.2,12.5c-0.8,2.1-2.3,5.6-3.2,7.6
            c-2.1,4.7-4.9,11.5-6.4,15.6c-0.6,1.7-1.3,3.4-1.5,3.7c-0.2,0.3-0.8,2-1.4,3.7c-0.6,1.7-1.7,4.5-2.3,6.1c-1.9,5.2-8,20.8-10.4,26.7
            c-0.8,2-1.9,4.8-2.5,6.4c-1.1,2.7-1.6,3.3-1.6,1.6c0-0.5-0.5-4.7-1.2-9.3c-1.2-8.5-1.9-14.2-2.4-18.5c-0.1-1.2-0.4-3.2-0.6-4.3
            c-0.3-2-1.8-13.6-2.4-18.7c-0.2-1.4-0.6-5.4-0.9-8.8c-1.2-13.1-2.5-21.2-3.6-22.2c-0.4,2.6-5.6,5.2-13.4,6.4
            c-1.6,0.2-3.2,0.8-13.3,0.6C75.1,114.6,75.7,114.5,73.3,114.2z M52.9,133.7c0,0.9-4.9,15.5-8.9,26.7c-1,2.7-3.9,11.9-5.1,16
            c-0.6,2.1-1.6,5.2-2.1,6.9c-1,3.2-3.6,11.8-4.4,14.5c-0.6,2.4-2.5,9.6-2.5,9.7c0,0.7-1.6-0.2-3.5-2c-11.9-11.3-11-35.3,2.1-52.8
            c0.9-1.2,2-2.7,2.5-3.5c3.6-5.4,13.5-13,19.8-15.2C52.7,133.5,53,133.4,52.9,133.7z"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <div className="w-[450px] border-4 border-lime-700 h-[400px] overflow-hidden rounded-lg">
          <video
            ref={videoRef}
            autoPlay
            loop
            src="https://bowery.co/wp-content/uploads/2023/05/butterhead_optimised.mp4"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </article>
  );
}
