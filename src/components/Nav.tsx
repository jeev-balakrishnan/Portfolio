import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import type { NavItem } from "@/types";

const items: NavItem[] = [
  { label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Work", to: "/work" },
  { label: "Skills", to: "/skills" }, { label: "Experience", to: "/experience" }, { label: "Contact", to: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 md:px-12">
      <Link to="/" className="relative z-10 font-display text-2xl text-paper" onClick={() => setOpen(false)}>Jeevanantham B.</Link>
      <button aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)} className="relative z-10 text-sm text-paper">
        {open ? "Close" : "Menu"}
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav id="menu" className="fixed inset-0 flex flex-col justify-center bg-ink px-6 md:px-12"
            initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}>
            {items.map((it, i) => (
              <div key={it.to} className="overflow-hidden">
                <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ delay: 0.25 + i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
                  <NavLink to={it.to} onClick={() => setOpen(false)}
                    className={({ isActive }) => `block font-display text-5xl leading-[1.15] transition-colors hover:text-gold md:text-7xl ${isActive ? "text-gold" : "text-paper"}`}>
                    {it.label}
                  </NavLink>
                </motion.div>
              </div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
