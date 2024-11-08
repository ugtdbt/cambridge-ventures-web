import React from "react";
import "./footer.modules.css";
import footer_logo from "../../assets/images/footer_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMessage,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="footer-outer">
      <div className="footer-inner">
        <div className="footer-section-1">
          <img src={footer_logo} className="footer-logo" />
        </div>
        <div className="footer-section-2">
          <div className="footer-address">
            <h4>Address</h4>
            <FontAwesomeIcon className="footer-icon" icon={faLocationDot} />
            <p>3rd Floor, 50, Kitulwatte Road, Colombo 8, Sri Lanka</p>
          </div>
          <div className="footer-contact">
            <h4>Say Hello</h4>
            <FontAwesomeIcon className="footer-icon" icon={faEnvelope} />
            <br />
            <a
              className="footer-email"
              href="mailto:info@cambridge-ventures.com"
            >
              info@cambridge-ventures.com
            </a>
            <div className="footer-messaging-icons">
              <FontAwesomeIcon className="footer-icon" icon={faMessage} />
              <FontAwesomeIcon className="footer-icon" icon={faPhone} />
            </div>

            <p className="footer-tp-numbers">
              {" "}
              <a href="tel:(+94) 777 731 694">(+94) 777 731 694</a>
              <a href="tel:(+94) 772 805 809">(+94) 772 805 809</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
{
}
export default Footer;
