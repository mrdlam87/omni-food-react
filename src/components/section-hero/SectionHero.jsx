import Button from "../button/Button";
import "./SectionHero.scss";
import customer1 from "../../assets/images/customers/customer-1.jpg";
import customer2 from "../../assets/images/customers/customer-2.jpg";
import customer3 from "../../assets/images/customers/customer-3.jpg";
import customer4 from "../../assets/images/customers/customer-4.jpg";
import customer5 from "../../assets/images/customers/customer-5.jpg";
import customer6 from "../../assets/images/customers/customer-6.jpg";
import heroWebp from "../../assets/images/hero.webp";
import heroPng from "../../assets/images/hero.png";
import { useInView } from "react-intersection-observer";
import { useContext, useEffect } from "react";
import { IntersectionContext } from "../../contexts/IntersectionContexts";

const SectionHero = () => {
  const { setHeroInView } = useContext(IntersectionContext);
  const { ref, inView } = useInView({
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  });

  useEffect(() => setHeroInView(inView), [inView]);

  return (
    <section ref={ref} className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="hero-description">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <Button href="#cta" className="btn--full margin-right-sm">
            Start eating well
          </Button>
          <Button href="#how" className="btn--outline">
            Learn more
          </Button>
          <div className="delivered-meals">
            <div className="delivered-faces">
              <img src={customer1} alt="customer" />
              <img src={customer2} alt="customer" />
              <img src={customer3} alt="customer" />
              <img src={customer4} alt="customer" />
              <img src={customer5} alt="customer" />
              <img src={customer6} alt="customer" />
            </div>
            <p className="delivered-text">
              <span>250,000+</span> meals delivered last year!
            </p>
          </div>
        </div>
        <div className="hero-img-box">
          <picture>
            <source srcSet={heroWebp} type="image/webp" />
            <source srcSet={heroPng} type="image/png" />

            <img src={heroPng} alt="" className="hero-img" />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
