import { NavLink } from "react-router-dom";
import { NavData } from "../../data/NavData";
import Logo from "../../components/common/Logo";

// eslint-disable-next-line react/prop-types
export default function DefaultNav({ effect }) {
  return (
    <nav
      className={`fixed h-24 flex md:gap-0 gap-4 md:flex-row flex-col justify-between items-center w-full transition duration-100 uppercase xl:px-44 px-2 z-20 ${
        effect ? "-translate-y-20" : "translate-x-0"
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
  );
}
