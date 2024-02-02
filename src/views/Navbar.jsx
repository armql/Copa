import { Fragment, useEffect, useState } from "react";
import useScrollEffect from "../hooks/useScrollEffect";
import useToggle from "../hooks/useToggle";
import StickyNav from "../features/Navbar/StickyNav";
import DefaultNav from "../features/Navbar/DefaultNav";
import MobileNav from "../features/Navbar/MobileNav";

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const { scrollEffect } = useScrollEffect(200);
  const { open: toggleStickyMenu, close, effect: stickyMenu } = useToggle();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    // Call handleResize initially
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    close();
  }, [scrollEffect]);

  return (
    <Fragment>
      {!mobile &&
        (stickyMenu ? <StickyNav /> : <DefaultNav effect={scrollEffect} />)}
      <button
        className={`fixed right-44 top-7 bg-emerald-900 uppercase text-white tracking-wider px-6 py-2.5 rounded-xl z-40 shadow-sm transition duration-100 font-libre ${
          scrollEffect && !stickyMenu ? "-translate-y-0" : "-translate-y-20"
        }`}
        type="button"
        onClick={toggleStickyMenu}
      >
        Menu
      </button>
      {mobile && <MobileNav />}
    </Fragment>
  );
}
