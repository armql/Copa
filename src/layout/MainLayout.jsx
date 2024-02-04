import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../views/Navbar";
import Footer from "../views/Footer";
import useOnLoad from "../hooks/useOnLoad";
import SplashScreen from "../components/common/SplashScreen";

export default function MainLayout() {
  const { loading } = useOnLoad(1800);

  if (loading) {
    return <SplashScreen />;
  } else {
    return (
      <div className="relative">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  }
}
