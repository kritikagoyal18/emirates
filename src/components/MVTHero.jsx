import React, { useEffect, useState } from 'react';
import Title from "./base/Title";
import Text from "./base/Text";
import RedirectButton from "./RedirectButton";
import "./Hero.scss";

/**
 * MVT-Compatible Hero Component for Adobe Target Multivariate Testing
 * Handles multiple element variations simultaneously
 */
const MVTHero = ({ 
  mboxName = "emirates-hero-mvt",
  // Default fallback values
  defaultTitle = "THE EMIRATES EXPERIENCE",
  defaultDescription = "Cabin Features",
  defaultButtonLabel = "Explore Business Class",
  defaultImage = "/assets/business-class-interior.jpg",
  defaultButtonLink = "/experience"
}) => {
  const [mvtData, setMvtData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMVTOffer = () => {
      console.log(`Fetching MVT offer for mbox: ${mboxName}`);
      
      if (!window.adobe || !window.adobe.target) {
        console.error("Adobe Target is not initialized for MVT.");
        setLoading(false);
        return;
      }

      window.adobe.target.getOffer({
        mbox: mboxName,
        success: function(offer) {
          console.log("Adobe Target MVT offer received:", offer);
          
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
            
            console.log("Parsed MVT variants:", mvtVariants);
            setMvtData(mvtVariants);
          }
          
          setLoading(false);
        },
        error: function(status, error) {
          console.error("Failed to fetch Adobe Target MVT offer:", status, error);
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

  const headlineText = getVariant('headline', 'content', defaultTitle);
  const headlineStyle = getVariant('headline', 'style', '');
  
  const buttonColor = getVariant('button', 'variant', 'red');
  const buttonStyle = getVariant('button', 'style', '');
  
  const backgroundImage = getVariant('background', 'image', defaultImage);
  const backgroundOverlay = getVariant('background', 'overlay', 
    'linear-gradient(90deg,rgba(0,0,0,.42) 50vw,transparent calc(50vw + 1100px))'
  );

  if (loading) {
    return <div className="mvt-loading">Loading MVT experience...</div>;
  }

  return (
    <div 
      className={`background-blue mvt-hero mvt-button-${buttonColor}`}
      style={{
        backgroundImage: `${backgroundOverlay}, url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "481px",
        width: "100%"
      }}
      data-mvt-mbox={mboxName}
    >
      <div className="container hero-wrapper">
        <div className="content-button-wrapper">
          <div className="content-wrapper">
            <Text content="Cabin Features" className="color-light pretitle" />
            <Title 
              heading="h1" 
              className="color-light mvt-headline"
              style={headlineStyle ? JSON.parse(`{${headlineStyle}}`) : {}}
            >
              {headlineText}
            </Title>
            <Text 
              content={defaultDescription} 
              className="color-light description" 
            />
          </div>
          <RedirectButton 
            href={defaultButtonLink} 
            className={`hover-effect mvt-button`}
            style={buttonStyle ? JSON.parse(`{${buttonStyle}}`) : {}}
            onClick={() => {
              // Track MVT conversion
              console.log('MVT Hero button clicked', {
                headline: getVariant('headline', 'variant', 'A'),
                button: getVariant('button', 'variant', 'red'),
                background: getVariant('background', 'variant', 'business')
              });
            }}
          >
            {defaultButtonLabel}
          </RedirectButton>
        </div>
      </div>
    </div>
  );
};

export default MVTHero;
