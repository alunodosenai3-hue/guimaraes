import * as React from "react";
import { ShieldCheck, ArrowRight, Activity, Calendar, AlertTriangle } from "lucide-react";
import { BRAND_INFO } from "../data";

export default function Hero() {
  // 15 minutes in milliseconds = 15 * 60 * 1000 = 900,000 ms
  const INITIAL_TIME_MS = 15 * 60 * 1000;
  const [timeLeft, setTimeLeft] = React.useState(INITIAL_TIME_MS);
  
  React.useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const updateTimer = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;

      setTimeLeft((prev) => {
        if (prev <= delta) {
          // Restart intelligently when reaching zero to prevent losing clients
          return INITIAL_TIME_MS;
        }
        return prev - delta;
      });

      animationFrameId = requestAnimationFrame(updateTimer);
    };

    animationFrameId = requestAnimationFrame(updateTimer);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Format Helper
  const getFormattedTime = () => {
    const minutes = Math.floor(timeLeft / 60000);
    const seconds = Math.floor((timeLeft % 60000) / 1000);
    const ms = Math.floor((timeLeft % 1000) / 10); // 2-digit ms

    const padStr = (num: number, target: number) => String(num).padStart(target, "0");
    return {
      minutes: padStr(minutes, 2),
      seconds: padStr(seconds, 2),
      ms: padStr(ms, 2),
    };
  };

  const { minutes, seconds, ms } = getFormattedTime();

  const handleCTA = () => {
    const textQuery = encodeURIComponent(BRAND_INFO.whatsappMessage);
    window.open(`https://wa.me/5571981984595?text=${textQuery}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:py-32">
      {/* Absolute high-end abstract golden lighting effect & grids */}
      <div className="absolute inset-0 bg-radial-[circle_800px_at_center_top,#0e0904,transparent] opacity-90 z-0"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-brand-green/5 blur-[100px] pointer-events-none"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 z-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        
        {/* Flag badge of high specialty */}
        <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/25 px-4 py-2 rounded-full text-xs md:text-sm text-brand-gold tracking-wide font-semibold mb-8 animate-pulse">
          <Activity className="w-4 h-4 text-brand-gold" />
          <span>ESPECIALISTAS EM DIREITO DE SAÚDE EM SALVADOR/BA</span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] max-w-5xl mx-auto mb-6">
          A Solução Definitiva para Obter a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-200 to-amber-400">
            Liberação Imediata
          </span>{" "}
          e Segura de Procedimentos Médicos Negados!
        </h1>

        {/* Subheadline */}
        <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-10">
          Superar a negativa de cobertura de cirurgias, tratamentos ou fornecimento de medicamentos de alto custo pelo plano de saúde ou SUS em Salvador/Bahia de forma rápida, segura e com suporte personalizado.
        </p>

        {/* URGENCY BANNER / TIMER REGRESSIVO */}
        <div className="max-w-xl mx-auto mb-10 p-5 rounded-2xl glass-panel border border-brand-gold/30 gold-glow relative overflow-hidden flex flex-col items-center">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-gold via-red-500 to-brand-gold"></div>
          
          <div className="flex items-center gap-2 text-rose-500 font-mono text-xs font-bold uppercase tracking-wider mb-3">
            <AlertTriangle className="w-4 h-4 animate-bounce" />
            <span>Plantão Extrajudicial de Urgência Ativo</span>
          </div>

          <p className="text-slate-300 text-xs md:text-sm font-semibold mb-4 text-center">
            Apenas para as próximas consultas. Fale agora e tenha uma análise gratuita de viabilidade jurídica:
          </p>

          <div className="flex gap-3 justify-center items-center">
            {/* Minutes */}
            <div className="flex flex-col items-center bg-black/60 border border-white/10 p-2.5 rounded-lg w-16 md:w-20 shadow-inner">
              <span className="font-mono text-2xl md:text-3xl font-bold tracking-tight text-brand-gold leading-none">
                {minutes}
              </span>
              <span className="text-[9px] uppercase tracking-wider text-slate-500 mt-1">Minutos</span>
            </div>

            <span className="font-mono text-2xl text-brand-gold animate-pulse">:</span>

            {/* Seconds */}
            <div className="flex flex-col items-center bg-black/60 border border-white/10 p-2.5 rounded-lg w-16 md:w-20 shadow-inner">
              <span className="font-mono text-2xl md:text-3xl font-bold tracking-tight text-brand-gold leading-none">
                {seconds}
              </span>
              <span className="text-[9px] uppercase tracking-wider text-slate-500 mt-1">Segundos</span>
            </div>

            <span className="font-mono text-xl text-red-500 animate-pulse">:</span>

            {/* Milliseconds */}
            <div className="flex flex-col items-center bg-red-950/20 border border-red-500/10 p-2.5 rounded-lg w-14 md:w-16 shadow-inner">
              <span className="font-mono text-xl md:text-2xl font-bold tracking-tight text-white leading-none">
                {ms}
              </span>
              <span className="text-[9px] uppercase tracking-wider text-red-400 mt-1">Milis</span>
            </div>
          </div>
        </div>

        {/* CALL TO ACTION BUTTON */}
        <div className="max-w-md mx-auto mb-10">
          <button
            onClick={handleCTA}
            className="w-full py-5 px-8 rounded-xl bg-brand-green hover:bg-emerald-500 text-white font-extrabold text-base md:text-lg tracking-wide uppercase shadow-[0_15px_30px_rgba(34,197,94,0.3)] hover:shadow-[0_20px_40px_rgba(34,197,94,0.5)] transition-all duration-300 transform hover:-translate-y-1 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-3 relative overflow-hidden group green-glow"
          >
            {/* Pulse flare animate overlay */}
            <span className="absolute inset-0 bg-white/25 transform -skew-x-12 -translate-x-full group-hover:animate-[shine_1s_ease-in-out_infinite]"></span>
            <span>{BRAND_INFO.ctaText}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="mt-4 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-brand-green" />
              Garantia do Sigilo Profissional da OAB
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Calendar className="w-4 h-4 text-brand-gold" />
              Atendimento 24 horas Urgente
            </span>
          </div>
        </div>

        {/* Visual trust pillars */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto text-left mt-16 sm:mt-20">
          <div className="p-4 bg-white/5 rounded-xl border border-white/5">
            <span className="block font-mono text-2xl font-extrabold text-brand-gold">99.2%</span>
            <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold mt-1">Casos de Sucesso</span>
          </div>
          <div className="p-4 bg-white/5 rounded-xl border border-white/5">
            <span className="block font-mono text-2xl font-extrabold text-brand-gold">24 Horas</span>
            <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold mt-1">Para Requerimento</span>
          </div>
          <div className="p-4 bg-white/5 rounded-xl border border-white/5">
            <span className="block font-mono text-2xl font-extrabold text-brand-gold">+12 Milhões</span>
            <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold mt-1">Economizados para Clientes</span>
          </div>
          <div className="p-4 bg-white/5 rounded-xl border border-white/5">
            <span className="block font-mono text-2xl font-extrabold text-brand-gold">100% Digital</span>
            <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold mt-1">Salvador e Todo o Brasil</span>
          </div>
        </div>

      </div>
    </section>
  );
}
