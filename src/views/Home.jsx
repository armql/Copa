import { Fragment } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import ProduceSection from "../components/ProduceSection";
import ProcessSection from "../components/ProcessSection";
import ArticleSection from "../components/ArticleSection";
import NewsletterSection from "../components/NewsletterSection";

export default function Home() {
  return (
    <Fragment>
      <title>Bowery | Home</title>
      <HeroSection />
      <ProduceSection />
      <ProcessSection />
      <InfoSection />
      <ArticleSection />
      <NewsletterSection />
    </Fragment>
  );
}
