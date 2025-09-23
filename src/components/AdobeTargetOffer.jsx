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
                                // If language is not English, show static translated content
                                if (lang !== 'en') {
                                    mboxDiv.innerHTML = getTranslatedOfferContent(lang);
                                } else {
                                    // For English, show the original Adobe Target content
                                    mboxDiv.innerHTML = contentAction.content;
                                }
                                
                                console.log(`A/B test content manually applied to mbox: ${mboxName}`);
                                console.log('Content applied for lang:', lang);
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

    // Function to get static translated content for non-English languages
    const getTranslatedOfferContent = (language) => {
        const translations = {
            ar: {
                title: "جديد على طيران الإمارات — احصل على العرض",
                description: "مرحباً بك في طيران الإمارات. اكتشف عرضاً تمهيدياً خاصاً وابدأ رحلتك المميزة اليوم.",
                button: "احصل على العرض"
            },
            fr: {
                title: "Nouveau chez Emirates — Obtenez l'offre",
                description: "Bienvenue chez Emirates. Débloquez une offre d'introduction spéciale et commencez votre voyage premium aujourd'hui.",
                button: "Obtenir l'offre"
            },
            es: {
                title: "Nuevo en Emirates — Obtén la oferta",
                description: "Bienvenido a Emirates. Desbloquea una oferta de introducción especial y comienza tu viaje premium hoy.",
                button: "Obtener oferta"
            }
        };

        const t = translations[language] || translations.ar; // fallback to Arabic

        return `<div style="padding:90px; background:#e3f2fd url('https://publish-p135360-e1341441.adobeaemcloud.com/content/dam/emirates/emirates-a380-flying-in-clean-blue-sky-t1024x480.png') center/cover no-repeat; margin:20px 0;">
            <h2 style="color:#fdfdfd; font-family:'Mylius Modern', sans-serif;">${t.title}</h2>
            <p style="color:#fdfdfd; font-size:16px; line-height:1.5;">
                ${t.description}
            </p>
            <button style="background:#1976d2; color:#fff; padding:12px 24px; border:none; border-radius:4px; cursor:pointer; font-size:16px;">
                ${t.button}
            </button>
        </div>`;
    };

    // Function to translate targeted content - simple approach like other components
    const translateTargetedContent = (element) => {
        // Just replace the text nodes with translated versions
        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        let node;
        while (node = walker.nextNode()) {
            const text = node.textContent.trim();
            
            // Replace common targeted content with translations
            if (text === 'New to Emirates — Get Offer') {
                node.textContent = t('targeted.newToEmirates');
            } else if (text === 'Welcome to Emirates. Unlock a special introductory offer and start your premium journey today.') {
                node.textContent = t('targeted.welcomeMessage');
            } else if (text === 'Get Offer') {
                node.textContent = t('targeted.getOffer');
            } else if (text === 'Explore Premium - New') {
                node.textContent = t('targeted.explorePremium');
            } else if (text === 'Experience B - Premium') {
                node.textContent = t('targeted.experienceB');
            } else if (text === 'Discover our enhanced Emirates experience with premium comfort and luxury services that exceed expectations.') {
                node.textContent = t('targeted.premiumDescription');
            }
            // Handle translation keys that might be coming from Target
            else if (text === 'targeted.newToEmirates') {
                node.textContent = t('targeted.newToEmirates');
            } else if (text === 'targeted.welcomeMessage') {
                node.textContent = t('targeted.welcomeMessage');
            } else if (text === 'targeted.getOffer') {
                node.textContent = t('targeted.getOffer');
            } else if (text === 'targeted.explorePremium') {
                node.textContent = t('targeted.explorePremium');
            } else if (text === 'targeted.experienceB') {
                node.textContent = t('targeted.experienceB');
            } else if (text === 'targeted.premiumDescription') {
                node.textContent = t('targeted.premiumDescription');
            }
        }
    };
 
    return <div id={mboxName}></div>;
};

export default AdobeTargetOffer;
