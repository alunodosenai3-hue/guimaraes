import * as React from "react";
import { MessageSquare } from "lucide-react";
import { BRAND_INFO } from "../data";

export default function FloatingWhatsApp() {
  const [shouldVibrate, setShouldVibrate] = React.useState(false);

  React.useEffect(() => {
    // Vibrate gently every 12 seconds to entice user interaction
    const interval = setInterval(() => {
      setShouldVibrate(true);
      const timer = setTimeout(() => setShouldVibrate(false), 1200);
      return () => clearTimeout(timer);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    const textQuery = encodeURIComponent(BRAND_INFO.whatsappMessage);
    const link = `https://wa.me/5571981984595?text=${textQuery}`;
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      id="whatsapp-floating-btn"
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-brand-green text-white font-semibold py-4 px-6 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 green-glow-hover cursor-pointer group ${
        shouldVibrate ? "animate-bounce" : ""
      }`}
      aria-label="Falar no WhatsApp"
    >
      <div className="relative">
        <MessageSquare className="w-6 h-6 fill-current animate-pulse" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
      </div>
      <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-500 group-hover:max-w-xs md:max-w-xs text-sm">
        Falar com Advogado Plantonista
      </span>
    </button>
  );
}
