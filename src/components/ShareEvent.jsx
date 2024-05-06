import facebook from "../assets/facebook.svg";
import whatsApp from "../assets/whatsApp.svg";

const ShareEvent = ({ fest }) => {
  console.log(fest);
  const eventUrl = window.location.href;
  const eventTitle = fest.name;
  const eventImage = fest.img;

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(eventUrl)}&picture=${eventImage}`;
    window.open(facebookUrl, "_blank");
  };

  const shareOnWhatsApp = () => {
    const whatsAppUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(eventTitle)}%20-%20${encodeURIComponent(eventUrl)}`;
    window.open(whatsAppUrl, "_blank");
  };

  return (
    <div className="flex gap-2">
      <img
        className="w-9 cursor-pointer"
        onClick={shareOnFacebook}
        src={facebook}
        alt="facebook"
      />
      <img
        className="w-9 cursor-pointer"
        onClick={shareOnWhatsApp}
        src={whatsApp}
        alt="whatsApp"
      />
    </div>
  );
};

export default ShareEvent;
