import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import SplitText from "@/components/SplitText";
import PageTransition from "@/components/PageTransition";
import { useProfile } from "@/hooks/useProfile";

export default function Home() {
  const { profile } = useProfile();
  const { scrollY } = useScroll();
  const drift = useTransform(scrollY, [0, 800], [0, -120]);
  useEffect(() => { document.title = `${profile.name} — ${profile.tagline}`; }, [profile]);
  return (
    <PageTransition>
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-16 md:px-12">
        <motion.div style={{ y: drift }} aria-hidden className="pointer-events-none absolute right-[-10%] top-[12%] h-[60vmin] w-[60vmin] rounded-full border border-bronze/40" />
        <motion.div style={{ y: drift }} aria-hidden className="pointer-events-none absolute right-[2%] top-[20%] h-[40vmin] w-[40vmin] rounded-full border border-gold/20" />
        <h1 className="font-display text-[15vw] leading-[0.9] md:text-[11vw]">
          <SplitText text={profile.name} delay={2.1} />
        </h1>
        <p className="mt-6 max-w-xl text-lg text-mute">{profile.tagline}. {profile.intro}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/work" className="border border-gold bg-gold px-8 py-3 text-ink transition hover:bg-transparent hover:text-gold">View portfolio</Link>
          <Link to="/contact" className="border border-bronze px-8 py-3 transition hover:border-gold hover:text-gold">Contact me</Link>
        </div>
      </section>
    </PageTransition>
  );
}
