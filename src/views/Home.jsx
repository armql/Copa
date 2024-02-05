import { Fragment } from "react";
import HeroSection from "../components/Home/HeroSection";
import InfoSection from "../components/Home/InfoSection";
import ProduceSection from "../components/Home/ProduceSection";
import ProcessSection from "../components/Home/ProcessSection";
import ArticleSection from "../components/Home/ArticleSection";
import NewsletterSection from "../components/Home/NewsletterSection";

export default function Home() {
  return (
    <Fragment>
      <title>Bowery | Home</title>
      <main className="overflow-hidden rounded-b-[60px] shadow-xl">
        <HeroSection />
        <ProduceSection />
        <ProcessSection />
        <InfoSection />
        <ArticleSection />
        <NewsletterSection />
        <div className="h-24 border-blue-200 bg-stone-100" />
      </main>
    </Fragment>
  );
}
