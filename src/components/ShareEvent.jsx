import React from 'react';

const ShareEvent = ({ eventTitle, eventUrl }) => {
  const shareOnTwitter = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(eventTitle)}&url=${encodeURIComponent(eventUrl)}`;
    window.open(tweetUrl, '_blank');
  };

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(eventUrl)}`;
    window.open(facebookUrl, '_blank');
  };

  const shareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(eventUrl)}&title=${encodeURIComponent(eventTitle)}`;
    window.open(linkedInUrl, '_blank');
  };

  const shareOnWhatsApp = () => {
    const whatsAppUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(eventTitle)}%20-%20${encodeURIComponent(eventUrl)}`;
    window.open(whatsAppUrl, '_blank');
  };

  return (
    <div className="flex gap-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={shareOnTwitter}>
        Compartir en Twitter
      </button>
      <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900" onClick={shareOnFacebook}>
        Compartir en Facebook
      </button>
      <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500" onClick={shareOnLinkedIn}>
        Compartir en LinkedIn
      </button>
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={shareOnWhatsApp}>
        Compartir en WhatsApp
      </button>
    </div>
  );
};

export default ShareEvent;
