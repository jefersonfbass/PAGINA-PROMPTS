import { Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Rafael - RJ",
    text: "Mano, que isso ? Nem eu acreditei quando vi a foto pronta, ficou bom demais 😂 Simplesmente funciona",
    image: "https://i.ibb.co/JjdKCMzB/f68665ae381c65f49d4846dd7a48b1aa.jpg"
  },
  {
    name: "Thiago - RJ",
    text: "Qualidade sinistra. Achei que ia ficar fake, mas ficou muito real. Vale a pena.",
    image: "https://i.ibb.co/bMdQyf5g/9ea2efb70af576f31086b6040fe9e4df.jpg"
  },
  {
    name: "Lucas - SP",
    text: "Simplesmente funciona. Copiou, colou, saiu foto top. Qualidade alta mesmo.",
    image: "https://i.ibb.co/q3gC8TF8/82af2ebb8d83155abef7cec2d047a86e.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-24 px-5 overflow-hidden border-y border-white/5 bg-[#0d0d0d]">
      {/* Subtle background detail */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,_rgba(184,134,11,0.03)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Social Proof Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-gold text-gold" />
            ))}
          </div>
          <span className="text-[11px] font-bold text-white/80 uppercase tracking-widest">+1.000 pessoas já testaram</span>
        </motion.div>

        <h2 className="text-2xl font-black text-white mb-12 uppercase tracking-tight">
          Resultados reais de quem já testou
        </h2>
      </div>
      
      <div className="relative max-w-4xl mx-auto z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-[#161616] border border-white/5 shadow-2xl flex flex-col items-center text-center"
          >
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-gold/20 p-1">
              <img 
                src={t.image} 
                alt={t.name} 
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                width="64"
                height="64"
              />
            </div>

            {/* Stars */}
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-sm text-white/80 leading-relaxed font-medium mb-6">
              "{t.text}"
            </p>

            {/* Author Name */}
            <div className="mt-auto">
              <h3 className="text-xs font-black text-gold uppercase tracking-widest">{t.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Button After Testimonials */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative z-10 mt-8 flex flex-col items-center px-4"
      >
        <button 
          onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full max-w-[320px] bg-btn-bg hover:bg-gold text-black font-[900] text-[16px] py-[18px] rounded-lg uppercase tracking-tight transition-all shadow-[0_8px_25px_rgba(255,204,0,0.3)] border-none cursor-pointer active:scale-95"
        >
          LIBERAR MEU ACESSO
        </button>
        <p className="mt-3 text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">
          Acesso imediato após o pagamento
        </p>
      </motion.div>
    </section>
  );
}
