import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";

const images = [
  "https://i.ibb.co/pv1kpXLS/29615c47366a30afc54d-2.png", // Moved 4th image to 1st position
  "https://i.ibb.co/21cf4583/55dc3c9a422d7a44ab6a-4.png",
  "https://i.ibb.co/BJJ3y15/23306df4a32769612472-3-1.png",
  "https://i.ibb.co/JjWJTNK3/b9717816eec534d90660-3.png",
  "https://i.ibb.co/v4PVtwR6/f42e82ffff208aadffe8-2.png"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Slightly slower for better readability
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative flex flex-col items-center justify-center pt-6 pb-[10px] overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center w-full max-w-4xl relative z-10 px-5"
      >
        <h1 className="text-[32px] font-[900] leading-none mb-1 text-gradient-gold">
          Pack Premium de<br />Prompts de Ostentação
        </h1>
        
        <p className="text-[14px] text-red-500 font-bold leading-[1.4] max-w-2xl mx-auto">
          Crie fotos de luxo com o seu rosto usando IA
        </p>
      </motion.div>

      {/* Full-Width Carousel Container */}
      <div className="relative w-full aspect-square -mt-4 mb-6 group touch-pan-y">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 overflow-hidden bg-black"
          >
            <img 
              src={images[currentIndex]} 
              alt={`Exemplo ${currentIndex + 1}`} 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
              decoding="async"
              fetchPriority={currentIndex === 0 ? "high" : "low"}
              width="800"
              height="800"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-gold w-4' : 'bg-white/30'}`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Discrete Arrows - Always visible but subtle */}
        <button 
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all z-20 border border-white/10"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all z-20 border border-white/10"
          aria-label="Próximo"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
