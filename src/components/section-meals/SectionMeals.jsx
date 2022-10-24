import MealCard from "../meal-card/MealCard";
import DietItem from "../diet-item/DietItem";
import "./SectionMeals.scss";
import mealImage1 from "../../assets/images/meals/meal-1.jpg";
import mealImage2 from "../../assets/images/meals/meal-2.jpg";

const SectionMeals = () => {
  return (
    <section className="section-meals">
      <div class="container center-text">
        <span class="sub-heading">Meals</span>
        <h2 class="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>
      <div class="container grid grid--3-cols margin-bottom-md">
        <MealCard
          title="Japanese Gyozas"
          imageUrl={mealImage1}
          calories="650"
          nutriScore="74"
          rating="4.9"
          mealTags="vegetarian"
        />
        <MealCard
          title="Avocado Salad"
          imageUrl={mealImage2}
          calories="400"
          nutriScore="92"
          rating="4.8"
          mealTags="vegan, paleo"
        />
        <div className="diets">
          <h3 className="heading-tertiary">Works with any diet</h3>
          <ul className="list">
            <DietItem label="Vegetarian" />
            <DietItem label="Vegan" />
            <DietItem label="Pescatrian" />
            <DietItem label="Gluten-free" />
            <DietItem label="Lactose-free" />
            <DietItem label="Keto" />
            <DietItem label="Paleo" />
            <DietItem label="Low FODMAP" />
            <DietItem label="Kid-friendly" />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionMeals;
