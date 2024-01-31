import { lazy } from "react";

const Home = lazy(() => import("../../views/Home"));
import MainLayout from "../../layout/MainLayout";
export { MainLayout, Home };
