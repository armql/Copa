import { Link } from "react-router-dom";

import useInterpolator from "../hooks/useInterpolator";
import { useEffect, useState } from "react";
import AnimatedIllustrations from "../features/Footer/AnimatedIllustrations";
import Apple from "../assets/icon/Apple";
import Linkedin from "../assets/icon/Linkedin";
import Meta from "../assets/icon/Meta";
import Spotify from "../assets/icon/Spotify";
import { ShortcutData } from "../data/ShortcutData";

export default function Footer() {
  const [scrollY, setScrollY] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);
  const { value } = useInterpolator({
    x: scrollY,
    up: pageHeight - 400,
    down: pageHeight,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY >= pageHeight - 500) {
        setScrollY(currentScrollY);
      }
    };

    const handleResize = () => {
      const newPageHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setPageHeight(newPageHeight);
      if (window.scrollY >= newPageHeight - 500) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [value, pageHeight]);

  return (
    <footer
      className={`-z-10 relative w-full transition duration-100 ease-in-out`}
      style={{
        transform: `translateY(-${Math.round(value)}%)`,
      }}
    >
      <div className="flex w-full h-full flex-row justify-between xl:px-44 lg:px-36 md:px-4 sm:px-12 px-16 py-48 font-libre text-white">
        <div className="flex z-20 sm:flex-row flex-col sm:gap-0 gap-12 w-full justify-evenly items-center">
          <div className="flex flex-col gap-6 sm:w-72 w-full">
            <p className="font-medium text-3xl">Get the latest and tastiest</p>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Email address"
                className="bg-transparent rounded-md px-2 py-2.5 placeholder:text-blue-300 focus:placeholder:text-white text-sm border-2 focus:border-white focus:outline-none"
              />
              <p className="text-xs font-light">
                Fresh updates on product launches, farm events, and so much
                more.
              </p>
            </div>
            <div className="text-white flex flex-row gap-4 justify-around">
              <Apple fill="white" />
              <Linkedin fill="white" />
              <Meta fill="white" />
              <Spotify fill="white" />
            </div>
          </div>
          <div className="flex flex-row justify-around sm:w-fit w-full gap-12 text-base font-medium">
            <div className="flex-row gap-12 flex sm:w-fit justify-center w-full">
              <div className="flex flex-col gap-2 w-f">
                {ShortcutData.slice(0, 6).map((link) => (
                  <Link key={link.id} to={link.to} className="group">
                    {link.name}
                    <div className="group-hover:w-full w-0 group-hover:bg-white h-0.5 transition-all duration-500"></div>
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {ShortcutData.slice(6, 10).map((link) => (
                  <Link key={link.id} to={link.to} className="group">
                    {link.name}
                    <div className="group-hover:w-full w-0 group-hover:bg-white h-0.5 transition-all duration-500"></div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 lg:block hidden sm:w-40 w-full">
              <p>Office</p>
              <p className="font-light text-xs">
                151 W 26th St 12th Floor, New York NY 10001
              </p>
              <div className="flex gap-1 justify-start mt-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm flex font-light rounded-lg text-white">
                  View on maps
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnimatedIllustrations />
    </footer>
  );
}
