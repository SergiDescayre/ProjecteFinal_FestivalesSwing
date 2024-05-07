import facebook from "../assets/facebook.png";
import whatsApp from "../assets/whatsapp.png";

const ShareEvent = ({ fest }) => {
  console.log(fest);
  const eventUrl = window.location.href;
  const eventTitle = fest.name;
  const eventImage = fest.img;

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(eventUrl)}&picture=${eventImage}`;
    window.open(facebookUrl, "_blank");
  };

  // const shareOnWhatsApp = () => {
  //   const whatsAppUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(eventTitle)}%20-%20${encodeURIComponent(eventUrl)}`;
  //   window.open(whatsAppUrl, "_blank");
  // };

  const shareOnWhatsApp = () => {
    // URL de la imagen por defecto

    // URL de tu sitio web o recurso que deseas compartir

    // Mensaje que se mostrará en WhatsApp
    const text = encodeURIComponent("¡Echa un vistazo a esto!");

    // Construyendo el enlace con metadatos enriquecidos
    const whatsappUrl = `https://api.whatsapp.com/send?text=${text}&amp;url=${eventUrl}&amp;image=${encodeURIComponent(eventImage)}`;

    // Abriendo el enlace en una nueva ventana
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex gap-2">
      <img
        className="w-5 h-5 md:w-9 md:h-9 cursor-pointer"
        onClick={shareOnFacebook}
        src={facebook}
        alt="facebook"
      />
      <img
        className="w-5 h-5 md:w-9 md:h-9 cursor-pointer"
        onClick={shareOnWhatsApp}
        src={whatsApp}
        alt="whatsApp"
      />
    </div>
  );
};

export default ShareEvent;
