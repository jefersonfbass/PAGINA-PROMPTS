import { motion } from "motion/react";
import { ClipboardList, Smartphone, Sparkles } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Escolha um prompt",
    description: "Selecione um dos prompts prontos do pack"
  },
  {
    icon: Smartphone,
    title: "Cole no app de IA",
    description: "Use qualquer aplicativo de inteligência artificial"
  },
  {
    icon: Sparkles,
    title: "Gere sua foto",
    description: "Receba uma imagem de luxo com seu rosto em segundos"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-12 px-5 bg-luxury-black border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">
          Como funciona
        </h2>
        <p className="text-sm text-text-muted">
          Crie suas fotos de ostentação em 3 passos simples
        </p>
      </div>

      <div className="flex flex-col gap-8 max-w-md mx-auto">
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="flex items-start gap-4"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
              <step.icon className="w-6 h-6 text-gold" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold text-gold uppercase tracking-widest mb-1">Passo {i + 1}</span>
              <h3 className="text-lg font-bold text-white leading-tight mb-1">{step.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
