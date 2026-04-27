import { motion, AnimatePresence } from "motion/react";
import { X, Star, Zap, ShoppingCart } from "lucide-react";

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinueBasic: () => void;
}

export default function UpgradeModal({ isOpen, onClose, onContinueBasic }: UpgradeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-[480px] bg-[#0F0F0F] border border-[#F5C542]/30 rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8 md:p-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-[#F5C542]/10 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-[#F5C542] fill-[#F5C542]" />
                </div>

                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4 leading-tight">
                  ⚠️ Espera um segundo...
                </h2>

                <p className="text-[15px] text-white/70 leading-relaxed mb-6 font-medium">
                  Já que você está prestes a pegar o plano básico, você pode liberar o 
                  <span className="text-white font-black italic"> pack completo </span> 
                  com mais que o dobro de prompts e resultados ainda mais realistas.
                </p>

                <div className="bg-white/5 border border-white/5 rounded-2xl p-4 w-full mb-8">
                  <div className="flex items-start gap-3 text-left">
                    <Star className="w-5 h-5 text-[#F5C542] fill-[#F5C542] shrink-0 mt-0.5" />
                    <p className="text-[13px] text-[#F5C542] font-bold uppercase tracking-widest leading-snug">
                      Mais cenários, mais variações e mais impacto nas suas fotos
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex flex-col items-center">
                    <span className="text-[12px] text-white/30 line-through font-bold mb-1">De R$ 17,00</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-[18px] font-black text-[#F5C542]">R$</span>
                      <span className="text-[44px] font-[1000] text-[#F5C542] tracking-tighter leading-none">14,90</span>
                    </div>
                    <span className="text-[9px] font-black text-[#F5C542] uppercase tracking-[0.2em] mt-2 bg-[#F5C542]/10 px-3 py-1 rounded-full">
                      Oferta exclusiva aqui
                    </span>
                  </div>
                </div>

                <div className="w-full space-y-4">
                  <button
                    onClick={() => {
                      window.location.href = "https://checkout.compraragora.site/VCCL1O8SD00S";
                    }}
                    className="w-full py-5 bg-[#F5C542] text-black rounded-2xl font-black text-[15px] uppercase tracking-widest shadow-[0_10px_30px_rgba(245,197,66,0.3)] hover:shadow-[0_15px_40px_rgba(245,197,66,0.5)] transition-all active:scale-95 flex items-center justify-center gap-3"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    QUERO O COMPLETO COM DESCONTO
                  </button>

                  <button
                    onClick={onContinueBasic}
                    className="text-[13px] text-white/30 font-bold uppercase tracking-widest hover:text-white/60 transition-colors py-2"
                  >
                    Continuar com o básico
                  </button>
                </div>

                <p className="mt-8 text-[11px] text-white/20 font-bold italic">
                  "A maioria aproveita essa oferta para liberar o completo"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
