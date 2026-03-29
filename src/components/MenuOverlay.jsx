import { motion } from "framer-motion";

const overlay = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.22 } },
  exit: { opacity: 0, transition: { duration: 0.18 } },
};

const panel = {
  hidden: { y: 18, opacity: 0, scale: 0.98 },
  show: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.28, ease: "easeOut" } },
  exit: { y: 10, opacity: 0, scale: 0.98, transition: { duration: 0.18 } },
};

export default function MenuOverlay({ onClose }) {
  const jump = (hash) => {
    onClose?.();
    setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 40);
  };

  return (
    <motion.div className="modal-backdrop" variants={overlay} initial="hidden" animate="show" exit="exit">
      <motion.div className="modal" variants={panel}>
        <div className="modal-top">
          <div>
            <div className="mono" style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase" }}>
              System menu
            </div>
            <div className="small">Quick routes • Smooth transitions</div>
          </div>
          <button className="btn" onClick={onClose}>Close ✕</button>
        </div>

        <div className="menu-grid">
          <a className="panel mono" href="#top" onClick={(e) => (e.preventDefault(), jump("#top"))}>HOME // SYSTEM_INIT</a>
          <a className="panel mono" href="#about" onClick={(e) => (e.preventDefault(), jump("#about"))}>STACK // PRODUCTION</a>
          <a className="panel mono" href="#work" onClick={(e) => (e.preventDefault(), jump("#work"))}>WORK // DEPLOYMENTS</a>
          <a className="panel mono" href="#contact" onClick={(e) => (e.preventDefault(), jump("#contact"))}>CONTACT // LINK_UP</a>
        </div>
      </motion.div>
    </motion.div>
  );
}
