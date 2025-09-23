import React, { useEffect } from 'react';
import { getLangCode } from "../utils";
import "./AdobeTargetOffer.scss";

/**
 * Adobe Target Offer Component - Works with Adobe Target Interface A/B Tests
 * This component integrates with A/B tests created in Adobe Target's interface
 */
const AdobeTargetOffer = ({ mboxName = "emirates-ab-test" }) => {
    useEffect(() => {
        
            // Function to fetch and render the offer from Adobe Target A/B test
            const fetchAndRenderOffer = () => {
                console.log(`Fetching A/B test offer for mbox: ${mboxName}`);
                
                // Ensure Adobe Target is available
                if (!window.adobe || !window.adobe.target) {
                    console.error("Adobe Target is not initialized.");
                    return;
                } else{
                  console.log("Adobe Target is initialized.");
                }
                
                // Use Adobe Target's native getOffer method for A/B tests
                window.adobe.target.getOffer({
                    mbox: mboxName,
                    params: { lang: getLangCode() }, // Include language parameter like other components
                    success: function(offer) {
                        console.log("Adobe Target A/B test offer received:", offer);
                        
                        // Extract content from the offer and manually apply it
                        const mboxDiv = document.getElementById(mboxName);
                        if (mboxDiv && offer && offer.length > 0) {
                            // Find the setContent action
                            const contentAction = offer.find(action => action.action === 'setContent');
                            if (contentAction && contentAction.content) {
                                mboxDiv.innerHTML = contentAction.content;
                                console.log(`A/B test content manually applied to mbox: ${mboxName}`);
                                console.log('Content applied:', contentAction.content);
                                console.log('Div content after applying:', mboxDiv.innerHTML);
                            } else {
                                console.log("No setContent action found in offer");
                            }
                        } else {
                            console.log("Mbox element not found or offer is empty");
                        }
                    },
                    error: function(status, error) {
                        console.error("Failed to fetch Adobe Target A/B test offer:", status, error);
                        
                        // Show default content on error
                        const mboxDiv = document.getElementById(mboxName);
                        if (mboxDiv) {
                            mboxDiv.innerHTML = '<div>Default content loaded</div>';
                        }
                    }
                });
            };  
            // Fetch and render the offer when the component mounts
            setTimeout(fetchAndRenderOffer, 2000);
  
    }, [mboxName]); // Re-run if mboxName changes
 
    return <div id={mboxName}></div>;
};

export default AdobeTargetOffer;
