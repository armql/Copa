import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../views/Navbar";
import Footer from "../views/Footer";

export default function MainLayout() {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  );
}
