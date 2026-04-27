import { motion } from "motion/react";
import { Check, Star, Zap } from "lucide-react";
import { useState } from "react";
import UpgradeModal from "./UpgradeModal";

const plans = [
  {
    id: "essencial",
    name: "Pack Essencial",
    price: "10,00",
    description: "Comece com o básico",
    features: [
      "320 Prompts de Ostentação",
      "Fotos variadas de ostentação",
      "Cenários de alto padrão",
      "Fácil de usar"
    ],
    highlight: false,
    checkoutUrl: "https://checkout.compraragora.site/VCCL1O8SD00H",
    buttonText: "QUERO COMEÇAR"
  },
  {
    id: "completo",
    name: "Pack Completo",
    price: "17,00",
    description: "Versão ideal para profissionais",
    badge: "MAIS ESCOLHIDO",
    checkoutUrl: "https://checkout.compraragora.site/VCCL1O8SD00R",
    features: [
      "650 Prompts de Ostentação",
      "Mais cenários e variações",
      "Resultados mais realistas",
      "Prompts mais refinados",
      "Atualizações futuras de prompts",
      "Só copiar e colar"
    ],
    bonus: [
      "Guia rápido de resultados",
      "Lista de apps recomendados",
      "Prompts exclusivos"
    ],
    highlight: true,
    buttonText: "QUERO O COMPLETO"
  }
];

export default function PlanSelection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlanClick = (plan: any) => {
    if (plan.id === "essencial") {
      setIsModalOpen(true);
    } else if (plan.checkoutUrl) {
      window.location.href = plan.checkoutUrl;
    }
  };

  return (
    <section id="plans" className="relative py-24 px-5 bg-gradient-to-b from-[#0B0B0B] to-[#1A1A1A] overflow-hidden">
      <UpgradeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onContinueBasic={() => {
          window.location.href = "https://checkout.compraragora.site/VCCL1O8SD00H";
        }}
      />
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/5 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-white uppercase tracking-tight mb-3"
          >
            Escolha seu acesso
          </motion.h2>
          <p className="text-sm text-white/40 font-bold uppercase tracking-widest">
            Comece com o básico ou libere a versão completa
          </p>
        </div>

        {/* Centralized Container for Plans */}
        <div className="bg-[#0F0F0F] border border-[#F5C542]/20 rounded-[40px] p-6 md:p-16 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-stretch justify-center">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col w-full max-w-[360px] p-8 md:p-10 rounded-[32px] transition-all duration-500 overflow-hidden ${
                  plan.highlight 
                    ? "bg-[#141414] border-2 border-[#F5C542] shadow-[0_15px_60px_rgba(245,197,66,0.12)] md:scale-105 z-20 pt-14" 
                    : "bg-[#111] border border-white/5 z-10"
                }`}
              >
                {/* Special Top Bar for Highlighted Plan */}
                {plan.highlight && (
                  <div className="absolute top-0 left-0 w-full bg-[#F5C542] py-2.5 text-center">
                    <span className="text-[10px] font-black text-black uppercase tracking-[0.25em]">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-8 text-center md:text-left">
                  <h3 className={`text-2xl font-black uppercase tracking-tight mb-2 ${plan.highlight ? 'text-[#F5C542]' : 'text-white'}`}>
                    {plan.name}
                  </h3>
                  <p className="text-[11px] text-white/40 font-black uppercase tracking-widest">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-10 text-center md:text-left">
                  <div className="flex items-baseline justify-center md:justify-start gap-1">
                    <span className="text-sm font-black text-white/50">R$</span>
                    <span className="text-6xl font-black text-white tracking-tighter">{plan.price.split(',')[0]}</span>
                    <span className="text-2xl font-black text-white/50">,{plan.price.split(',')[1]}</span>
                  </div>
                </div>

                <div className="space-y-5 mb-10 flex-1">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? 'bg-[#F5C542]/10' : 'bg-white/5'}`}>
                        <Check className={`w-3 h-3 ${plan.highlight ? 'text-[#F5C542]' : 'text-white/60'}`} />
                      </div>
                      <span className="text-[15px] text-white/70 font-medium leading-tight">{feature}</span>
                    </div>
                  ))}

                  {plan.bonus && (
                    <div className="pt-6 border-t border-white/5 space-y-5">
                      <p className="text-[10px] font-black text-[#F5C542] uppercase tracking-[0.3em]">Bônus Exclusivos</p>
                      {plan.bonus.map((b, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="mt-0.5 w-5 h-5 rounded-full bg-[#F5C542]/20 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(245,197,66,0.2)]">
                            <Star className="w-2.5 h-2.5 text-[#F5C542] fill-[#F5C542]" />
                          </div>
                          <span className="text-[15px] text-[#F5C542] font-bold leading-tight italic">{b}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handlePlanClick(plan)}
                  className={`w-full py-5 rounded-2xl font-black text-[15px] uppercase tracking-widest transition-all active:scale-95 ${
                    plan.highlight 
                      ? "bg-[#F5C542] text-black shadow-[0_10px_25px_rgba(245,197,66,0.25)] hover:shadow-[0_15px_30px_rgba(245,197,66,0.4)]"
                      : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                  }`}
                >
                  {plan.buttonText}
                </button>

                {plan.highlight && (
                  <div className="mt-6 flex items-center justify-center gap-2 text-white/20">
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    <span className="text-[10px] font-black uppercase tracking-widest italic">Acesso Vitalício Garantido</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Guarantee Seal */}
        <div className="mt-12 flex justify-center">
          <img 
            src="https://i.ibb.co/YFWpcrV0/selo-garantia-200x200-7-2.png" 
            alt="Garantia de 7 dias" 
            className="w-40 h-auto md:w-48 transition-all hover:scale-110 duration-500"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            width="200"
            height="200"
          />
        </div>
      </div>
    </section>
  );
}

