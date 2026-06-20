import * as React from "react";
import { Check, Info, Heart, Award, Sparkles, Phone } from "lucide-react";
import { BRAND_INFO } from "../data";

export default function Products() {
  const handleCTA = (productName: string) => {
    const textQuery = encodeURIComponent(
      `Olá! Estava visualizando as soluções e gostaria de saber as condições para: ${productName}.`
    );
    window.open(`https://wa.me/5571981984595?text=${textQuery}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="produtos" className="py-24 bg-black relative">
      <div className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full bg-brand-gold/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Column */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-brand-gold tracking-widest uppercase">
            PLANOS DE ATENDIMENTO
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase mt-3">
            Nossas Soluções Jurídicas
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4"></div>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base mt-4 leading-relaxed">
            Oferecemos modelos de assessoria transparentes e em total conformidade com a tabela ética de honorários advocatícios da OAB - Seccional Bahia. Escolha o serviço ideal para o seu momento:
          </p>
        </div>

        {/* Pricing/Solutions Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Solution 1: Pre-diagnóstico */}
          <div className="relative p-8 rounded-2xl bg-zinc-950/90 border border-white/5 flex flex-col justify-between hover:border-white/10 transition-colors">
            <div>
              <div className="flex justify-between items-start gap-4 mb-3">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Etapa 01</span>
                <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-500/10">Recomendado</span>
              </div>
              
              <h3 className="font-display font-extrabold text-lg text-white mb-2">Triagem e Pré-Análise</h3>
              <p className="text-xs text-slate-400 mb-6 font-medium leading-relaxed">
                Estudo de viabilidade documental dos laudos e prontuários médicos sem qualquer encargo prévio.
              </p>

              <div className="mb-6 font-display">
                <span className="block text-slate-500 text-xs font-mono uppercase">Preço Especial</span>
                <span className="text-2xl font-bold text-white tracking-tight">Análise Gratuita</span>
              </div>

              <div className="h-px bg-white/5 w-full my-6"></div>

              <ul className="space-y-3.5 text-xs text-slate-300">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>Leitura do laudo do médico assistente</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>Enquadramento nas regras da ANS</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>Análise de jurisprudência baiana</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleCTA("Triagem e Pré-Análise Gratuita")}
              className="mt-8 w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer text-center"
            >
              Iniciar Análise Livre
            </button>
          </div>

          {/* Solution 2: Ação Liminar Urgente (Primary) */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-b from-zinc-950 to-neutral-900 border-2 border-brand-gold/60 flex flex-col justify-between gold-glow">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-gold text-black font-extrabold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
              ★ Plantão Urgência 24h
            </div>

            <div className="mt-2">
              <div className="flex justify-between items-start gap-4 mb-3">
                <span className="text-xs font-mono text-brand-gold uppercase tracking-widest font-bold">Etapa 02</span>
                <span className="text-[10px] uppercase font-bold text-black bg-brand-gold px-2.5 py-0.5 rounded">Foco Salvamento</span>
              </div>
              
              <h3 className="font-display font-extrabold text-lg text-white mb-2">Pedido Judicial de Liminar</h3>
              <p className="text-xs text-slate-300 mb-6 font-medium leading-relaxed">
                Ajuizamento emergencial protocolado em até 6 horas com pedido de plantão para liberação cirúrgica imediata.
              </p>

              <div className="mb-6 font-display">
                <span className="block text-brand-gold text-xs font-mono uppercase tracking-wider font-bold">Condição Promocional</span>
                <span className="text-2xl font-black text-white tracking-tight">Consulte Condições</span>
                <span className="block text-[10px] text-slate-400 mt-1">Parcelamento viabilizado e facilitado</span>
              </div>

              <div className="h-px bg-brand-gold/15 w-full my-6"></div>

              <ul className="space-y-3.5 text-xs text-slate-200">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <strong className="text-white">Ajuizamento em regime de plantão</strong>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>Fixação de multa horária contra o plano</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>Acompanhamento direto com diretores civis</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>Suporte telefônico prioritário à família</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleCTA("Pedido Judicial de Liminar Urgente")}
              className="mt-8 w-full py-4 bg-brand-gold hover:bg-brand-gold-dark text-black font-extrabold rounded-lg text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-lg shadow-brand-gold/10 hover:shadow-brand-gold/30 text-center"
            >
              Garantir Liminar Urgente
            </button>
          </div>

          {/* Solution 3: Reembolso Integral */}
          <div className="relative p-8 rounded-2xl bg-zinc-950/90 border border-white/5 flex flex-col justify-between hover:border-white/10 transition-colors">
            <div>
              <div className="flex justify-between items-start gap-4 mb-3">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Etapa 03</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 bg-white/5 px-2.5 py-0.5 rounded">Tributário/Civil</span>
              </div>
              
              <h3 className="font-display font-extrabold text-lg text-white mb-2">Reembolsos & Danos</h3>
              <p className="text-xs text-slate-400 mb-6 font-medium leading-relaxed">
                Cobrança judicial de despesas pagas em exames fora da rede e indenização por danos morais da recusa de saúde.
              </p>

              <div className="mb-6 font-display">
                <span className="block text-slate-500 text-xs font-mono uppercase">Alinhado à OAB</span>
                <span className="text-2xl font-bold text-white tracking-tight">Com Base no Êxito</span>
                <span className="block text-[10px] text-slate-500 mt-1">Conforme tabela oficial ética</span>
              </div>

              <div className="h-px bg-white/5 w-full my-6"></div>

              <ul className="space-y-3.5 text-xs text-slate-300">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>Reembolso total das despesas médicas</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>Revisão de faturas e valores glosados</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <strong className="text-white">Danos morais por recusa indevida</strong>
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleCTA("Reembolsos e Danos Morais")}
              className="mt-8 w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer text-center"
            >
              Reivindicar Reembolso
            </button>
          </div>

        </div>

        {/* Ethical Disclaimer */}
        <div className="mt-12 text-center max-w-3xl mx-auto rounded-xl bg-white/[0.02] p-5 border border-white/5 flex gap-3 text-left">
          <Info className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            <strong>Informativo de Conformidade:</strong> Toda a assessoria oferecida pela Saraiva Advocacia segue as regências de publicidade informativa e de moderação exigidas pelo Código de Ética e Disciplina da OAB. Não oferecemos garantias absolutas de vitória em decisões judiciais, pois dependem da análise exclusiva do Poder Judiciário. Nós defendemos os interesses de pacientes com zelo ético e dedicação integral.
          </p>
        </div>

      </div>
    </section>
  );
}
