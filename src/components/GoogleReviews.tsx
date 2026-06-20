import * as React from "react";
import { Star, ShieldCheck, ExternalLink } from "lucide-react";
import { GOOGLE_REVIEWS_LIST, BRAND_INFO } from "../data";

export default function GoogleReviews() {
  const handleCTA = () => {
    const textQuery = encodeURIComponent(BRAND_INFO.whatsappMessage);
    window.open(`https://wa.me/5571981984595?text=${textQuery}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden">
      {/* Light background leak */}
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Badge Block */}
        <div className="max-w-4xl mx-auto bg-black border border-white/5 p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8 justify-between shadow-2xl mb-12">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <div className="flex items-center gap-2">
              {/* Google Colored Logo Icon */}
              <span className="text-xl md:text-2xl font-display font-extrabold text-white tracking-tight">
                <span className="text-blue-500">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-500">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
              </span>
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest bg-white/5 px-2.5 py-0.5 rounded ml-2">
                Avaliações
              </span>
            </div>

            <h3 className="font-display font-extrabold text-xl text-white mt-1">
              Excelente reputação no Google
            </h3>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Consumidores de Salvador avaliam nosso trabalho jurídico de saúde com nota máxima de agilidade.
            </p>
          </div>

          {/* Aggregated Score */}
          <div className="flex flex-col items-center">
            <span className="font-display text-4xl md:text-5xl font-black text-white leading-none">
              4.9
            </span>
            <div className="flex gap-0.5 my-2 text-brand-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">
              184 avaliações verificadas
            </span>
          </div>

          {/* Core button */}
          <button
            onClick={handleCTA}
            className="px-6 py-3 bg-brand-gold hover:bg-brand-gold-dark text-black font-bold text-xs uppercase tracking-wider rounded-xl cursor-pointer flex items-center gap-1.5 transition-all"
          >
            <span>Verificar Disponibilidade Grátis</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        {/* Real Reviews Loop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {GOOGLE_REVIEWS_LIST.map((review) => (
            <div
              key={review.id}
              className="bg-black/40 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-brand-gold/15 transition-all"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    {/* Placeholder letter color badge */}
                    <div className="w-9 h-9 rounded-full bg-neutral-800 text-brand-gold font-bold font-display text-sm flex items-center justify-center">
                      {review.avatarLetter}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white leading-tight">
                        {review.author}
                      </h4>
                      <span className="text-[9px] text-slate-500 font-mono">
                        {review.relativeTime}
                      </span>
                    </div>
                  </div>

                  <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/15 px-2 py-0.5 rounded font-bold uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verificado</span>
                  </span>
                </div>

                <div className="flex gap-0.5 mb-3 text-brand-gold">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="text-slate-300 text-xs leading-relaxed italic">
                  "{review.snippet}"
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                <span>Salvador, BA - Brasil</span>
                <span className="text-amber-500 font-bold uppercase">★★★★★</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
