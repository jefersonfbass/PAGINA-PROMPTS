import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag } from "lucide-react";

interface Notification {
  id: number;
  name: string;
  location: string;
  plan: string;
  time: string;
}

const names = [
  "André S.", "Carlos M.", "Juliana F.", "Ricardo G.", "Mariana L.", 
  "Felipe T.", "Bárbara R.", "Gustavo P.", "Patrícia S.", "Lucas V.",
  "Fernanda B.", "Tiago A.", "Amanda C.", "Bruno M.", "Carla O."
];

const locations = [
  "São Paulo", "Rio de Janeiro", "Curitiba", "Belo Horizonte", "Brasília",
  "Porto Alegre", "Salvador", "Fortaleza", "Manaus", "Recife"
];

const plans = ["Pack Premium", "Pack Essencial"];

export default function PurchaseNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [counter, setCounter] = useState(0);

  const addNotification = useCallback(() => {
    const newNotification: Notification = {
      id: Date.now(),
      name: names[Math.floor(Math.random() * names.length)],
      location: locations[Math.floor(Math.random() * locations.length)],
      plan: Math.random() > 0.3 ? "Pack Completo" : "Pack Essencial",
      time: "agora mesmo"
    };

    setNotifications((prev) => [...prev, newNotification]);
    setCounter((c) => c + 1);

    // Remove notification after 3 seconds
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== newNotification.id));
    }, 3000);
  }, []);

  useEffect(() => {
    // Initial delay before first notification
    const initialDelay = setTimeout(() => {
      addNotification();
    }, 1500);

    // Random interval for subsequent notifications (8 seconds)
    const interval = setInterval(() => {
      addNotification();
    }, 8000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [addNotification]);

  return (
    <div className="fixed bottom-4 left-4 z-[999] pointer-events-none flex flex-col gap-3">
      <AnimatePresence>
        {notifications.map((n) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="flex items-center gap-3 bg-[#0B0B0B]/95 border border-[#F5C542]/30 p-2.5 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-md min-w-[240px]"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#F5C542]/20 blur-lg rounded-full" />
              <div className="relative w-8 h-8 bg-[#F5C542] rounded-full flex items-center justify-center border border-black/10">
                <ShoppingBag className="w-4 h-4 text-black" strokeWidth={2.5} />
              </div>
            </div>
            
            <div className="flex flex-col">
              <p className="text-[11px] text-white font-bold leading-tight">
                {n.name} <span className="text-white/40 font-medium whitespace-nowrap">de {n.location}</span>
              </p>
              <p className="text-[10px] text-[#F5C542] font-black uppercase tracking-wider mt-0.5">
                Adquiriu o {n.plan}
              </p>
              <p className="text-[8px] text-white/30 font-medium uppercase mt-0.5">
                {n.time}
              </p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
