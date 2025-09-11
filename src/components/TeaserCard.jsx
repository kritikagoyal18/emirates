import React from "react";
import Image from "./base/Image";
import ContentFragment from "./base/ContentFragment";
import Title from "./base/Title";
import Text from "./base/Text";
import "./TeaserCard.scss";

const TeaserCard = ({ cf, style }) => {
  const image = cf?.image?._path;
  const title = cf?.title;
  const description = cf?.description;

  return (
    <ContentFragment cf={cf} behavior="component" className="teaser-card">
      <Image src={image} alt={`${title}`} prop="icon" className="teaser-image" />
      <div className="content-wrapper" style={style}>
        <Title heading="h2" prop="title" className="teaser-title color-dark">
          {title}
        </Title>
        <Text content={description} prop="description" className="teaser-description" />
      </div>
    </ContentFragment>
  );
};

export default TeaserCard;
