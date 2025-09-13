import React from "react";
import Title from "./base/Title";
import Text from "./base/Text";
import RedirectButton from "./RedirectButton";
import "./Hero.scss";

const Hero = ({ image, title, pretitle, description, buttonLabel, buttonLink }) => {
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
            <Text content={pretitle} prop="pretitle" className="color-grey" />
            <Title heading="h1" prop="title" className="color-light">
              {title}
            </Title>
            <Text content={description} prop="description" className="color-grey" />
          </div>
          <RedirectButton href={buttonLink} className="hover-effect">
            {buttonLabel}
          </RedirectButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
