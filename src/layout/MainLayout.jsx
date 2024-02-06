import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../views/Navbar";
const Footer = lazy(() => import("../views/Footer"));
import useOnLoad from "../hooks/useOnLoad";
import SplashScreen from "../components/common/SplashScreen";
import useToggle from "../hooks/useToggle";

export default function MainLayout() {
  const { loading } = useOnLoad(1800);
  const { effect: theme, auto } = useToggle();

  if (loading) {
    return <SplashScreen />;
  } else {
    return (
      <div className={`relative ${theme ? "dark" : ""}`}>
        {/* <button
          type="button"
          onClick={auto}
          className="font-bold active:bg-red-300"
        >
          toggler
        </button>
        <h1 className="text-white dark:text-red-500">text</h1> */}
        <Navbar />
        <Outlet />
        <Suspense
          fallback={<div className="h-screen w-screen bg-blue-400"></div>}
        >
          <Footer />
        </Suspense>
      </div>
    );
  }
}
