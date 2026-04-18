import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Zap, ChevronRight } from "lucide-react";

export default function Offer() {
  return (
    <section id="offer" className="mt-auto bg-card-bg p-5 border-t-2 border-gold text-center">
      <div className="mb-[10px]">
        <span className="text-text-muted line-through text-[12px] block">De R$ 97,00</span>
        <span className="text-[36px] font-[900] text-white leading-none block">R$ 7,90</span>
      </div>
      
      <Button className="w-full bg-btn-bg hover:bg-gold text-black font-[900] text-[16px] py-[15px] h-auto rounded-lg uppercase tracking-tight transition-all shadow-[0_4px_15px_rgba(255,204,0,0.3)] border-none cursor-pointer">
        LIBERAR MEU ACESSO AGORA
      </Button>
      
      <div className="flex items-center justify-center gap-1 mt-[10px] text-text-muted text-[10px]">
        <span>🛡️</span>
        <span>7 dias de garantia incondicional</span>
      </div>
      
      <div className="mt-4 text-[9px] text-[#444] uppercase tracking-widest">
        Acesso imediato • Checkout Seguro • 2024 Pack Luxo IA
      </div>
    </section>
  );
}
