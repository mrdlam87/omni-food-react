import { Link } from "react-scroll";

import "./Button.scss";

const Button = ({ children, className, to, ...otherProps }) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      duration={500}
      className={`btn ${className}`}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default Button;
