import * as React from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { FAQ_LIST, BRAND_INFO } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = React.useState<string | null>("f1"); // Open first by default

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleCTA = () => {
    const textQuery = encodeURIComponent(BRAND_INFO.whatsappMessage);
    window.open(`https://wa.me/5571981984595?text=${textQuery}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="faq" className="py-24 bg-black relative">
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-brand-gold tracking-widest uppercase">
            RESPOSTAS EFICAZES E PRECISAS
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase mt-3">
            Perguntas Frequentes FAQ
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4"></div>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base mt-4 leading-relaxed">
            Esclareça suas principais incertezas sobre prazos judiciais, abusividades dos planos de saúde e como restabelecer seu tratamento legalmente na Bahia:
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQ_LIST.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-zinc-950 border-brand-gold/45 shadow-[0_5px_15px_rgba(255,200,0,0.05)]"
                    : "bg-zinc-950/60 border-white/5 hover:border-white/10"
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-display cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex gap-3.5 items-start">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors ${
                      isOpen ? "text-brand-gold" : "text-slate-500"
                    }`} />
                    <span className="font-bold text-sm md:text-base text-white hover:text-brand-gold transition-colors">
                      {item.question}
                    </span>
                  </div>

                  {/* Chevron Icon with active rotation */}
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "transform rotate-180 text-brand-gold" : ""
                    }`}
                  />
                </button>

                {/* Animated Body Container */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[500px] border-t border-white/5" : "max-h-0"
                  }`}
                >
                  <div className="p-6 text-xs sm:text-sm text-slate-300 leading-relaxed bg-black/35 font-sans">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-14 max-w-xl mx-auto rounded-xl p-6 bg-zinc-950 border border-white/5 text-center flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-left">
            <h4 className="font-display font-bold text-white text-sm">Ainda possui alguma dúvida específica?</h4>
            <p className="text-xs text-slate-400 mt-0.5">Clique para enviar uma mensagem detalhada para nossa triagem.</p>
          </div>
          <button
            onClick={handleCTA}
            className="px-5 py-2.5 bg-brand-green hover:bg-emerald-600 text-white font-bold rounded-lg text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer green-glow"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar com Advogado (71)</span>
          </button>
        </div>

      </div>
    </section>
  );
}
