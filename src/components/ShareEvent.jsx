import facebook from "../assets/facebook.png";
import whatsApp from "../assets/whatsapp.png";

const ShareEvent = ({ fest }) => {
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
    <div className="flex gap-2 bg-zinc-900 p-2 rounded-lg bg-opacity-80 ">
      <img
        className="w-5 h-5 md:w-7 md:h-7 cursor-pointer"
        onClick={shareOnFacebook}
        src={facebook}
        alt="facebook"
      />
      <img
        className="w-5 h-5 md:w-7 md:h-7 cursor-pointer"
        onClick={shareOnWhatsApp}
        src={whatsApp}
        alt="whatsApp"
      />
    </div>
  );
};

export default ShareEvent;
