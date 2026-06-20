import * as React from "react";
import { ArrowRight, ShieldCheck, Heart, AlertOctagon } from "lucide-react";
import { BRAND_INFO } from "../data";

export default function CTA() {
  const handleCTA = () => {
    const textQuery = encodeURIComponent(BRAND_INFO.whatsappMessage);
    window.open(`https://wa.me/5571981984595?text=${textQuery}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative Golden Ambient Backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Urgent Alert Banner */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-950/40 border border-red-500/20 text-red-400 text-xs font-mono font-bold uppercase tracking-wider mb-8 animate-pulse">
          <AlertOctagon className="w-4 h-4 text-red-500" />
          <span>Risco Imediato de Gravidade para a Integridade do Paciente</span>
        </div>

        {/* High Conversion Header */}
        <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase max-w-4xl mx-auto mb-6">
          Não Aceite a Negativa do Seu Plano de Saúde Sem Lutar!
        </h2>

        {/* Supporting description */}
        <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-10">
          Enquanto a operadora posterga análises, a enfermidade avança. A legislação protege sua integridade física — reverta a recusa hoje mesmo com quem possui autoridade e celeridade técnica em Salvador/BA.
        </p>

        {/* Glass Luxury Action Box */}
        <div className="max-w-2xl mx-auto p-8 rounded-2xl glass-panel text-left mb-12">
          <h4 className="font-display font-extrabold text-white text-base mb-4 text-center">
            Nossos Diferenciais de Aceleração
          </h4>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
            <li className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-brand-green mt-0.5" />
              <span>Plantão cível judicial contínuo para urgências médicas</span>
            </li>
            <li className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-brand-green mt-0.5" />
              <span>Dano moral e indenização retroativa pela dor sofrida</span>
            </li>
            <li className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-brand-green mt-0.5" />
              <span>Análise técnica gratuita do seu relatório médico preliminar</span>
            </li>
            <li className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-brand-green mt-0.5" />
              <span>Suporte via WhatsApp de um especialista</span>
            </li>
          </ul>
        </div>

        {/* Action button */}
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={handleCTA}
            className="px-10 py-5 bg-brand-green hover:bg-emerald-500 text-white font-extrabold text-base md:text-lg tracking-wide uppercase rounded-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-[0.98] cursor-pointer shadow-[0_15px_35px_rgba(34,197,94,0.3)] hover:shadow-[0_20px_45px_rgba(34,197,94,0.5)] flex items-center justify-center gap-3 w-full max-w-md green-glow"
          >
            <span>Quero Garantir Meu Direito Agora!</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            Tempo Estimado de resposta na triagem: menos de 5 minutos
          </span>
        </div>

      </div>
    </section>
  );
}
