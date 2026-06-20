import * as React from "react";
import { CheckSquare, ArrowUpRight, Maximize2, X, Scale, FileText, Ban, AlertCircle } from "lucide-react";
import { CASE_STUDIES, BRAND_INFO } from "../data";
import { CaseStudy } from "../types";

export default function Portfolio() {
  const [selectedCase, setSelectedCase] = React.useState<CaseStudy | null>(null);

  const handleCTA = (caseTitle: string) => {
    const textQuery = encodeURIComponent(
      `Olá! Estava lendo sobre o caso de sucesso: "${caseTitle}" e gostaria de entender se meu caso é similar.`
    );
    window.open(`https://wa.me/5571981984595?text=${textQuery}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="portfolio" className="py-24 bg-zinc-950 relative">
      <div className="absolute inset-y-0 right-0 w-1/3 bg-radial-[circle_400px_at_right_center,#120d02,transparent] opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Column */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-brand-gold tracking-widest uppercase">
            ESTUDOS DE CASOS REAIS
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase mt-3">
            Vitórias & Resultados Recentes
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4"></div>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base mt-4 leading-relaxed">
            Veja as decisões favoráveis obtidas recentemente por nossa equipe. Apresentamos abaixo laudos técnicos estilizados e diagramas reais de nossas principais conquistas em Salvador:
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {CASE_STUDIES.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-black/60 border border-white/5 hover:border-brand-gold/30 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedCase(item)}
            >
              <div>
                {/* Simulated Document Preview Asset (Fulfills the zero-images requirement) */}
                <div className="w-full h-48 bg-zinc-900 rounded-xl mb-6 border border-white/5 overflow-hidden relative flex items-center justify-center group-hover:border-brand-gold/20 transition-all">
                  <div className="absolute inset-0 bg-radial-[circle_150px_at_center,#1c1202,transparent] opacity-80"></div>
                  
                  {/* Subtle document graphic */}
                  <div className="w-28 bg-black/80 rounded border border-white/10 p-2 shadow-2xl relative flex flex-col gap-1.5 transform group-hover:scale-105 transition-transform">
                    <div className="flex justify-between items-center bg-white/5 p-1 rounded">
                      <Scale className="w-4 h-4 text-brand-gold" />
                      <span className="text-[6px] text-slate-400 font-mono">TJBA PROC #</span>
                    </div>
                    <div className="h-1 bg-slate-600 rounded w-5/6 mt-1"></div>
                    <div className="h-1 bg-slate-700 rounded w-full"></div>
                    <div className="h-1 bg-slate-750 rounded w-2/3"></div>
                    
                    <div className="mt-2 text-center p-1 rounded bg-brand-gold/10 border border-brand-gold/25">
                      <span className="text-[6.5px] font-mono text-brand-gold font-bold uppercase tracking-wider block">
                        LIMINAR DEFERIDA
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-3 right-3 text-[9px] font-mono text-slate-500 bg-black/85 px-2 py-1 rounded border border-white/5 flex items-center gap-1">
                    <Maximize2 className="w-3 h-3 text-brand-gold" />
                    <span>Clique para Ampliar</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-mono text-brand-gold font-bold uppercase py-0.5 px-2.5 rounded bg-brand-gold/10 border border-brand-gold/25">
                    {item.status}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">{item.resultTime}</span>
                </div>

                <h3 className="font-display font-extrabold text-white text-lg group-hover:text-brand-gold transition-colors duration-200 leading-snug">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-xs md:text-sm mt-3 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">{item.local}</span>
                <span className="text-xs text-brand-gold group-hover:underline font-bold inline-flex items-center gap-1">
                  Detalhes do Caso
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Lightbox Dialog / Modal (Requirement: lightbox portfólio with fade) */}
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay backdrop */}
            <div
              className="absolute inset-0 bg-black/95 backdrop-blur-sm transition-opacity duration-300"
              onClick={() => setSelectedCase(null)}
            ></div>

            {/* Modal Box */}
            <div className="relative w-full max-w-2xl bg-zinc-950 border border-brand-gold/40 rounded-2xl p-6 md:p-8 z-10 shadow-2xl gold-glow animate-[fadeIn_0.25s_ease-out_forwards]">
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white bg-white/5 p-2 rounded-full border border-white/10 cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3 mt-2">
                <span className="text-xs font-mono text-brand-gold font-bold uppercase py-0.5 px-2.5 rounded bg-brand-gold/10 border border-brand-gold/25">
                  {selectedCase.status}
                </span>
                <span className="text-xs text-slate-500 font-mono">{selectedCase.resultTime}</span>
              </div>

              <h3 className="font-display font-black text-xl md:text-2xl text-white mb-4 leading-tight">
                {selectedCase.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {selectedCase.description}
              </p>

              {/* Side-by-side Document Schematic (Before / After concept to show victory) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                
                {/* Before: Recusa Abusiva */}
                <div className="bg-rose-950/20 border border-rose-500/20 p-4 rounded-xl flex flex-col gap-2">
                  <div className="flex justify-between items-center border-b border-rose-500/10 pb-2">
                    <div className="flex items-center gap-1.5 text-rose-400">
                      <Ban className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider font-mono">Posicionamento do Plano</span>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-400 italic">"{selectedCase.beforeImgUrl}"</span>
                  <div className="text-[10px] text-rose-300 leading-snug bg-rose-950/50 p-2.5 rounded border border-rose-500/10 mt-1">
                    Operador indeferiu alegando falta de evidência e carência contratual genérica de 180 dias.
                  </div>
                </div>

                {/* After: Judicial Deferido */}
                <div className="bg-emerald-950/20 border border-emerald-500/20 p-4 rounded-xl flex flex-col gap-2">
                  <div className="flex justify-between items-center border-b border-emerald-500/10 pb-2">
                    <div className="flex items-center gap-1.5 text-emerald-400">
                      <Scale className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider font-mono">Decisão Deferida</span>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-300 italic">"{selectedCase.afterImgUrl}"</span>
                  <div className="text-[10px] text-emerald-300 leading-snug bg-emerald-950/50 p-2.5 rounded border border-emerald-500/10 mt-1">
                    Magistrado declarou nulidade absoluta da recusa administrativa e impôs multa liminar imediata.
                  </div>
                </div>

              </div>

              {/* Action buttons inside lightbox */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/5">
                <button
                  onClick={() => handleCTA(selectedCase.title)}
                  className="w-full sm:w-auto px-6 py-3 bg-brand-green hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded-lg cursor-pointer flex items-center justify-center gap-2 green-glow"
                >
                  <span>Analisar Meu Caso Similar via WhatsApp</span>
                </button>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="w-full sm:w-auto px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider rounded-lg cursor-pointer border border-white/5 text-center"
                >
                  Fechar Visualização
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
