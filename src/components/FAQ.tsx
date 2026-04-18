import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, MessageCircle } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-[15px] font-bold transition-colors ${isOpen ? 'text-[#F5C542]' : 'text-white'}`}>
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#F5C542]' : 'text-white/20'}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm text-[#BFBFBF] leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const faqs = [
  {
    question: "Como vou receber o acesso?",
    answer: "Após o pagamento, o acesso é enviado automaticamente."
  },
  {
    question: "Preciso saber editar fotos?",
    answer: "Não. É só copiar e colar os prompts."
  },
  {
    question: "Funciona no celular?",
    answer: "Sim, você pode fazer tudo direto do celular."
  },
  {
    question: "Preciso falar inglês?",
    answer: "Não. Os prompts já estão prontos para uso."
  },
  {
    question: "Em quanto tempo vejo resultado?",
    answer: "Em poucos segundos você já consegue gerar suas imagens."
  },
  {
    question: "Por quanto tempo terei acesso?",
    answer: "O acesso é imediato após a compra."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-5 bg-[#111111]">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight text-center">
            Dúvidas frequentes
          </h2>
        </div>

        <div className="bg-[#0B0B0B] border border-white/5 rounded-3xl p-6 md:p-8 shadow-2xl">
          {faqs.map((faq, index) => (
            <div key={index}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </div>
          ))}
        </div>

        {/* Bonus CTA below FAQ */}
        <div className="mt-16 flex flex-col items-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full max-w-[320px] py-5 bg-[#F5C542] text-black font-black text-sm uppercase tracking-widest rounded-2xl shadow-[0_10px_30px_rgba(245,197,66,0.3)] transition-all"
          >
            QUERO COMEÇAR AGORA
          </motion.button>
          <p className="mt-4 text-[10px] text-white/40 font-black uppercase tracking-[0.2em]">
            Acesso imediato após o pagamento
          </p>
        </div>
      </div>
    </section>
  );
}
