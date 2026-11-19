import { motion } from "framer-motion";
// The one orchestrated entrance: monogram draws in, then the curtain lifts.
export default function Loader({ onDone }: { onDone: () => void }) {
  return (
    <motion.div className="fixed inset-0 z-[80] grid place-items-center bg-ink" initial={{ y: 0 }}
      animate={{ y: "-100%" }} transition={{ delay: 1.7, duration: 0.9, ease: [0.76, 0, 0.24, 1] }} onAnimationComplete={onDone}>
      <div className="overflow-hidden">
        <motion.p className="font-display text-6xl text-gold md:text-8xl" initial={{ y: "110%" }} animate={{ y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>J.B.</motion.p>
      </div>
      <motion.div className="absolute bottom-[38%] h-px bg-bronze" initial={{ width: 0 }} animate={{ width: 160 }} transition={{ delay: 0.4, duration: 1 }} />
    </motion.div>
  );
}
