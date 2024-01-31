import { Fragment, useEffect, useState } from "react";
import useScrollEffect from "../hooks/useScrollEffect";
import useToggle from "../hooks/useToggle";

export default function Navbar() {
  const { scrollEffect } = useScrollEffect(200);
  const { open: toggleMobileMenu, close, effect: mobileMenu } = useToggle();

  useEffect(() => {
    close();
  }, [scrollEffect]);

  return (
    <Fragment>
      <nav
        className={`fixed h-24 flex justify-between items-center w-full transition duration-100 uppercase px-44 z-20 ${
          scrollEffect ? "-translate-y-20" : "translate-x-0"
        }`}
      >
        <ul className="flex gap-8 font-normal tracking-wider text-white text-sm">
          <li className="cursor-pointer hover:bg-blue-700 px-2 py-2.5 rounded-lg">
            Produce
          </li>
          <li className="cursor-pointer hover:bg-blue-700 px-2 py-2.5 rounded-lg">
            About us
          </li>
          <li className="cursor-pointer hover:bg-blue-700 px-2 py-2.5 rounded-lg">
            Recipes
          </li>
        </ul>
        <figure className="text-center font-bold tracking-wide text-white text-3xl">
          Bowery
        </figure>
        <article className="flex items-center gap-4">
          <div>
            <ul className="flex gap-8 font-normal tracking-wider text-white text-sm">
              <li className="cursor-pointer hover:bg-blue-700 px-2 py-2.5 rounded-lg">
                Stories
              </li>
              <li className="cursor-pointer hover:bg-blue-700 px-2 py-2.5 rounded-lg">
                Join us
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="bg-white font-medium uppercase text-blue-900 tracking-wider px-6 py-2.5 rounded-lg"
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
        <nav className="fixed h-24 bg-white flex justify-between items-center w-full uppercase px-44 z-40">
          <ul className="flex gap-8 font-normal text-sm tracking-wider text-green-900">
            <li className="cursor-pointer hover:bg-blue-200 px-2 py-2.5 rounded-lg">
              Produce
            </li>
            <li className="cursor-pointer hover:bg-blue-200 px-2 py-2.5 rounded-lg">
              About us
            </li>
            <li className="cursor-pointer hover:bg-blue-200 px-2 py-2.5 rounded-lg">
              Recipes
            </li>
          </ul>
          <figure className="text-center font-bold tracking-wide text-sky-950 text-3xl">
            Bewery
          </figure>
          <article className="flex items-center gap-4">
            <div>
              <ul className="flex gap-8 font-normal tracking-wider text-sm text-green-900">
                <li className="cursor-pointer hover:bg-blue-200 px-2 py-2.5 rounded-lg">
                  Stories
                </li>
                <li className="cursor-pointer hover:bg-blue-200 px-2 py-2.5 rounded-lg">
                  Join us
                </li>
              </ul>
            </div>
            <button
              type="button"
              className="bg-green-600 font-medium text-white tracking-wider px-6 py-2.5 uppercase rounded-lg"
            >
              Find in store
            </button>
          </article>
        </nav>
      )}
    </Fragment>
  );
}
