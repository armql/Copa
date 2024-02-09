import { Fragment } from "react";
import HeroSection from "../components/About/HeroSection";
import CardSection from "../components/About/CardSection";
import TeamSection from "../components/About/TeamSection";

export default function About() {
  return (
    <Fragment>
      <title>Bowery | About</title>
      <HeroSection />
      <CardSection />
      <TeamSection />
    </Fragment>
  );
}
