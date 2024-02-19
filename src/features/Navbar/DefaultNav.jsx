import { NavLink, useLocation } from "react-router-dom";
import { NavData } from "../../data/NavData";
import Logo from "../../components/common/Logo";
import useOnLoad from "../../hooks/useOnLoad";

// eslint-disable-next-line react/prop-types
export default function DefaultNav({ effect }) {
  const { loading } = useOnLoad(500);
  const state = useLocation();

  return (
    <nav
      className={`fixed z-20 flex h-24 w-full flex-col items-center justify-between gap-4 px-2 uppercase  transition duration-100 ease-in-out md:flex-row md:gap-0 xl:px-44 ${
        effect ? "-translate-y-20" : "translate-x-0"
      } ${loading ? "opacity-0" : "opacity-100"} 
      
      `}
    >
      <div className="flex gap-2 lg:gap-8">
        {NavData.slice(0, 3).map((link) => (
          <NavLink
            key={link.id}
            to={link.to}
            className={({ isActive }) =>
              `cursor-pointer rounded-lg px-2 py-2.5 font-libre text-sm tracking-wider  ${
                isActive ? "font-medium" : "font-normal "
              } ${state.pathname === "/produce" || state.pathname === "/recipes" ? "text-green-900 hover:bg-lime-300" : "text-white hover:bg-blue-700"}`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      <Logo
        className={`py-4 text-center text-4xl font-bold tracking-wide sm:py-0 sm:text-3xl ${state.pathname === "/produce" || state.pathname === "/recipes" ? "text-green-950" : "text-white"} `}
      />
      <article className="flex items-center gap-4">
        <div className="flex gap-2 lg:gap-8">
          {NavData.slice(3, 5).map((link) => (
            <NavLink
              key={link.id}
              to={link.to}
              className={({ isActive }) =>
                `cursor-pointer rounded-lg px-2 py-2.5 font-libre text-sm tracking-wider  ${
                  isActive ? "font-medium" : "font-normal "
                } ${state.pathname === "/produce" || state.pathname === "/recipes" ? "text-green-900 hover:bg-lime-300" : "text-white hover:bg-blue-700"}
                
                `
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <button
          type="button"
          className={`rounded-lg  px-2.5 py-2.5 text-sm font-medium uppercase tracking-wider lg:px-6 
          ${state.pathname === "/produce" || state.pathname === "/recipes" ? "bg-green-900 text-white" : "bg-white text-blue-900 "}
          `}
        >
          Find in store
        </button>
      </article>
    </nav>
  );
}
