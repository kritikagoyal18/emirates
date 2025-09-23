import React, { useEffect, useState } from 'react';
import { getLangCode, subscribeLangCode } from "../utils";
import { t } from "../utils/i18n";
import "./AdobeTargetOffer.scss";

/**
 * Adobe Target Offer Component - Works with Adobe Target Interface A/B Tests
 * This component integrates with A/B tests created in Adobe Target's interface
 */
const AdobeTargetOffer = ({ mboxName = "emirates-ab-test" }) => {
    const [lang, setLang] = useState(getLangCode());

    // Re-fetch when language changes (SPA locale switch)
    useEffect(() => {
        const unsubscribe = subscribeLangCode((newLang) => setLang(newLang));
        return unsubscribe;
    }, []);

    useEffect(() => {
        
            // Function to fetch and render the offer from Adobe Target A/B test
            const fetchAndRenderOffer = () => {
                console.log(`Fetching A/B test offer for mbox: ${mboxName}`, { lang });
                
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
                    params: { lang }, // Include language parameter like other components
                    success: function(offer) {
                        console.log("Adobe Target A/B test offer received:", offer);
                        
                        // Extract content from the offer and manually apply it
                        const mboxDiv = document.getElementById(mboxName);
                        if (mboxDiv && offer && offer.length > 0) {
                            // Find the setContent action
                            const contentAction = offer.find(action => action.action === 'setContent');
                            if (contentAction && contentAction.content) {
                                // Apply the content and then translate any text elements
                                mboxDiv.innerHTML = contentAction.content;
                                
                                // Translate the content after it's applied
                                translateTargetedContent(mboxDiv);
                                
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
 
    }, [mboxName, lang]); // Re-run if mboxName or language changes

    // Function to translate targeted content
    const translateTargetedContent = (element) => {
        console.log('Translating targeted content, current lang:', lang);
        
        // Define translation mappings for common A/B test content
        const translations = {
            'New to Emirates — Get Offer': t('targeted.newToEmirates'),
            'Welcome to Emirates. Unlock a special introductory offer and start your premium journey today.': t('targeted.welcomeMessage'),
            'Get Offer': t('targeted.getOffer'),
            'Explore Premium - New': t('targeted.explorePremium'),
            'Experience B - Premium': t('targeted.experienceB'),
            'Discover our enhanced Emirates experience with premium comfort and luxury services that exceed expectations.': t('targeted.premiumDescription'),
            // Also handle translation keys that might be coming from Target
            'targeted.newToEmirates': t('targeted.newToEmirates'),
            'targeted.welcomeMessage': t('targeted.welcomeMessage'),
            'targeted.getOffer': t('targeted.getOffer'),
            'targeted.explorePremium': t('targeted.explorePremium'),
            'targeted.experienceB': t('targeted.experienceB'),
            'targeted.premiumDescription': t('targeted.premiumDescription')
        };

        console.log('Translation mappings:', translations);

        // Find and replace text content
        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        let node;
        while (node = walker.nextNode()) {
            const text = node.textContent.trim();
            if (translations[text]) {
                console.log(`Translating "${text}" to "${translations[text]}"`);
                node.textContent = translations[text];
            }
        }
    };
 
    return <div id={mboxName}></div>;
};

export default AdobeTargetOffer;
