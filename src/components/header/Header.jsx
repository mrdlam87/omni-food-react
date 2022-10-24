import { animateScroll as scroll } from "react-scroll";
import logo from "../../assets/images/omnifood-logo.png";
import Navbar from "../navbar/Navbar";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import "./Header.scss";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const clickHandler = () => setOpenMenu(!openMenu);

  return (
    <header className={`main-header ${openMenu ? "nav-open" : ""}`}>
      <img
        className="header-logo"
        src={logo}
        alt="Omnifood Logo"
        onClick={scroll.scrollToTop}
      />
      <Navbar />
      <button className="btn-nav" onClick={clickHandler}>
        <IoMenuOutline className="btn-icon" name="menu" />
        <IoCloseOutline className="btn-icon" name="close" />
      </button>
    </header>
  );
};

export default Header;
