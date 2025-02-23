import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const AutoScrollCards = () => {
  const containerRef = useRef(null);
  const [cards, setCards] = useState(
    Array.from({ length: 10 }, (_, i) => `Card ${i + 1}`)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => [...prev.slice(1), prev[0]]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-96 w-64 overflow-hidden flex flex-col items-center">
      <motion.div
        ref={containerRef}
        className="flex flex-col gap-4"
        initial={{ y: 0 }}
        animate={{ y: [-50, 0, 50] }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="w-56 h-24 bg-blue-500 text-white flex items-center justify-center rounded-2xl shadow-lg"
            style={{
              opacity: index === 0 || index === cards.length - 1 ? 0.3 : 1,
            }}
          >
            {card}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AutoScrollCards;
