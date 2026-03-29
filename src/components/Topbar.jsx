import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { LangContext } from "../App.jsx";

const formatTime = (d) =>
  d.toLocaleTimeString("en-CA", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

export default function Topbar({ onOpenMenu }) {
  const { lang, setLang } = useContext(LangContext);
  const [time, setTime] = useState(formatTime(new Date()));
  const [active, setActive] = useState("work");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTime(formatTime(new Date())), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const sections = ["work", "about", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className={`topbar${scrolled ? " topbar--scrolled" : ""}`}>
      <div className="container topbar-inner">
        {/* Brand */}
        <a className="brand" href="#top">
          <span className="brand-icon">
            <svg viewBox="0 0 28 28" fill="none">
              <rect x="2" y="6" width="4" height="16" fill="white" />
              <rect x="2" y="6" width="14" height="4" fill="white" />
              <rect x="2" y="14" width="10" height="4" fill="white" />
              <rect x="22" y="6" width="4" height="4" fill="#b3ff00" />
            </svg>
          </span>
          <span className="brand-name">JAIDA<span className="brand-dot">.</span></span>
        </a>

        {/* Nav */}
        <nav className="nav" aria-label="Primary navigation">
          {[
            { id: "work",    label: "WORK" },
            { id: "about",   label: "SKILLS" },
            { id: "contact", label: "CONTACT" },
          ].map(({ id, label }) => (
            <a
              key={id}
              href={"#" + id}
              className={active === id ? "active" : ""}
              onClick={() => setActive(id)}
            >
              {active === id ? <>[ {label} ]</> : label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "stretch", marginLeft: "auto" }}>
          <div className="cv-btn mono" style={{ borderLeft: "1px solid var(--line)" }}>
            <span>LOCAL_TIME: {time}</span>
          </div>
          <a
            className="cv-download-btn mono"
            href="/CV.pdf"
            download="Mohamed_Jaida_CV.pdf"
            title="Download CV"
          >
            <svg viewBox="0 0 20 20" fill="none" width="13" height="13">
              <path d="M10 3v9m0 0-3-3m3 3 3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 14v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
            CV
          </a>
          <motion.button className="menu-btn" onClick={onOpenMenu} whileTap={{ scale: 0.97 }}>
            {lang === 'en' ? 'MENU' : 'MENU'}
          </motion.button>
          <motion.button 
            className="lang-toggle mono" 
            onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
            whileTap={{ scale: 0.97 }}
            style={{ borderLeft: '1px solid var(--line)', paddingLeft: '1rem' }}
          >
            <span>{lang === 'en' ? 'FR' : 'EN'}</span>
          </motion.button>
        </div>
      </div>
    </header>
  );
}
