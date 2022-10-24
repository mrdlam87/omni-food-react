import "./MealCard.scss";
import {
  IoFlameOutline,
  IoRestaurantOutline,
  IoStarOutline,
} from "react-icons/io5";

const MealCard = ({
  title,
  calories,
  nutriScore,
  rating,
  mealTags,
  imageUrl,
}) => {
  return (
    <div className="meal-card">
      <img src={imageUrl} className="meal-img" alt="meal" />
      <div className="meal-content">
        <div className="meal-tags">
          {mealTags.includes("vegetarian") && (
            <span className="tag tag--vegetarian">Vegetarian</span>
          )}
          {mealTags.includes("vegan") && (
            <span className="tag tag--vegan">Vegan</span>
          )}
          {mealTags.includes("paleo") && (
            <span className="tag tag--paleo">Paleo</span>
          )}
        </div>
        <p className="meal-title">{title}</p>
        <ul className="meal-attributes">
          <li className="meal-attribute">
            <IoFlameOutline className="meal-icon" />
            <span>
              <strong> {calories} </strong>calories
            </span>
          </li>
          <li className="meal-attribute">
            <IoRestaurantOutline className="meal-icon" />
            <span>
              NutriScore &reg; <strong>{nutriScore}</strong>
            </span>
          </li>
          <li className="meal-attribute">
            <IoStarOutline className="meal-icon" />
            <span>
              <strong>{rating}</strong> rating (537)
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MealCard;
