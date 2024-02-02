import { NavLink } from "react-router-dom";
import { NavData } from "../../data/NavData";
import Logo from "../../components/common/Logo";

export default function StickyNav() {
  return (
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
  );
}
