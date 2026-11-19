import { motion, useReducedMotion } from "framer-motion";
export default function SplitText({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom" aria-hidden>
          <motion.span className="inline-block" initial={reduce ? false : { y: "105%" }} animate={{ y: 0 }}
            transition={{ delay: delay + i * 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>{w}&nbsp;</motion.span>
        </span>
      ))}
    </span>
  );
}
