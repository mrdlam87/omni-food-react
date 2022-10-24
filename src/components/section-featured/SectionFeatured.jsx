import "./SectionFeatured.scss";
import logo1 from "../../assets/images/logos/techcrunch.png";
import logo2 from "../../assets/images/logos/business-insider.png";
import logo3 from "../../assets/images/logos/the-new-york-times.png";
import logo4 from "../../assets/images/logos/forbes.png";
import logo5 from "../../assets/images/logos/usa-today.png";

const SectionFeatured = () => {
  return (
    <section className="section-featured">
      <div className="container">
        <h2>As featured in</h2>
        <div className="logos">
          <img src={logo1} alt="logo" />
          <img src={logo2} alt="logo" />
          <img src={logo3} alt="logo" />
          <img src={logo4} alt="logo" />
          <img src={logo5} alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default SectionFeatured;
