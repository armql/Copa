import { Fragment, useEffect } from "react";
import useScrollEffect from "../hooks/useScrollEffect";
import useToggle from "../hooks/useToggle";
import { NavData } from "../data/NavData";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const { scrollEffect } = useScrollEffect(200);
  const { open: toggleMobileMenu, close, effect: mobileMenu } = useToggle();

  useEffect(() => {
    close();
  }, [scrollEffect]);

  function Logo({ ...props }) {
    return (
      <Link to="/" {...props}>
        Bowery
      </Link>
    );
  }

  return (
    <Fragment>
      <nav
        className={`fixed h-24 flex md:gap-0 gap-4 md:flex-row flex-col justify-between items-center w-full transition duration-100 uppercase xl:px-44 px-2 z-20 ${
          scrollEffect ? "-translate-y-20" : "translate-x-0"
        }`}
      >
        <div className="flex lg:gap-8 gap-2">
          {NavData.slice(0, 3).map((link) => (
            <NavLink
              key={link.id}
              to={link.to}
              className={({ isActive }) =>
                `cursor-pointer text-sm tracking-wider font-libre text-white hover:bg-blue-700 px-2 py-2.5 rounded-lg ${
                  isActive ? "font-medium" : "font-normal "
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <Logo className="text-center font-bold tracking-wide sm:py-0 py-4 text-white sm:text-3xl text-4xl" />
        <article className="flex items-center gap-4">
          <div className="flex lg:gap-8 gap-2">
            {NavData.slice(3, 5).map((link) => (
              <NavLink
                key={link.id}
                to={link.to}
                className={({ isActive }) =>
                  `cursor-pointer text-sm tracking-wider font-libre text-white hover:bg-blue-700 px-2 py-2.5 rounded-lg ${
                    isActive ? "font-medium" : "font-normal "
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <button
            type="button"
            className="bg-white font-medium uppercase text-sm text-blue-900 tracking-wider lg:px-6 px-2.5 py-2.5 rounded-lg"
          >
            Find in store
          </button>
        </article>
      </nav>
      <button
        className={`fixed right-44 top-7 bg-emerald-900 uppercase text-white tracking-wider px-6 py-2.5 rounded-xl z-40 shadow-sm transition duration-100 font-libre ${
          scrollEffect && !mobileMenu ? "-translate-y-0" : "-translate-y-20"
        }`}
        type="button"
        onClick={toggleMobileMenu}
      >
        Menu
      </button>

      {mobileMenu && (
        <nav className="fixed h-24 bg-white flex justify-between items-center w-full uppercase lg:px-24 px-2 z-40">
          <div className="flex lg:gap-8 gap-2">
            {NavData.slice(0, 3).map((link) => (
              <NavLink
                key={link.id}
                to={link.to}
                className={({ isActive }) =>
                  `cursor-pointer text-sm tracking-wider font-libre text-green-950 hover:bg-blue-100 px-2 py-2.5 rounded-lg ${
                    isActive ? "font-medium" : "font-normal "
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <Logo className="text-center font-bold tracking-wide text-sky-950 text-3xl" />
          <article className="flex items-center gap-4">
            <div className="flex lg:gap-8 gap-2">
              {NavData.slice(3, 5).map((link) => (
                <NavLink
                  key={link.id}
                  to={link.to}
                  className={({ isActive }) =>
                    `cursor-pointer text-sm tracking-wider font-libre text-green-950 hover:bg-blue-100 px-2 py-2.5 rounded-lg ${
                      isActive ? "font-medium" : "font-normal "
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            <button
              type="button"
              className="bg-green-600 font-medium text-sm text-white tracking-wider lg:px-6 px-2.5 py-2.5 uppercase rounded-lg"
            >
              Find in store
            </button>
          </article>
        </nav>
      )}
    </Fragment>
  );
}
