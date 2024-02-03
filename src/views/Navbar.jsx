import { Fragment, useEffect } from "react";
import useScrollEffect from "../hooks/useScrollEffect";
import useToggle from "../hooks/useToggle";
import StickyNav from "../features/Navbar/StickyNav";
import DefaultNav from "../features/Navbar/DefaultNav";
import MobileNav from "../features/Navbar/MobileNav";
import useResizer from "../hooks/useResizer";

export default function Navbar() {
  const { scrollEffect } = useScrollEffect(200);
  const { open: toggleStickyMenu, close, effect: stickyMenu } = useToggle();
  const { size: mobile } = useResizer(768);

  useEffect(() => {
    close();
  }, [scrollEffect]);

  return (
    <Fragment>
      {!mobile &&
        (stickyMenu ? <StickyNav /> : <DefaultNav effect={scrollEffect} />)}
      {!mobile && (
        <div className="fixed right-0 top-0 z-40 p-8">
          <button
            className={`bg-emerald-900 uppercase text-white tracking-wider px-6 py-2.5 rounded-xl shadow-sm transition duration-100 font-libre ${
              scrollEffect && !stickyMenu ? "-translate-y-0" : "-translate-y-20"
            }`}
            type="button"
            onClick={toggleStickyMenu}
          >
            Menu
          </button>
        </div>
      )}
      {mobile && <MobileNav />}
    </Fragment>
  );
}
