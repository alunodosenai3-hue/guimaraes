import * as React from "react";
import { ShieldCheck, Phone, ArrowUpRight, Clock, MapPin } from "lucide-react";
import { BRAND_INFO } from "../data";

export default function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContact = () => {
    const textQuery = encodeURIComponent(BRAND_INFO.whatsappMessage);
    window.open(`https://wa.me/5571981984595?text=${textQuery}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Top micro banner for absolute trust & status */}
      <div className="bg-brand-black/95 text-[10px] md:text-xs py-2 px-4 border-b border-white/5 flex flex-wrap justify-between items-center gap-2 z-50 relative font-mono text-slate-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-brand-gold" />
            Salvador - BA
          </span>
          <span className="hidden md:flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-brand-gold" />
            Plantão de Urgência de Saúde 24h
          </span>
          <span className="flex items-center gap-1 bg-brand-green/20 text-brand-green border border-brand-green/30 px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wider font-extrabold animate-pulse">
            ● ONLINE
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-brand-gold/90 font-semibold">{BRAND_INFO.oab}</span>
          <span className="text-white/20">|</span>
          <span className="text-xs text-white">CNPJ {BRAND_INFO.cnpj}</span>
        </div>
      </div>

      {/* Main glass header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md py-4 border-b border-brand-gold/25 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-gold to-brand-gold-dark flex items-center justify-center text-black shadow-lg shadow-brand-gold/20 transform transition-transform group-hover:rotate-6">
              <ShieldCheck className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <span className="block font-display text-lg md:text-xl font-extrabold tracking-tight text-white leading-none">
                SARAIVA
              </span>
              <span className="block text-[9px] md:text-[10px] font-mono tracking-widest text-brand-gold font-bold uppercase mt-0.5">
                ADVOCACIA DA SAÚDE
              </span>
            </div>
          </a>

          {/* Nav links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#beneficios" className="hover:text-brand-gold transition-colors duration-200">Benefícios</a>
            <a href="#sobre" className="hover:text-brand-gold transition-colors duration-200">Sobre Nós</a>
            <a href="#servicos" className="hover:text-brand-gold transition-colors duration-200">Casos Médicos</a>
            <a href="#portfolio" className="hover:text-brand-gold transition-colors duration-200">Vitórias e Resultados</a>
            <a href="#depoimentos" className="hover:text-brand-gold transition-colors duration-200">Avaliações</a>
            <a href="#faq" className="hover:text-brand-gold transition-colors duration-200">Dúvidas FAQ</a>
          </nav>

          {/* Quick contact CTA */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${BRAND_INFO.phoneRaw}`}
              className="hidden sm:flex items-center gap-2 text-xs md:text-sm font-medium text-slate-300 hover:text-brand-gold transition-colors py-2 px-3 rounded-lg border border-white/5 bg-white/5"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>{BRAND_INFO.phone}</span>
            </a>
            <button
              onClick={handleContact}
              className="px-5 py-2.5 bg-brand-gold hover:bg-brand-gold-dark text-black text-xs md:text-sm font-bold rounded-lg transition-all duration-200 shadow-md shadow-brand-gold/10 hover:shadow-brand-gold/30 cursor-pointer flex items-center gap-1.5 font-display transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Consultar Advogado</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
