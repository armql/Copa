import { Fragment } from "react";
import HeroSection from "../components/Produce/HeroSection";
import ProductSection from "../components/Home/ProductSection";
import RecipeSection from "../components/Produce/RecipeSection";
import CardSection from "../components/Produce/CardSection";
import OutroSection from "../components/Produce/OutroSection";

export default function Produce() {
  return (
    <Fragment>
      <title>Bowery | Produce</title>
      <main className="relative overflow-hidden rounded-b-[60px] bg-stone-100 shadow-xl">
        <HeroSection />
        <ProductSection />
        <RecipeSection />
        <CardSection />
        <OutroSection />
      </main>
    </Fragment>
  );
}
