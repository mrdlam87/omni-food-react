import Navlink from "../navlink/Navlink";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <Navlink to="section-how">How it works</Navlink>
        <Navlink to="section-meals">Meals</Navlink>
        <Navlink to="section-testimonials">Testimonials</Navlink>
        <Navlink to="section-pricing">Pricing</Navlink>
        <Navlink className="nav-cta" to="section-cta">
          Try for free
        </Navlink>
      </ul>
    </nav>
  );
};

export default Navbar;
