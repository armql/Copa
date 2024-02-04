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
      <div className="w-full flex justify-center items-center">
        <Logo className="text-center font-bold tracking-wider py-4 text-white text-5xl z-40" />

        <div className="fixed bottom-10 z-40">
          <button
            type="button"
            onClick={effect ? close : open}
            className={`p-4 shadow-sm transition duration-300 rounded-full ${
              effect
                ? "bg-white text-blue-600"
                : "bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white"
            }`}
          >
            {effect ? <RemoveIcon /> : <BarIcon />}
          </button>
        </div>
      </div>
      {effect && (
        <div className="fixed z-20 top-0 right-0 left-0 bottom-0 bg-blue-600">
          <div className="flex flex-col w-full h-full items-center justify-center">
            {NavData.map((link) => (
              <NavLink
                key={link.id}
                to={link.to}
                onClick={close}
                className={({ isActive }) =>
                  `cursor-pointer font-extrabold group font-libre text-6xl px-2 py-2.5 relative rounded-lg ${
                    isActive
                      ? "text-blue-900 cursor-not-allowed"
                      : "hover:text-blue-900 text-blue-950"
                  }`
                }
              >
                {link.img !== null && (
                  <div className="absolute -left-6 -z-10 top-0">
                    <LazyLoadImage
                      src={link.img}
                      alt="leaf"
                      className="w-14 h-14 group-hover:-rotate-12 transition duration-300"
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
