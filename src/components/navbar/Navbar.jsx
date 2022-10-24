import Navlink from "../navlink/Navlink";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <Navlink href="#how">How it works</Navlink>
        <Navlink href="#meals">Meals</Navlink>
        <Navlink href="#testimonials">Testimonials</Navlink>
        <Navlink href="#pricing">Pricing</Navlink>
        <Navlink className="nav-cta" href="#cta">
          Try for free
        </Navlink>
      </ul>
    </nav>
  );
};

export default Navbar;
