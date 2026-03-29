import { useEffect, useMemo, useState, createContext, useContext } from "react";
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

const LangContext = createContext();

const translations = {
  en: {
    // Hero
    hiIm: "HI, I'M",
    nameFirst: "MOHAMED",
    nameLast: "JAIDA.",
    tagline: "BUILT TO\\nPERFORM",
    desc: "I BUILD DIGITAL PRODUCTS WITH DISCIPLINED UX,\\nSTRUCTURED DELIVERY, AND PERFORMANCE-FIRST\\nENGINEERING. SPECIALIZING IN REACT,\\nFLUTTERFLOW, AND MOTION SYSTEMS.",
    viewWork: "VIEW WORK →",
    hireMe: "HIRE ME →",
    baseLocation: "BASE_LOCATION",
    montrealRemote: "MONTREAL // REMOTE",
    currentStatus: "CURRENT_STATUS",
    openToWork: "OPEN TO WORK",
    specialization: "SPECIALIZATION",
    webMobileMotion: "WEB & MOBILE\\nMOTION SYSTEMS",
    lastUpdate: "LAST_UPDATE",
    mar2026: "MAR_2026.04",
    // About
    about: "ABOUT",
    skillsStack: "SKILLS & STACK",
    disciplinePerformanceClarity: "DISCIPLINE.\\nPERFORMANCE.\\nCLARITY.",
    skillsDesc: "I approach every project with engineering rigour — clean architecture,\\nreadable code, and intentional UX. I specialise in building fast,\\naccessible digital products that scale.",
    principles: {
      performance: "PERFORMANCE_FIRST — no bloat, no shortcuts",
      systemDesign: "SYSTEM_DESIGN — composable, typed, documented",
      motionDriven: "MOTION_DRIVEN — animation as communication",
      crossPlatform: "CROSS_PLATFORM — web, mobile, desktop parity",
    },
    stacks: {
      FRONTEND: ['React', 'Next.js', 'Vite', 'FlutterFlow', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Three.js'],
      BACKEND: ['Node.js', 'Express', 'FastAPI', 'Python', 'REST APIs', 'PostgreSQL', 'Firebase'],
      TOOLING: ['Git', 'GitHub', 'Vercel', 'Figma', 'VS Code', 'Docker', 'Postman'],
      DESIGN: ['UI/UX Systems', 'Motion Design', 'Typography', 'Design Tokens', 'Responsive Layout'],
    },
    contact: "CONTACT",
    startProject: "START A PROJECT",
    name: "NAME",
    yourName: "YOUR NAME",
    email: "EMAIL",
    yourEmail: "YOUR EMAIL",
    project: "PROJECT",
    describeProject: "DESCRIBE YOUR PROJECT",
  },
  fr: {
    // Hero
    hiIm: "SALUT, JE SUIS",
    nameFirst: "MOHAMED",
    nameLast: "JAIDA.",
    tagline: "CONÇU POUR\\nPERFORMER",
    desc: "JE CRÉE DES PRODUITS NUMÉRIQUES AVEC UNE UX RIGOUREUSE,\\nUNE LIVRAISON STRUCTURÉE ET UNE INGENIERIE PERFORMANCE FIRST.\\nSPÉCIALISÉ EN REACT, FLUTTERFLOW ET SYSTÈMES DE MOTION.",
    viewWork: "VOIR TRAVAUX →",
    hireMe: "ME RECRUTER →",
    baseLocation: "BASE_GEOLOC",
    montrealRemote: "MONTREAL // REMOTE",
    currentStatus: "STATUT_ACTUEL",
    openToWork: "DISPONIBLE",
    specialization: "SPÉCIALISATION",
    webMobileMotion: "WEB & MOBILE\\nSYSTÈMES MOTION",
    lastUpdate: "DERNIÈRE_MAJ",
    mar2026: "AVR_2026.04",
    // About
    about: "À PROPOS",
    skillsStack: "COMPÉTENCES & STACK",
    disciplinePerformanceClarity: "DISCIPLINE.\\nPERFORMANCE.\\nCLARTÉ.",
    skillsDesc: "J'aborde chaque projet avec rigueur d'ingénierie — architecture propre,\\ncode lisible et UX intentionnelle. Je me spécialise dans la création de produits\\nnumériques rapides et accessibles qui évoluent.",
    principles: {
      performance: "PERFORMANCE_FIRST — pas de bloat, pas de raccourcis",
      systemDesign: "SYSTEM_DESIGN — composable, typé, documenté",
      motionDriven: "MOTION_DRIVEN — animation comme communication",
      crossPlatform: "CROSS_PLATFORM — web, mobile, desktop parity",
    },
    stacks: {
      FRONTEND: ['React', 'Next.js', 'Vite', 'FlutterFlow', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Three.js'],
      BACKEND: ['Node.js', 'Express', 'FastAPI', 'Python', 'REST APIs', 'PostgreSQL', 'Firebase'],
      TOOLING: ['Git', 'GitHub', 'Vercel', 'Figma', 'VS Code', 'Docker', 'Postman'],
      DESIGN: ['UI/UX Systems', 'Motion Design', 'Typography', 'Design Tokens', 'Responsive Layout'],
    },
    contact: "CONTACT",
    startProject: "LANCER UN PROJET",
    name: "NOM",
    yourName: "VOTRE NOM",
    email: "EMAIL",
    yourEmail: "VOTRE EMAIL",
    project: "PROJET",
    describeProject: "DÉCRIVEZ VOTRE PROJET",
  }
};

function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within LangProvider');
  }
  return context;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [lang, setLang] = useState('en');

  const reduceMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  useEffect(() => {
    if (!ready) return;

    if (!reduceMotion) {
      gsap.fromTo(
        '.panel, .card, .hero-card',
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.06, ease: 'power3.out' }
      );

      const items = gsap.utils.toArray('.panel, .card');
      items.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 86%' },
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

      <LangContext.Provider value={{ lang, setLang, t: (key) => translations[lang][key] || key }}>
        {ready && (
          <>
            <Topbar onOpenMenu={() => setMenuOpen(true)} />
            <AnimatePresence>
              {menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}
            </AnimatePresence>
            <main style={{ position: 'relative', zIndex: 1 }}>
              <Hero />
              <div className="ticker" role="presentation" aria-hidden="true">
                <div className="ticker-track">
                  {(() => {
                    const t = 'REACT · FLUTTERFLOW · THREE.JS · GSAP · FRAMER MOTION · NODE.JS · UI/UX · FIGMA · MOTION DESIGN · PERFORMANCE · MOBILE FIRST · CLEAN CODE · ';
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
      </LangContext.Provider>
    </>
  );
}
