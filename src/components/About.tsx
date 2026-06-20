import * as React from "react";
import { Award, Landmark, Briefcase, HeartHandshake, ArrowUpRight } from "lucide-react";
import { BRAND_INFO } from "../data";

export default function About() {
  const handleCTA = () => {
    const textQuery = encodeURIComponent(BRAND_INFO.whatsappMessage);
    window.open(`https://wa.me/5571981984595?text=${textQuery}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="sobre" className="py-24 bg-black relative">
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Trust Pillars Block */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold to-transparent opacity-[0.02] rounded-3xl"></div>
            
            {/* Visual representation of an office shield or abstract law layout */}
            <div className="p-8 md:p-12 rounded-3xl border border-brand-gold/10 bg-zinc-950/80 backdrop-blur shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-full"></div>
              
              <span className="text-xs font-mono font-bold tracking-widest text-brand-gold uppercase">
                CONSTITUÍDO EM SALVADOR
              </span>
              
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mt-3 mb-6">
                Liderança em Defesa Paciente-Centrada
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Fundado com a missão inabalável de desmantelar abusos administrativos e corporativos de operadoras de planos de saúde e omissões do SUS. Nós auxiliamos centenas de famílias baianas a resgatarem sua dignidade no momento de maior fragilidade mental e física.
              </p>

              {/* Counter badges */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
                <div className="flex gap-3 items-start">
                  <Award className="w-5 h-5 text-brand-gold mt-1" />
                  <div>
                    <h4 className="font-display font-bold text-white text-base">Especialização</h4>
                    <p className="text-xs text-slate-500">Direito Civil e Médico Avançado</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Landmark className="w-5 h-5 text-brand-gold mt-1" />
                  <div>
                    <h4 className="font-display font-bold text-white text-base">Celeridade</h4>
                    <p className="text-xs text-slate-500">Ajuizamento 100% Digital</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Briefcase className="w-5 h-5 text-brand-gold mt-1" />
                  <div>
                    <h4 className="font-display font-bold text-white text-base">Firmeza</h4>
                    <p className="text-xs text-slate-500">Multas contra planos abusivos</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <HeartHandshake className="w-5 h-5 text-brand-gold mt-1" />
                  <div>
                    <h4 className="font-display font-bold text-white text-base">Atendimento</h4>
                    <p className="text-xs text-slate-500">Humanizado via WhatsApp 24h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Float badge */}
            <div className="absolute -bottom-6 -right-4 bg-brand-gold text-black px-6 py-4 rounded-2xl shadow-xl hidden md:flex flex-col border border-black max-w-[200px]">
              <span className="font-display font-bold text-xl leading-none">OAB/BA</span>
              <span className="text-xs font-mono font-bold text-neutral-800 mt-1 uppercase tracking-wider">Altamente Qualificado</span>
            </div>
          </div>

          {/* Copy Column */}
          <div>
            <span className="text-xs font-mono font-bold text-brand-gold tracking-widest uppercase">
              CONHEÇA A SARAIVA ADVOCACIA
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mt-3 mb-6">
              Defendendo Seu Direito À Saúde E À Vida Sem Concessões.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Os planos de saúde lucram bilhões anualmente e, lamentavelmente, costumam utilizar pretextos genéricos (“em análise”, “fora do rol da ANS”, “procedimento estético” ou “período de carência”) para barrar procedimentos médicos que você e seus familiares pagaram caro para ter direito.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              A <strong className="text-brand-gold">{BRAND_INFO.name}</strong> possui conhecimento especializado nos meandros das auditorias médicas. Ao analisarmos seu caso, mapeamos as ilegalidades do plano de saúde e fundamentamos medidas liminares com teorias jurídicas sofisticadas e laudos médicos periciais, o que maximiza as chances de uma liminar aceita em pouquíssimas horas.
            </p>

            <div className="bg-zinc-950 p-6 rounded-2xl border border-white/5 mb-8">
              <span className="block text-xs font-mono text-slate-500 uppercase">Sede Física Salvador Trade Center</span>
              <span className="block text-slate-300 text-xs md:text-sm font-medium mt-1">
                {BRAND_INFO.address}
              </span>
            </div>

            <button
              onClick={handleCTA}
              className="px-6 py-4 bg-transparent border-2 border-brand-gold text-brand-gold font-bold rounded-xl text-xs md:text-sm uppercase tracking-wider hover:bg-brand-gold hover:text-black transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>Agendar Consulta Preventiva Grátis</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
