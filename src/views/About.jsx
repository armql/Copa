import HeroSection from "../components/About/HeroSection";
import CardSection from "../components/About/CardSection";
import TeamSection from "../components/About/TeamSection";
import BrandSection from "../components/About/BrandSection";
import NewsletterSection from "../components/Home/NewsletterSection";
import CareerCard from "../components/About/CareerCard";

export default function About() {
  return (
    <div className="overflow-hidden rounded-b-[64px]">
      <title>Bowery | About</title>
      <HeroSection />
      <CardSection />
      <TeamSection />
      <BrandSection />
      <NewsletterSection />
      <CareerCard />
    </div>
  );
}
