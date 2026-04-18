import { CheckCircle2, Smartphone, Zap, Sparkles, LayoutGrid, RefreshCcw } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  { icon: Sparkles, text: "Não precisa saber editar" },
  { icon: Smartphone, text: "Funciona no celular" },
  { icon: Zap, text: "Resultados em segundos" },
  { icon: LayoutGrid, text: "Use em qualquer app de IA" }
];

const categories = [
  { title: "Luxo", description: "Carros, relógios, mansões e joias." },
  { title: "Viagens", description: "Jatos, iates e destinos exclusivos." },
  { title: "Lifestyle", description: "Restaurantes e eventos VIP." },
  { title: "Empresarial", description: "Escritórios e reuniões de alto nível." }
];

export default function Benefits() {
  return (
    <section className="py-3 px-5 bg-luxury-black">
      <div className="text-center mb-6">
        <h2 className="text-[13px] font-bold text-white mb-4">
          +320 Prompts Prontos
        </h2>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full py-4 bg-gradient-to-r from-[#f8d478] via-[#b8860b] to-[#f8d478] text-black font-black text-sm uppercase tracking-widest rounded-lg shadow-[0_0_20px_rgba(184,134,11,0.4)] border border-white/20"
        >
          Quero Acesso Imediato
        </motion.button>
      </div>
    </section>
  );
}
