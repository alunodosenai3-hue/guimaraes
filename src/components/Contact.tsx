import * as React from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldAlert } from "lucide-react";
import { BRAND_INFO } from "../data";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    issue: "plano_cirurgia",
    message: "",
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMsg("Por favor, preencha seu nome e número de telefone celular.");
      return;
    }
    setErrorMsg("");
    setSubmitted(true);
    // Simulate high-converting webhook or notification
    setTimeout(() => {
      // Re-trigger actual whatsapp callback link for maximum conversions
      const textQuery = encodeURIComponent(
        `Olá! Meu nome é ${formData.name}. Gostaria de falar com um advogado plantonista em Salvador sobre uma negativa judicial do meu plano de saúde. Urgência: ${formData.issue}. ${formData.message}`
      );
      window.open(`https://wa.me/5571981984595?text=${textQuery}`, "_blank", "noopener,noreferrer");
    }, 1800);
  };

  return (
    <section id="contatos" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-radial-[circle_400px_at_bottom_right,#150c00,transparent] opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Informational Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-brand-gold tracking-widest uppercase">
                FALE COMPROVADAMENTE COM UM ADVOGADO
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight uppercase mt-3 mb-6">
                Plantão De Triagem De Salvador
              </h2>
              <div className="w-16 h-1 bg-brand-gold mb-6"></div>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                Toda negligência médica perpetrada por operadora privada ou pelo SUS merece repúdio célere. Cadastre seu caso para obter uma assessoria jurídica imediata sem custos prévios.
              </p>

              {/* Direct links list */}
              <div className="space-y-6">
                
                {/* Phone */}
                <a
                  href={`tel:${BRAND_INFO.phoneRaw}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-zinc-950 border border-white/5 hover:border-brand-gold/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">Telefone Exclusivo</span>
                    <span className="block font-display font-bold text-white text-sm mt-0.5">{BRAND_INFO.phone}</span>
                    <span className="block text-[9px] text-slate-400 mt-0.5">Atendimento Direto com Advogado Plantonista</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-zinc-950 border border-white/5 hover:border-brand-gold/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider font-medium">Departamento Geral</span>
                    <span className="block font-display font-medium text-white text-sm mt-0.5">{BRAND_INFO.email}</span>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-950 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Endereço Oficial Sede</span>
                    <span className="block text-slate-300 text-xs mt-1 leading-relaxed">
                      {BRAND_INFO.address}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 text-slate-500 text-[10px] font-mono">
              <span>*Atendemos toda Salvador, Região Metropolitana e interior da Bahia com peticionamentos 100% eletrônicos no TJBA e TRF1.</span>
            </div>
          </div>

          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl glass-panel border border-brand-gold/15 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[4px] bg-brand-gold"></div>

              <h3 className="font-display font-extrabold text-xl text-white mb-2">
                Envie Seus Detalhes para Triagem
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Preencha o formulário rápido para que um advogado do núcleo de direito da saúde analise seus laudos e estabeleça contato imediatamente.
              </p>

              {submitted ? (
                /* Success view with countdown and auto opening redirection helper */
                <div className="py-12 px-4 text-center flex flex-col items-center gap-4 animate-[fadeIn_0.3s_ease_out]">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/40 text-brand-green border border-brand-green/35 flex items-center justify-center shadow-lg shadow-brand-green/10 mb-2">
                    <CheckCircle2 className="w-8 h-8 animate-pulse" />
                  </div>
                  <h4 className="font-display font-bold text-white text-lg">Solicitação Enviada com Sucesso!</h4>
                  <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
                    Estamos direcionando você neste momento para o nosso WhatsApp Plantonista oficial em Salvador para iniciar sua análise jurídica emergencial grátis.
                  </p>
                  <p className="text-[10px] text-brand-gold font-mono animate-pulse mt-4">
                    Abrindo chat seguro em instantes...
                  </p>
                </div>
              ) : (
                /* Active Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMsg && (
                    <div className="p-3.5 rounded-lg bg-red-950/30 border border-red-500/25 flex items-center gap-2.5 text-xs text-red-400 font-medium">
                      <ShieldAlert className="w-4.5 h-4.5 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div>
                    <label htmlFor="name-input" className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                      Nome Integral do Paciente ou Responsável
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ex: Aline Meireles Santos"
                      className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold/60 transition-colors placeholder:text-slate-600"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone-input" className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                        WhatsApp de Contato Urgente
                      </label>
                      <input
                        id="phone-input"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(71) 9 9999-9999"
                        className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold/60 transition-colors placeholder:text-slate-600"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="issue-select" className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                        Tipo de Negativa / Indicação
                      </label>
                      <select
                        id="issue-select"
                        name="issue"
                        value={formData.issue}
                        onChange={handleInputChange}
                        className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-[13px] text-sm text-white focus:outline-none focus:border-brand-gold/60 transition-colors"
                      >
                        <option value="plano_cirurgia">Negativa de Cirurgia Urgente</option>
                        <option value="medicamento_alto_custo">Medicamento de Alto Custo</option>
                        <option value="reducao_faixa_etaria">Reajuste Abusivo por Idade</option>
                        <option value="reembolso_direito">Reembolso Pago e Negado</option>
                        <option value="outros">Outros Abusos de Planos de Saúde / SUS</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message-area" className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                      Fale Resumidamente Sobre a Situação (Opcional)
                    </label>
                    <textarea
                      id="message-area"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Ex: O plano alegou estar em período de carência para autorizar a internação coronariana do meu pai no hospital em Salvador..."
                      rows={3}
                      className="w-full bg-black/60 border border-white/10 rounded-lg p-4 text-sm text-white focus:outline-none focus:border-brand-gold/60 transition-colors placeholder:text-slate-600"
                    ></textarea>
                  </div>

                  <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 text-[10px] text-slate-500 leading-relaxed font-sans">
                    Ao enviar esta triagem jurídica, você concorda com o envio imediato e seguro dessas informações sob os rigores do sigilo profissional advogado-cliente regulamentado pelo Estatuto da OAB.
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-gold hover:bg-brand-gold-dark text-black font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 transform active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Enviar Triagem & Entrar no Plantão</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
