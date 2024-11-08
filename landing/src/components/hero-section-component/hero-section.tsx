import React, { useState, useEffect } from "react";
import "./hero-section.modules.css";
import logo from "../../assets/images/logo_cv.png";
import our_values_image from "../../assets/images/our-values.png";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="hero-section-outer">
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
      <div className="our-value-outer">
        <div className="ov-image-outer">
          <img
            className={`ov-image ${isScrolled ? "scrolled" : ""}`}
            src={our_values_image}
            alt=""
          />
        </div>
        <div className="ov-content">
          <h4 className="ov-content-header">
            Our Value-Addition Activities <br />
            Include The Following
          </h4>
          <div className="ov-content-item">
            <h6 className="ov-content-item-topic">Investment</h6>
            <p>
              We invest in lands which we may either hold for a period of time
              or engage in property developments projects such as Gated
              Communities other Residential Projects
            </p>
          </div>
          <div className="ov-content-item">
            <h6 className="ov-content-item-topic">Joint Ventures</h6>
            <p>
              Landowners who are interested in developing their properties are
              invited to contact us to explore potential collaborations
            </p>
          </div>
          <div className="ov-content-item">
            <h6 className="ov-content-item-topic">Structuring and Financing</h6>
            <p>
              Create and structure investments in the Real Estate industry{" "}
              <span className="invisible">
                sdfjhsdjkfhaskdjfhasdkjfhaskfhkasdhfklasfhkasdjfh
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
