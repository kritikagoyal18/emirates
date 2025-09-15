import React from "react";
import ContentFragment from "./base/ContentFragment";
import Image from "./base/Image";
import Title from "./base/Title";
import Text from "./base/Text";
import "./Locations.scss";

const Locations = ({ items = [] }) => {
  if (!items || !items.length) return null;

  return (
    <div className="locations container">
      {items.map((cf, index) => (
        <div key={cf?._path || index} className="location-row">
          <ContentFragment cf={cf} className="location-inner" behavior="component" label="Location">
            {cf?.image && (
              <Image src={cf?.image?._path} prop="image" label="Image" className="location-card__image" />
            )}
            <div className="location-card__panel">
              {cf?.pretitle && (
                <span className="location-card__country">{cf.pretitle}</span>
              )}
              <Title heading="h3" prop="title" label="Title" className="location-card__title">
                {cf?.title}
              </Title>
              <Text content={cf?.description} prop="description" label="Description" className="location-card__desc" />
            </div>
          </ContentFragment>
        </div>
      ))}
    </div>
  );
};

export default Locations;
