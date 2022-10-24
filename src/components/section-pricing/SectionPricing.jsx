import { Element } from "react-scroll";
import Features from "../features/Features";
import PricingCard from "../pricing-card/PricingCard";
import "./SectionPricing.scss";

const SectionPricing = () => {
  return (
    <Element name="section-pricing">
      <section className="section-pricing" id="pricing">
        <div className="container">
          <span className="sub-heading">Pricing</span>
          <h2 className="heading-secondary">
            Eating well without breaking the bank
          </h2>
        </div>

        <div className="container grid grid--2-cols margin-bottom-md">
          <PricingCard
            className="pricing-plan--starter"
            title="Starter"
            subtitle="per month. That's just $13 per meal!"
            price="399"
            listPros={[
              "1 meal per day",
              "Order from 11am to 9pm",
              "Delivery is free",
            ]}
            listCons={[""]}
          />
          <PricingCard
            className="pricing-plan--complete pricing-plan--best"
            title="Complete"
            subtitle="per month. That's just $11 per meal!"
            price="649"
            listPros={[
              "2 meals per day",
              "Order 24/7",
              "Delivery is free",
              "Get access to lastest recipe",
            ]}
            isBest={true}
          />
        </div>

        <div className="container grid">
          <aside className="plan-details">
            Prices include all applicable taxes. You can cancel at any time.
            Both plans include the following:
          </aside>
        </div>

        <Features />
      </section>
    </Element>
  );
};

export default SectionPricing;
