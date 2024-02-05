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
      className={`relative -z-10 h-full w-full transition duration-100 ease-in-out`}
      style={{
        transform: `translateY(-${Math.round(value)}%)`,
      }}
    >
      <div className="mx-auto h-full max-w-7xl px-6 py-12 text-white">
        <div className="z-20 flex w-full flex-col items-center justify-evenly gap-12 sm:flex-row sm:gap-0">
          <div className="flex w-full flex-col gap-6 sm:w-72">
            <p className="text-3xl font-medium">Get the latest and tastiest</p>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Email address"
                className="rounded-md border-2 bg-transparent px-2 py-2.5 text-sm placeholder:text-blue-300 focus:border-white focus:outline-none focus:placeholder:text-white"
              />

              <p className="text-xs font-light">
                Fresh updates on product launches, farm events, and so much
                more.
              </p>
            </div>
            <div className="flex flex-row justify-around gap-4 text-white">
              <Apple fill="white" />
              <Linkedin fill="white" />
              <Meta fill="white" />
              <Spotify fill="white" />
            </div>
          </div>
          <div className="flex w-full flex-row justify-around gap-12 text-base font-medium sm:w-fit">
            <div className="flex w-full flex-row justify-center gap-12 sm:w-fit">
              <div className="w-f flex flex-col gap-2">
                {ShortcutData.slice(0, 6).map((link) => (
                  <Link key={link.id} to={link.to} className="group">
                    {link.name}
                    <div className="h-0.5 w-0 transition-all duration-500 group-hover:w-full group-hover:bg-white"></div>
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {ShortcutData.slice(6, 10).map((link) => (
                  <Link key={link.id} to={link.to} className="group">
                    {link.name}
                    <div className="h-0.5 w-0 transition-all duration-500 group-hover:w-full group-hover:bg-white"></div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex hidden w-full flex-col gap-2 sm:w-40 lg:block">
              <p>Office</p>
              <p className="text-xs font-light">
                151 W 26th St 12th Floor, New York NY 10001
              </p>
              <div className="mt-2 flex items-center justify-start gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="flex rounded-lg text-sm font-light text-white">
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
