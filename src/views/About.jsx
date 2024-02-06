import { Fragment } from "react";
import HeroSection from "../components/About/HeroSection";
import CardSection from "../components/About/CardSection";

export default function About() {
  return (
    <Fragment>
      <title>Bowery | About</title>
      <HeroSection />
      <CardSection />
    </Fragment>
  );
}
