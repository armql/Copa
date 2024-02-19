import IntroSection from "../components/Recipes/IntroSection";
import RecipeDisplay from "../components/Recipes/RecipeDisplay";

export default function Recipes() {
  return (
    <main className="relative overflow-hidden rounded-b-[60px] bg-[#f1f9dc] shadow-xl">
      <title>Bowery | Recipes</title>
      <IntroSection />
      <RecipeDisplay />
    </main>
  );
}
