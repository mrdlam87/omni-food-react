import "./Button.scss";

const Button = ({ children, className, ...otherProps }) => {
  return (
    <a className={`btn ${className}`} {...otherProps}>
      {children}
    </a>
  );
};

export default Button;
