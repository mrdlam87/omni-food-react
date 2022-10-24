import PriceItem from "../price-item/PriceItem";
import "./PricingCard.scss";

const PricingCard = ({
  className,
  title,
  price,
  subtitle,
  listPros,
  listCons,
  isBest,
}) => {
  const proItems = listPros?.map((pro, index) => (
    <PriceItem key={index} isPro={true}>
      {pro}
    </PriceItem>
  ));

  const conItems = listCons?.map((pro, index) => (
    <PriceItem key={index} isPro={false}>
      {pro}
    </PriceItem>
  ));

  return (
    <div className={`pricing-card ${className}`}>
      <header className="plan-header">
        <p className="plan-name">{title}</p>
        <p className="plan-price">
          <span>$</span>
          {price}
        </p>
        <p className="plan-text">{subtitle}</p>
      </header>
      <ul className="list">
        {proItems}
        {conItems}
      </ul>
      <div className="plan-btn">
        <a href="#" className="btn btn--full">
          Start eating well
        </a>
      </div>
      {isBest && <p className="plan-tag">Best Value</p>}
    </div>
  );
};

export default PricingCard;
