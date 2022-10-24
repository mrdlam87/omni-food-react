import { Element } from "react-scroll";
import CtaForm from "../cta-form/CtaForm";
import "./SectionCta.scss";

const SectionCta = () => {
  return (
    <Element name="section-cta">
      <section className="section-cta">
        <div className="container">
          <div className="cta">
            <div className="cta-text-box">
              <h2 className="heading-secondary">
                Get your first meal for free!
              </h2>
              <p className="cta-text">
                Healthy, tasty and hassle-free meals are waiting for you. Start
                eating well today. You can cancel or pause anytime. And the
                first meal is on us!
              </p>
              <CtaForm />
            </div>
            <div
              className="cta-img-box"
              role="img"
              aria-label="enjoying food"
            ></div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default SectionCta;
