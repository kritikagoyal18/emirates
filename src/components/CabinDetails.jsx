import React from "react";
import ContentFragment from "./base/ContentFragment";
import Image from "./base/Image";
import Title from "./base/Title";
import Text from "./base/Text";
import RedirectButton from "./RedirectButton";
import "./CabinDetails.scss";

const CabinDetails = ({ items = [] }) => {
  if (!items || !items.length) return null;

  return (
    <div className="cabin-details container">
      {items.map((cf) => (
        <ContentFragment key={cf?._path} cf={cf} className="cabin-card" behavior="component" label={cf?.title || "Cabin Feature"}>
          {cf?.image && (
            <Image src={cf?.image?._path} prop="image" label="Image" className="cabin-card__image" />
          )}
          <div className="cabin-card__content">
            <Title heading="h3" prop="title" label="Title" className="color-light">
              {cf?.title}
            </Title>
            <Text content={cf?.description} prop="description" label="Description" className="color-grey" />
            <RedirectButton href={cf?.buttonLink} className="secondary" propLabel="buttonLabel" propLink="buttonLink">
              {cf?.buttonLabel}
            </RedirectButton>
          </div>
        </ContentFragment>
      ))}
    </div>
  );
};

export default CabinDetails;


