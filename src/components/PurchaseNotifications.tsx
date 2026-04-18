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
    }, 5000);

    // Random interval for subsequent notifications (18 seconds)
    const interval = setInterval(() => {
      addNotification();
    }, 18000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [addNotification]);

  return (
    <div className="fixed bottom-3 left-3 z-[999] pointer-events-none flex flex-col gap-1.5">
      <AnimatePresence>
        {notifications.map((n) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="flex items-center gap-2 bg-[#0B0B0B]/98 border border-[#F5C542]/40 p-1.5 pr-3 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          >
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-[#F5C542]/10 blur-md rounded-full" />
              <div className="relative w-6 h-6 bg-[#F5C542] rounded-full flex items-center justify-center border border-black/5">
                <ShoppingBag className="w-3 h-3 text-black" strokeWidth={3} />
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <p className="text-[9px] text-white font-bold leading-none">
                {n.name} <span className="text-white/30 font-medium">({n.location})</span>
              </p>
              <p className="text-[8.5px] text-[#F5C542] font-black uppercase tracking-tight mt-0.5">
                Adquiriu {n.plan}
              </p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
