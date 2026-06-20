import * as React from "react";
import { Flame, Pill, TrendingUp, FileCheck2, ArrowRight, ShieldCheck } from "lucide-react";
import { SERVICES_LIST, BRAND_INFO } from "../data";

export default function Services() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Flame":
        return <Flame className="w-6 h-6 text-red-500 animate-pulse" />;
      case "Pills":
        return <Pill className="w-6 h-6 text-amber-500" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-brand-gold" />;
      default:
        return <FileCheck2 className="w-6 h-6 text-brand-gold" />;
    }
  };

  const handleCTA = (serviceTitle: string) => {
    const textQuery = encodeURIComponent(
      `Olá! Preciso de ajuda urgente com uma negativa de cobertura para o serviço de: ${serviceTitle}.`
    );
    window.open(`https://wa.me/5571981984595?text=${textQuery}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="servicos" className="py-24 bg-zinc-950 relative">
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-brand-gold tracking-widest uppercase">
            CASOS DE ATUAÇÃO IMEDIATA
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase mt-3">
            Especialidades Do Escritório
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4"></div>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base mt-4 leading-relaxed">
            Se você ou alguém de sua família teve um procedimento negado na Bahia, saiba que essa negativa pode ser ilegal. Atuamos com as seguintes demandas jurídicas de alta velocidade:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-2xl bg-black/55 border border-white/5 hover:border-brand-gold/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Card top flare */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent"></div>

              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center p-2 border border-white/5 group-hover:border-brand-gold/20 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className={`text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                    service.urgency.includes("Máxima") 
                      ? "bg-rose-950/40 text-red-400 border border-red-500/20"
                      : "bg-brand-gold/10 text-brand-gold border border-brand-gold/20"
                  }`}>
                    {service.urgency}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white group-hover:text-brand-gold transition-colors duration-200">
                  {service.title}
                </h3>

                <p className="text-slate-400 text-xs md:text-sm mt-3 leading-relaxed">
                  {service.description}
                </p>

                {/* Sub-item bullet checklist */}
                <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-brand-green/80 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                <span className="text-[10px] font-mono font-bold text-slate-500">PRODUZIDO VIA LIMINAR COLETIVA OU CÍVEL</span>
                <button
                  onClick={() => handleCTA(service.title)}
                  className="text-xs font-bold uppercase tracking-wider text-brand-gold hover:text-white transition-colors duration-200 flex items-center gap-1 group-hover:translate-x-1 transition-all cursor-pointer"
                >
                  <span>Análise Imediata</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
