import facebook from "../assets/facebook.svg";
//import whatsApp from "../assets/whatsApp.svg";

const ShareEvent = () => {
  const eventUrl = window.location.href;
  const eventTitle = "Festivales Swing";
  const toShare = { title: "Hola" };

  const compartir = async () => {
    if (navigator.share && navigator.canShare(shareData)) {
      navigator.share(toShare);
    } else {
      console.log("No se puede compartir");
    }
  };

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(eventUrl)}`;
    window.open(facebookUrl, "_blank");
  };

  // const shareOnWhatsApp = () => {
  //   const whatsAppUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(eventTitle)}%20-%20${encodeURIComponent(eventUrl)}`;
  //   window.open(whatsAppUrl, "_blank");
  // };

  return (
    <div className="flex gap-4 flex-wrap">
      <img onClick={shareOnFacebook} src={facebook} alt="facebook" />
      {/* <img onClick={shareOnWhatsApp} src={whatsApp} alt="whatsApp" /> */}
      <button className="btn" onClick={compartir}>
        Compartir
      </button>
    </div>
  );
};

export default ShareEvent;
