import React, { useEffect, useState } from 'react';
import ContentFragment from "./base/ContentFragment";
import Image from "./base/Image";
import Title from "./base/Title";
import Text from "./base/Text";
import RedirectButton from "./RedirectButton";
import "./CabinDetails.scss";

/**
 * MVT-Compatible CabinDetails Component for Adobe Target Multivariate Testing
 * Handles multiple element variations for cabin details section
 */
const MVTCabinDetails = ({ 
  mboxName = "emirates-cabin-mvt",
  items = [],
  // Default fallback values
  defaultTitle = "Cabin Features",
  defaultDescription = "Discover our premium cabin experience",
  defaultButtonLabel = "Learn More"
}) => {
  const [mvtData, setMvtData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMVTOffer = () => {
      console.log(`Fetching MVT offer for cabin details mbox: ${mboxName}`);
      
      if (!window.adobe || !window.adobe.target) {
        console.error("Adobe Target is not initialized for MVT.");
        setLoading(false);
        return;
      }

      window.adobe.target.getOffer({
        mbox: mboxName,
        success: function(offer) {
          console.log("Adobe Target MVT offer received for cabin details:", offer);
          
          if (offer && offer.length > 0) {
            // Parse MVT offer data
            const mvtVariants = {};
            
            offer.forEach(action => {
              if (action.action === 'setContent') {
                try {
                  const content = JSON.parse(action.content);
                  mvtVariants[content.element] = content;
                } catch (e) {
                  console.warn("Could not parse MVT content:", action.content);
                }
              }
            });
            
            console.log("Parsed MVT variants for cabin details:", mvtVariants);
            setMvtData(mvtVariants);
          }
          
          setLoading(false);
        },
        error: function(status, error) {
          console.error("Failed to fetch Adobe Target MVT offer for cabin details:", status, error);
          setLoading(false);
        }
      });
    };

    // Wait for Adobe Target to initialize
    const timer = setTimeout(fetchMVTOffer, 2000);
    return () => clearTimeout(timer);
  }, [mboxName]);

  // Extract MVT variants or use defaults
  const getVariant = (element, property, defaultValue) => {
    return mvtData?.[element]?.[property] || defaultValue;
  };

  if (loading) {
    return <div className="mvt-loading">Loading cabin details MVT...</div>;
  }

  if (!items || !items.length) return null;

  return (
    <div 
      className="cabin-details container mvt-cabin-details"
      data-mvt-mbox={mboxName}
    >
      {items.map((cf, index) => {
        // Get MVT variants for this cabin item
        const titleVariant = getVariant('cabin-title', 'content', cf?.title);
        const titleStyle = getVariant('cabin-title', 'style', '');
        const descriptionVariant = getVariant('cabin-description', 'content', cf?.description);
        const descriptionStyle = getVariant('cabin-description', 'style', '');
        const buttonVariant = getVariant('cabin-button', 'variant', 'default');
        const buttonStyle = getVariant('cabin-button', 'style', '');
        const buttonText = getVariant('cabin-button', 'text', cf?.buttonLabel);

        return (
          <div key={cf?._path} className={`cabin-row mvt-cabin-row mvt-button-${buttonVariant} ${index % 2 === 1 ? "even" : "odd"}`}>
            <ContentFragment cf={cf} className="cabin-inner" behavior="component" label={cf?.title || "Cabin Feature"}>
              {cf?.image && (
                <Image src={cf?.image?._path} prop="image" label="Image" className="cabin-card__image" />
              )}
              <div className="cabin-card__panel">
                <Title 
                  heading="h3" 
                  prop="title" 
                  label="Title" 
                  className="cabin-card__title mvt-cabin-title"
                  style={titleStyle ? JSON.parse(`{${titleStyle}}`) : {}}
                >
                  {titleVariant}
                </Title>
                <Text 
                  content={descriptionVariant} 
                  prop="description" 
                  label="Description" 
                  className="cabin-card__desc mvt-cabin-description"
                  style={descriptionStyle ? JSON.parse(`{${descriptionStyle}}`) : {}}
                />
                <RedirectButton 
                  href={cf?.buttonLink} 
                  className={`cabin-link mvt-cabin-button`}
                  propLabel="buttonLabel" 
                  propLink="buttonLink"
                  style={buttonStyle ? JSON.parse(`{${buttonStyle}}`) : {}}
                  onClick={() => {
                    // Track MVT conversion
                    console.log('MVT Cabin button clicked', {
                      cabin: cf?.title,
                      title: getVariant('cabin-title', 'variant', 'A'),
                      button: getVariant('cabin-button', 'variant', 'default'),
                      description: getVariant('cabin-description', 'variant', 'A')
                    });
                  }}
                >
                  {buttonText}
                </RedirectButton>
              </div>
            </ContentFragment>
          </div>
        );
      })}
    </div>
  );
};

export default MVTCabinDetails;
