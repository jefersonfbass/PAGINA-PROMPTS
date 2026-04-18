import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Timer } from "lucide-react";

export default function UrgencyBar() {
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-[#F5C542] py-2 px-4 sticky top-0 z-[100] shadow-[0_4px_20px_rgba(245,197,66,0.3)] border-b border-black/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 md:gap-4">
        <p className="text-black font-black text-[10px] md:text-[11px] uppercase tracking-widest flex items-center gap-2 whitespace-nowrap">
          <span className="hidden md:inline">⚠️</span> OFERTA POR TEMPO LIMITADO
        </p>
        <div className="h-4 w-px bg-black/20 hidden md:block" />
        <div className="flex items-center gap-1.5 bg-black/10 px-2 py-0.5 rounded-full">
          <Timer className="w-3 h-3 text-black" />
          <span className="text-black font-black text-[11px] tabular-nums">
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
