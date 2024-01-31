import { Fragment } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import ProduceSection from "../components/ProduceSection";
import ProcessSection from "../components/ProcessSection";
import ArticleSection from "../components/ArticleSection";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <ProduceSection />
      <ProcessSection />
      <InfoSection />
      <ArticleSection />
      <div className="w-screen h-screen rounded-b-[60px] bg-stone-100"></div>
    </Fragment>
  );
}
