import { useEffect, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ThreeBackground from "./components/ThreeBackground";
import Topbar from "./components/Topbar";
import MenuOverlay from "./components/MenuOverlay";
import Preloader from "./components/Preloader";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ready, setReady] = useState(false);

  const reduceMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  useEffect(() => {
    if (!ready) return;

    if (!reduceMotion) {
      gsap.fromTo(
        ".panel, .card, .hero-card",
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.06, ease: "power3.out" }
      );

      const items = gsap.utils.toArray(".panel, .card");
      items.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 86%" },
          }
        );
      });
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [ready, reduceMotion]);

  return (
    <>
      <ThreeBackground reduceMotion={reduceMotion} />

      <AnimatePresence>
        {!ready && <Preloader onDone={() => setReady(true)} />}
      </AnimatePresence>

      {ready && (
        <>
          <Topbar onOpenMenu={() => setMenuOpen(true)} />
          <AnimatePresence>
            {menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}
          </AnimatePresence>

          <main style={{ position: "relative", zIndex: 1 }}>
            <Hero />
            <div className="ticker" role="presentation" aria-hidden="true">
              <div className="ticker-track">
                {(() => {
                  const t = "REACT · FLUTTERFLOW · THREE.JS · GSAP · FRAMER MOTION · NODE.JS · UI/UX · FIGMA · MOTION DESIGN · PERFORMANCE · MOBILE FIRST · CLEAN CODE · ";
                  return t + t;
                })()}
              </div>
            </div>
            <About />
            <Work />
            <Contact />
            <Footer />
          </main>
        </>
      )}
    </>
  );
}
