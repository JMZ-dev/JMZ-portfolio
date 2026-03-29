import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function Preloader({ onDone }) {
  const barRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setTimeout(() => onDone?.(), 120),
    });

    tl.to(barRef.current, { width: "100%", duration: 1.05, ease: "power2.out" })
      .to(".preloader", { opacity: 0, duration: 0.35, ease: "power2.out" }, "+=0.05");

    return () => tl.kill();
  }, [onDone]);

  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "grid",
        placeItems: "center",
        background: "var(--bg)",
      }}
    >
      <div className="panel" style={{ width: "min(560px, 92vw)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div>
            <div className="mono" style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase" }}>System boot</div>
            <div className="small">Loading 3D scene + motion layers...</div>
          </div>
          <div className="brand-badge" aria-hidden="true">MZ</div>
        </div>

        <div style={{ marginTop: 14, height: 3, border: "1px solid rgba(255,255,255,0.10)", overflow: "hidden", background: "rgba(255,255,255,0.03)" }}>
          <div ref={barRef} style={{ height: "100%", width: "0%", background: "var(--accent)", boxShadow: "0 0 12px rgba(179,255,0,0.6)" }} />
        </div>
      </div>
    </motion.div>
  );
}
