import { useEffect, useRef } from 'react';

/**
 * AdSense ad unit component.
 * 
 * SETUP: Create display ad units in your AdSense dashboard, then replace
 * the slot prop with your actual slot ID (e.g. "1234567890").
 * 
 * @param {string} slot - Your AdSense ad slot ID from the AdSense dashboard
 * @param {string} format - "auto" | "rectangle" | "horizontal" | "vertical"
 * @param {string} layout - For responsive: "in-article" | "in-feed" | "fluid" | "auto"
 */
const AdUnit = ({ 
  slot = '', 
  format = 'auto', 
  layout = 'auto',
  style = { display: 'block', minHeight: 90 }
}) => {
  const adRef = useRef(null);

  useEffect(() => {
    if (!slot || typeof window === 'undefined') return;
    
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.warn('AdSense load error:', e);
    }
  }, [slot]);

  if (!slot) return null;

  return (
    <div className="ad-unit-wrapper">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-4211248882384118"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={format === 'auto'}
      />
    </div>
  );
};

export default AdUnit;
