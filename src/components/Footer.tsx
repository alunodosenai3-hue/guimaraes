import * as React from "react";
import { ArrowUp, Scale, Heart, ShieldCheck } from "lucide-react";
import { BRAND_INFO } from "../data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper Column: quick links and legal logo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/5">
          
          {/* Logo and OAB */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded bg-brand-gold flex items-center justify-center text-black">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-display text-lg font-black tracking-tight text-white leading-none">
                  SARAIVA
                </span>
                <span className="block text-[8px] font-mono tracking-widest text-brand-gold font-bold uppercase mt-0.5">
                  ADVOCACIA DA SAÚDE
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mt-3">
              Assessoria Jurídica de saúde voltada ao amparo célere de pessoas físicas lesionadas administrativa ou criminalmente de forma unilateral por planos de saúde privados ou SUS.
            </p>

            <div className="mt-4 flex gap-3 text-slate-500 font-mono text-[10px]">
              <span>OAB/BA 48.912</span>
              <span>•</span>
              <span>CNPJ {BRAND_INFO.cnpj}</span>
            </div>
          </div>

          {/* Quick links block */}
          <div>
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider mb-4">
              Atuação Prioritária
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-400">
              <li>
                <a href="#servicos" className="hover:text-brand-gold transition-colors">Liminares 24h</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-brand-gold transition-colors">Medicamentos de Alto Custo</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-brand-gold transition-colors">Ajustes Abusivos de Faixa Etária</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-brand-gold transition-colors">Reembolsos de Planos</a>
              </li>
            </ul>
          </div>

          {/* Contact shortcuts */}
          <div>
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider mb-4">
              Sede Salvador
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed mb-3">
              Salvador Trade Center, Torre Norte, Caminho das Árvores
            </p>
            <p className="text-brand-gold text-xs font-mono font-bold">
              {BRAND_INFO.phone}
            </p>
            <p className="text-slate-500 text-xs font-mono mt-1">
              {BRAND_INFO.email}
            </p>
          </div>

        </div>

        {/* Lower Column: ethical and copy compliance statements */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="block text-slate-500 text-[10px] uppercase font-mono tracking-wider">
              {new Date().getFullYear()} © SARAIVA ADVOCACIA DA SAÚDE — TODOS OS DIREITOS RESERVADOS.
            </span>
            <span className="block text-slate-600 text-[9px] mt-1 font-sans">
              Desenvolvido com amparo nas normativas de publicidade profissional informativa do Código de Ética e Disciplina da OAB.
            </span>
          </div>

          {/* Trigger to top */}
          <button
            onClick={scrollToTop}
            className="p-3 bg-white/5 hover:bg-brand-gold hover:text-black rounded-lg border border-white/5 transition-all text-slate-400 cursor-pointer flex items-center justify-center"
            title="Voltar ao Topo"
            aria-label="Voltar para o topo da página"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
