import React from "react";
import Title from "./base/Title";
import Text from "./base/Text";
import RedirectButton from "./RedirectButton";
import "./Hero.scss";

const Hero = ({ image, title, content }) => {
  return (
    <div className="background-blue" style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "600px",
      width: "100%"
    }}>
      <div className="container hero-wrapper">
        <div className="content-button-wrapper">
          <div className="content-wrapper">
            <Title heading="h1" prop="title" className="color-light">
              {title}
            </Title>
            <Text content={content} prop="content" className="color-grey" />
          </div>
          <RedirectButton href="/services" className="hover-effect">
            Our Services
          </RedirectButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
