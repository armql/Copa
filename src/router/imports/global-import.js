import { lazy } from "react";

const Home = lazy(() => import("../../views/Home"));
const Produce = lazy(() => import("../../views/Produce"));
const About = lazy(() => import("../../views/About"));
const Recipes = lazy(() => import("../../views/Recipes"));
const Stories = lazy(() => import("../../views/Stories"));
const JoinUs = lazy(() => import("../../views/JoinUs"));
import MainLayout from "../../layout/MainLayout";
export { MainLayout, Home, Produce, About, Recipes, Stories, JoinUs };
