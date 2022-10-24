import "./Navlink.scss";

const Navlink = ({ children, className, ...otherProps }) => {
  return (
    <li>
      <a className={`nav-link ${className}`} {...otherProps}>
        {children}
      </a>
    </li>
  );
};

export default Navlink;
