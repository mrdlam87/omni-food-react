import Feature from "../feature/Feature";
import "./Features.scss";

const Features = () => {
  return (
    <div className="container grid grid--4-cols">
      <Feature
        title="Never cook again!"
        description="Our subscriptions cover 365 days per year, even including major
          holidays."
        icon={
          <ion-icon name="infinite-outline" class="feature-icon"></ion-icon>
        }
      />
      <Feature
        title="Local and organic"
        description="Our cooks only use local, fresh, and organic products to prepare your
        meals."
        icon={
          <ion-icon name="nutrition-outline" class="feature-icon"></ion-icon>
        }
      />
      <Feature
        title="No waste"
        description="All our partners only use reusable containers to package all your
        meals."
        icon={<ion-icon name="leaf-outline" class="feature-icon"></ion-icon>}
      />
      <Feature
        title="Pause anytime"
        description="Going on vacation? Just pause your subscription, and we refund unused
        days."
        icon={<ion-icon name="pause-outline" class="feature-icon"></ion-icon>}
      />
    </div>
  );
};

export default Features;
