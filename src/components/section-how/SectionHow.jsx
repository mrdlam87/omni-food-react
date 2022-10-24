import { Element } from "react-scroll";
import "./SectionHow.scss";
import stepImage1 from "../../assets/images/app/app-screen-1.png";
import stepImage2 from "../../assets/images/app/app-screen-2.png";
import stepImage3 from "../../assets/images/app/app-screen-3.png";
import StepBox from "../step-box/StepBox";

const SectionHow = () => {
  return (
    <Element name="section-how">
      <section className="section-how">
        <div className="container">
          <span className="sub-heading">How it works</span>
          <h2 className="heading-secondary">
            Your daily dose of health in 3 simple steps
          </h2>
        </div>
        <div className="container grid grid--2-cols grid--center-v">
          {/* Step 01 */}
          <StepBox
            title="Tell us what you like (and what not)"
            number="01"
            imageUrl={stepImage1}
            description="Never again waste time thinking about what to eat! Omnifood AI will
          create a 100% personalized weekly meal plan just for you. It makes
          sure you get all the nutrients and vitamins you need, no matter what
          diet you follow!"
          />
          {/* Step 02 */}
          <StepBox
            title="Tell us what you like (and what not)"
            number="02"
            imageUrl={stepImage2}
            description="Approve your weekly meal plan: Once per week, approve the meal plan
          generated for you by Omnifood AI. You can change ingredients, swap
          entire meals, or even add your own recipes."
          />

          {/* Step 03 */}
          <StepBox
            title="Tell us what you like (and what not)"
            number="03"
            imageUrl={stepImage3}
            description="Receive meals at convenient time: Best chefs in town will cook your
          selected meal every day, and we will deliver it to your door
          whenever works best for you. You can change delivery schedule and
          address daily!"
          />
        </div>
      </section>
    </Element>
  );
};

export default SectionHow;
