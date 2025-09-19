import { useState, useEffect } from 'react';

/**
 * Custom hook for Adobe Target A/B testing with feature flags
 * @param {string} mboxName - The mbox location name (e.g., 'homepage-hero-test')
 * @param {Object} params - Additional parameters to send with the request
 * @returns {Object} - { experience, loading, error, sendNotification }
 */
const useAdobeTargetAB = (mboxName, params = {}) => {
  const [experience, setExperience] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        // Wait for Adobe Target to be available
        const waitForAdobeTarget = () => {
          return new Promise((resolve, reject) => {
            const checkTarget = () => {
              if (window.adobe && window.adobe.target) {
                resolve();
              } else {
                setTimeout(checkTarget, 100);
              }
            };
            checkTarget();
            
            // Timeout after 10 seconds
            setTimeout(() => reject(new Error('Adobe Target not available')), 10000);
          });
        };

        await waitForAdobeTarget();
        
        console.log(`Fetching A/B test for mbox: ${mboxName}`);

        // Get offers using Adobe Target
        const response = await window.adobe.target.getOffers({
          request: {
            prefetch: {
              mboxes: [
                {
                  index: 0,
                  name: mboxName,
                  parameters: params
                }
              ]
            }
          }
        });

        const mboxResponse = response?.prefetch?.mboxes?.[0];
        const offerContent = mboxResponse?.options?.[0]?.content;

        if (offerContent) {
          // Parse JSON content if it exists
          let experienceData = null;
          
          if (typeof offerContent === 'string') {
            try {
              experienceData = JSON.parse(offerContent);
            } catch (e) {
              experienceData = { content: offerContent };
            }
          } else if (typeof offerContent === 'object') {
            experienceData = offerContent;
          }

          setExperience({
            ...experienceData,
            mboxName,
            activityId: mboxResponse.options?.[0]?.eventToken
          });

          console.log(`A/B test experience loaded for ${mboxName}:`, experienceData);
        } else {
          // Default experience (control)
          setExperience({
            enabled: false,
            flag: 'control',
            mboxName
          });
          console.log(`Using default experience for ${mboxName}`);
        }

      } catch (err) {
        console.error('Error fetching Adobe Target experience:', err);
        setError(err.message);
        // Fallback to default experience
        setExperience({
          enabled: false,
          flag: 'control',
          mboxName,
          error: true
        });
      } finally {
        setLoading(false);
      }
    };

    if (mboxName) {
      fetchExperience();
    }
  }, [mboxName, JSON.stringify(params)]);

  // Function to send notifications for tracking
  const sendNotification = (notificationType = 'display', additionalData = {}) => {
    if (!window.adobe || !window.adobe.target || !experience?.activityId) {
      console.warn('Cannot send notification: Adobe Target not available or no activity ID');
      return;
    }

    try {
      window.adobe.target.sendNotifications({
        request: {
          notifications: [
            {
              id: experience.activityId,
              type: notificationType,
              timestamp: Date.now(),
              mbox: {
                name: mboxName
              },
              ...additionalData
            }
          ]
        }
      });
      
      console.log(`Sent ${notificationType} notification for ${mboxName}`);
    } catch (err) {
      console.error('Error sending notification:', err);
    }
  };

  return {
    experience,
    loading,
    error,
    sendNotification
  };
};

export default useAdobeTargetAB;
