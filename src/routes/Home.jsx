import { useContext } from "react";
import Header from "../components/header/Header";
import SectionFeatured from "../components/section-featured/SectionFeatured";
import SectionHero from "../components/section-hero/SectionHero";
import SectionHow from "../components/section-how/SectionHow";
import SectionMeals from "../components/section-meals/SectionMeals";
import { IntersectionContext } from "../contexts/IntersectionContexts";

const Home = () => {
  const { heroInView } = useContext(IntersectionContext);

  return (
    <div className={!heroInView ? "sticky" : ""}>
      <Header />
      <main>
        <SectionHero />
        <SectionFeatured />
        <SectionHow />
        <SectionMeals />
      </main>
    </div>
  );
};

export default Home;
