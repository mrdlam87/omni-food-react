import "./StepBox.scss";

const StepBox = ({ title, number, description, imageUrl }) => {
  return (
    <>
      <div className="step-text-box">
        <p className="step-number">{number}</p>
        <h3 className="heading-tertiary">{title}</h3>
        <p className="step-description">{description}</p>
      </div>
      <div className="step-img-box">
        <img className="step-img" src={imageUrl} alt="app screen" />
      </div>
    </>
  );
};

export default StepBox;
