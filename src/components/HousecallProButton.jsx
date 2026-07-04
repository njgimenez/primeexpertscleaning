import React, { useEffect } from 'react';

const HCP_TOKEN = 'cab81ecde7094016802ba20bb5d7dbb8';
const HCP_ORG = 'Prime-experts-cleaning';
const HCP_SCRIPT_ID = 'housecall-pro-widget';

const HousecallProButton = ({ className = 'btn-primary', onClick }) => {
  useEffect(() => {
    if (document.getElementById(HCP_SCRIPT_ID)) return;

    const script = document.createElement('script');
    script.id = HCP_SCRIPT_ID;
    script.async = true;
    script.src = `https://online-booking.housecallpro.com/script.js?token=${HCP_TOKEN}&orgName=${HCP_ORG}`;
    document.body.appendChild(script);
  }, []);

  const handleClick = (event) => {
    onClick?.(event);

    if (window.HCPWidget?.openModal) {
      window.HCPWidget.openModal();
    }
  };

  return (
    <button
      type="button"
      data-token={HCP_TOKEN}
      data-orgname={HCP_ORG}
      className={`hcp-button ${className}`}
      onClick={handleClick}
    >
      Book online
    </button>
  );
};

export default HousecallProButton;
