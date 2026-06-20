import * as React from "react";
import { Star, MessageSquareCode, Quote } from "lucide-react";
import { TESTIMONIALS_LIST, BRAND_INFO } from "../data";

export default function Testimonials() {
  const handleCTA = () => {
    const textQuery = encodeURIComponent(BRAND_INFO.whatsappMessage);
    window.open(`https://wa.me/5571981984595?text=${textQuery}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="depoimentos" className="py-24 bg-black relative">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-brand-gold tracking-widest uppercase">
            QUEM CONFIA E RECOMENDA
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase mt-3">
            Depoimentos De Clientes
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4"></div>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base mt-4 leading-relaxed">
            Nada fala mais alto do que a palavra de quem recuperou a saúde e venceu a impotência operacional diante das operadoras do plano de saúde. Veja o relato de nossos clientes:
          </p>
        </div>

        {/* Testimonials List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS_LIST.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 rounded-2xl bg-zinc-950 border border-white/5 relative flex flex-col justify-between group hover:border-brand-gold/25 transition-all duration-300"
            >
              {/* Decorative Quote */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 group-hover:text-brand-gold/10 transition-colors" />

              <div>
                {/* Stars Indicator */}
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-gold fill-current" />
                  ))}
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic mb-6">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-white/5">
                <img
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-gold/30"
                />
                <div>
                  <h4 className="font-display font-bold text-white text-sm">{testimonial.name}</h4>
                  <span className="block text-[10px] text-brand-gold font-mono uppercase mt-0.5">{testimonial.role}</span>
                  <span className="block text-[9px] text-slate-500 mt-0.5">{testimonial.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Review callout */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-xs uppercase tracking-widest font-mono">ESTAMOS DISPONÍVEIS AGORA NO WHATSAPP PARA OUVIR SUA HISTÓRIA</p>
          <button
            onClick={handleCTA}
            className="mt-4 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-lg border border-white/10 text-xs uppercase tracking-wider transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            <MessageSquareCode className="w-4 h-4 text-brand-gold" />
            <span>Falar com Concierge Jurídico</span>
          </button>
        </div>

      </div>
    </section>
  );
}
