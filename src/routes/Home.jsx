import { useContext } from "react";
import Header from "../components/header/Header";
import SectionFeatured from "../components/section-featured/SectionFeatured";
import SectionHero from "../components/section-hero/SectionHero";
import SectionHow from "../components/section-how/SectionHow";
import SectionMeals from "../components/section-meals/SectionMeals";
import SectionPricing from "../components/section-pricing/SectionPricing";
import SectionTestimonials from "../components/section-testimonials/SectionTestimonials";
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
        <SectionTestimonials />
        <SectionPricing />
      </main>
    </div>
  );
};

export default Home;
