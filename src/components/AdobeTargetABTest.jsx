import React, { useEffect } from 'react';
import useAdobeTargetAB from '../hooks/useAdobeTargetAB';

/**
 * Adobe Target A/B Test Component for Feature Flags
 * @param {string} mboxName - The mbox location name
 * @param {Object} params - Additional parameters for targeting
 * @param {Function} children - Render prop function that receives the experience
 * @param {React.Component} fallback - Component to show while loading or on error
 */
const AdobeTargetABTest = ({ 
  mboxName, 
  params = {}, 
  children, 
  fallback = null 
}) => {
  const { experience, loading, error, sendNotification } = useAdobeTargetAB(mboxName, params);

  // Send display notification when experience loads
  useEffect(() => {
    if (experience && !experience.error) {
      sendNotification('display');
    }
  }, [experience, sendNotification]);

  if (loading) {
    return fallback || <div>Loading A/B test...</div>;
  }

  if (error) {
    console.error(`Adobe Target A/B Test Error for ${mboxName}:`, error);
    // Return default experience on error
    return children ? children({ 
      enabled: false, 
      flag: 'control', 
      error: true,
      sendNotification: () => {} 
    }) : fallback;
  }

  // Pass experience data and sendNotification function to children
  return children ? children({ 
    ...experience, 
    sendNotification 
  }) : null;
};

export default AdobeTargetABTest;
