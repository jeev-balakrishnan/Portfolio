import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import Nav from "@/components/Nav";
import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import Grain from "@/components/Grain";
import Home from "@/pages/Home";
import Placeholder from "@/pages/Placeholder";

export default function App() {
  const [ready, setReady] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.2 });
    let id = requestAnimationFrame(function raf(t) { lenis.raf(t); id = requestAnimationFrame(raf); });
    return () => { cancelAnimationFrame(id); lenis.destroy(); };
  }, []);
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);
  return (
    <>
      {!ready && <Loader onDone={() => setReady(true)} />}
      <Grain /><Cursor /><Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Placeholder title="About" stage="Stage 3" />} />
          <Route path="/work" element={<Placeholder title="Work" stage="Stage 3" />} />
          <Route path="/skills" element={<Placeholder title="Skills" stage="Stage 3" />} />
          <Route path="/experience" element={<Placeholder title="Experience" stage="Stage 3" />} />
          <Route path="/contact" element={<Placeholder title="Contact" stage="Stage 3" />} />
          <Route path="/admin/*" element={<Placeholder title="Admin" stage="Stage 4" />} />
          <Route path="*" element={<Placeholder title="Not found" stage="n/a" />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
