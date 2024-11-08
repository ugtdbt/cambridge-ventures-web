import React from "react";
import "./hero-section.modules.css";
import headerImage from "../../assets/images/header_img.png";
import logo from "../../assets/images/logo_cv.png";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <div>
      <div className="header-outer">
        <div className="header-image"></div>
        <div className="header-content">
          <div className="header-logo">
            <img src={logo} alt="" />
          </div>
          <div className="header-title-outer">
            <h1 className="header-title">
              CAMBRIDGE <br /> VENTURES
            </h1>
            <p className="header-subtext">
              We structure and execute real estate development projects in a
              responsible and rewarding manner based on careful asset selection,
              optimal value addition, innovative financing structures and
              targeted marketing and sales strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
