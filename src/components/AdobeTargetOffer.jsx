import React, { useEffect } from 'react';
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
                    success: function(offer) {
                        console.log("Adobe Target A/B test offer received:", offer);
                        
                        // Apply the offer directly - Adobe Target handles A/B test logic
                        window.adobe.target.applyOffer({
                            mbox: mboxName,
                            offer: offer
                        });
                        
                        console.log(`A/B test offer applied to mbox: ${mboxName}`);
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
 
    return <div id={mboxName}>Loading A/B test...</div>;
};

export default AdobeTargetOffer;
