import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const fine = typeof window !== "undefined" && window.matchMedia("(hover:hover) and (pointer:fine)").matches;
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40 }), sy = useSpring(y, { stiffness: 500, damping: 40 });
  const [big, setBig] = useState(false);
  useEffect(() => {
    if (!fine) return;
    document.body.classList.add("has-cursor");
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); setBig(!!(e.target as HTMLElement).closest("a,button,[data-hover]")); };
    window.addEventListener("mousemove", move);
    return () => { window.removeEventListener("mousemove", move); document.body.classList.remove("has-cursor"); };
  }, [fine, x, y]);
  if (!fine) return null;
  return (
    <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[70] rounded-full border border-gold"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{ width: big ? 64 : 14, height: big ? 64 : 14, backgroundColor: big ? "rgba(197,164,109,.12)" : "rgba(197,164,109,1)" }}
      transition={{ duration: 0.25 }} />
  );
}
