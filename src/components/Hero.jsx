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
    }} data-aue-prop="image" data-aue-type="media" data-aue-label="Hero Image">
      <div className="container hero-wrapper">
        <div className="content-button-wrapper">
          <div className="content-wrapper">
            <Text content={pretitle} prop="pretitle" label="Pretitle" className="color-grey" />
            <Title heading="h1" prop="title" label="Title" className="color-light">
              {title}
            </Title>
            <Text content={description} prop="description" label="Description" className="color-grey" />
          </div>
          <RedirectButton href={buttonLink} className="hover-effect" propLabel="buttonLabel" propLink="buttonLink">
            {buttonLabel}
          </RedirectButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
