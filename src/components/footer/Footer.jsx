import { animateScroll as scroll } from "react-scroll";
import "./Footer.scss";
import logo from "../../assets/images/omnifood-logo.png";
import FooterSocial from "../footer-social/FooterSocial";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
} from "react-icons/io5";
import FooterLink from "../footer-link/FooterLink";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <p className="footer-logo" onClick={scroll.scrollToTop}>
            <img className="logo" src={logo} alt="Omnifood Logo" />
          </p>

          <ul className="social-links">
            <FooterSocial icon={<IoLogoInstagram className="social-icon" />} />
            <FooterSocial icon={<IoLogoFacebook className="social-icon" />} />
            <FooterSocial icon={<IoLogoTwitter className="social-icon" />} />
          </ul>

          <p className="copyright">
            Copyright &copy; <span className="year">2030</span> by Omnifood,
            Inc. All rights reserved.
          </p>
        </div>

        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p className="address">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a className="footer-link" href="tel:415-201-6370">
                415-201-6370
              </a>
            </p>
            <p>
              <a className="footer-link" href="mailto:hello@omnifood.com">
                hello@omnifood.com
              </a>
            </p>
          </address>
        </div>

        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <FooterLink label="Create Account" href="#" />
            <FooterLink label="Sign in" href="#" />
            <FooterLink label="Create Account" href="#" />
            <FooterLink label="iOS app" href="#" />
            <FooterLink label="Android app" href="#" />
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <FooterLink label="About Omnifood" href="#" />
            <FooterLink label="For business" href="#" />
            <FooterLink label="Cooking partners" href="#" />
            <FooterLink label="Careers" href="#" />
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <FooterLink label="Recipe directory" href="#" />
            <FooterLink label="Help center" href="#" />
            <FooterLink label="Privacy & terms" href="#" />
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
