import "./Feature.scss";

const Feature = ({ title, description, icon }) => {
  return (
    <div className="feature">
      {icon}
      <p className="feature-title">{title}</p>
      <p className="feature-text">{description}</p>
    </div>
  );
};

export default Feature;
