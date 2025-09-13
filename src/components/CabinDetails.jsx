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
      {items.map((cf, index) => (
        <div key={cf?._path} className={`cabin-row ${index % 2 === 1 ? "even" : "odd"}`}>
          <ContentFragment cf={cf} className="cabin-inner" behavior="component" label={cf?.title || "Cabin Feature"}>
            {cf?.image && (
              <Image src={cf?.image?._authorUrl || cf?.image?._publishUrl || cf?.image?._path} prop="image" label="Image" className="cabin-card__image" />
            )}
            <div className="cabin-card__panel">
              <Title heading="h3" prop="title" label="Title" className="cabin-card__title">
                {cf?.title}
              </Title>
              <Text content={cf?.description} prop="description" label="Description" className="cabin-card__desc" />
              <RedirectButton href={cf?.buttonLink} className="cabin-link" propLabel="buttonLabel" propLink="buttonLink">
                {cf?.buttonLabel}
              </RedirectButton>
            </div>
          </ContentFragment>
        </div>
      ))}
    </div>
  );
};

export default CabinDetails;


