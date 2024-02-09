import { Fragment, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";
import BarIcon from "../../assets/icon/BarIcon";
import Logo from "../../components/common/Logo";
import useToggle from "../../hooks/useToggle";
import RemoveIcon from "../../assets/icon/RemoveIcon";
import { NavData } from "../../data/NavData";
export default function MobileNav() {
  const { open, close, effect } = useToggle();

  useEffect(() => {
    if (effect) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [effect]);

  return (
    <Fragment>
      <div className="flex w-full items-center justify-center">
        <Logo className="z-40 py-4 text-center text-5xl font-bold tracking-wider text-white" />

        <div className="fixed bottom-10 z-40">
          <button
            type="button"
            onClick={effect ? close : open}
            className={`rounded-full p-4 shadow-sm transition duration-300 ${
              effect
                ? "bg-white text-blue-600"
                : "bg-blue-700 text-white hover:bg-blue-800 active:bg-blue-900"
            }`}
          >
            {effect ? <RemoveIcon /> : <BarIcon />}
          </button>
        </div>
      </div>
      {effect && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-20 bg-blue-600">
          <div className="flex h-full w-full flex-col items-center justify-center">
            {NavData.map((link) => (
              <NavLink
                key={link.id}
                to={link.to}
                onClick={close}
                className={({ isActive }) =>
                  `group relative cursor-pointer rounded-lg px-2 py-2.5 font-libre text-6xl font-extrabold ${
                    isActive
                      ? "cursor-not-allowed text-blue-900"
                      : "text-blue-950 hover:text-blue-900"
                  }`
                }
              >
                {link.img !== null && (
                  <div className="absolute -left-6 top-0 -z-10">
                    <LazyLoadImage
                      src={link.img}
                      alt="leaf"
                      className="h-14 w-14 transition duration-300 group-hover:-rotate-12"
                    />
                  </div>
                )}
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
}
