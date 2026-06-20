import * as React from "react";
import { Sparkles, Zap, DollarSign, MessageCircleCode, CheckCircle2 } from "lucide-react";
import { BRAND_INFO } from "../data";

export default function Benefits() {
  const handleCTA = () => {
    const textQuery = encodeURIComponent(BRAND_INFO.whatsappMessage);
    window.open(`https://wa.me/5571981984595?text=${textQuery}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="beneficios" className="py-24 bg-zinc-950 relative">
      <div className="absolute inset-0 bg-radial-[circle_400px_at_bottom_left,#150f00,transparent] opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase">
            Benefícios Reais Do Método
            <span className="block text-brand-gold mt-1">Superando Negativas com Eficiência</span>
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4"></div>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base mt-4 leading-relaxed">
            Nossa atuação foi meticulosamente desenvolvida para resolver conflitos de saúde em tempo hábil para salvar vidas. Compreenda por que somos referência absoluta em Salvador:
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Transformação Real */}
          <div className="p-8 rounded-2xl bg-black/60 border border-white/5 hover:border-brand-gold/30 transition-all duration-300 md:col-span-1 flex flex-col justify-between group gold-glow-hover">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-3">
                Transformação Real & Imediata
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Diga adeus ao problema de <strong className="text-white">Negativa de cobertura de cirurgias, tratamentos ou fornecimento de medicamentos de alto custo pelo plano de saúde ou SUS</strong> com nossa metodologia jurídica inovadora totalmente alinhada à jurisprudência baiana.
              </p>
            </div>
            <span className="text-[10px] uppercase tracking-wider text-brand-gold font-bold">Proteção integral garantida</span>
          </div>

          {/* Tecnologia e Praticidade */}
          <div className="p-8 rounded-2xl bg-black/60 border border-white/5 hover:border-brand-gold/30 transition-all duration-300 md:col-span-1 flex flex-col justify-between group gold-glow-hover">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-3">
                Tecnologia & Praticidade Absoluta
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Resultados de liminares <strong className="text-white">até 3x mais rápidos</strong> por meio da digitalização de processos e do suporte personalizado direto de Salvador, com acompanhamento de prazos junto a prepostos e diretores clínicos.
              </p>
            </div>
            <span className="text-[10px] uppercase tracking-wider text-brand-gold font-bold">Respostas em menos de 24h</span>
          </div>

          {/* Custo-Benefício Imbatível */}
          <div className="p-8 rounded-2xl bg-black/60 border border-white/5 hover:border-brand-gold/30 transition-all duration-300 md:col-span-1 flex flex-col justify-between group gold-glow-hover">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-3">
                Custo-Benefício Altamente Acessível
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Sua vida não tem preço. De uma taxa inicial sob consulta para <strong className="text-white">pequenos pagamentos parcelados</strong> sob condições customizadas para viabilizar o ajuizamento, garantindo que o fator financeiro nunca bloqueie o direito ao seu tratamento.
              </p>
            </div>
            <span className="text-[10px] uppercase tracking-wider text-brand-gold font-bold">Consulte condições flexíveis</span>
          </div>

          {/* Acompanhamento Premium */}
          <div className="p-8 rounded-2xl bg-black/60 border border-white/5 hover:border-brand-gold/30 transition-all duration-300 md:col-span-1 flex flex-col justify-between group gold-glow-hover">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform">
                <MessageCircleCode className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-3">
                Acompanhamento Premium e Humanizado
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Sua família amparada por uma <strong className="text-white">equipe dedicada para mitigar dúvidas via WhatsApp</strong> em tempo real. Fornecemos boletins diários do andamento processual com total confidencialidade de laudos médicos.
              </p>
            </div>
            <span className="text-[10px] uppercase tracking-wider text-brand-gold font-bold">Suporte direto com advogados</span>
          </div>

        </div>

        {/* Dynamic callout in benefits */}
        <div className="mt-16 text-center max-w-xl mx-auto rounded-xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 p-6 border border-white/5 relative overflow-hidden flex flex-col sm:flex-row items-center gap-4 justify-between">
          <div className="flex gap-3 items-center text-left">
            <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0" />
            <span className="text-xs text-slate-300">Prefere falar agora com um especialista de Salvador sobre seu caso?</span>
          </div>
          <button
            onClick={handleCTA}
            className="px-4 py-2 bg-brand-green hover:bg-emerald-600 text-white font-bold rounded text-xs uppercase tracking-wider cursor-pointer"
          >
            Quero Falar Agora
          </button>
        </div>

      </div>
    </section>
  );
}
