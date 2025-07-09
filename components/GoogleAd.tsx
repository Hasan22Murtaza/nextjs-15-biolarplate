"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const GoogleAd = () => {
  useEffect(() => {
    // Ensure ads are only loaded in the browser
    if (typeof window !== "undefined") {
      try {
        // Push ads to the adsbygoogle queue
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.error("AdSense error:", error);
      }
    }
  }, []);

  return (
    <div className="ad-container my-4">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2676022322411376" // Match the client ID from the script
        data-ad-slot="YOUR_AD_SLOT_ID" // Replace with your ad unit slot ID
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default GoogleAd;
