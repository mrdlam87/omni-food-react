import { Link } from "react-scroll";
import "./Navlink.scss";

const Navlink = ({ children, className, to, ...otherProps }) => {
  return (
    <li>
      <Link
        to={to}
        spy={true}
        smooth={true}
        duration={500}
        className={`nav-link ${className}`}
        {...otherProps}
      >
        {children}
      </Link>
    </li>
  );
};

export default Navlink;
