const FooterLink = ({ label, href }) => {
  return (
    <li>
      <a className="footer-link" href={href}>
        {label}
      </a>
    </li>
  );
};

export default FooterLink;
