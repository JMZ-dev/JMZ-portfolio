import { useState } from 'react';

const stacks = {
  FRONTEND: ['React', 'Next.js', 'Vite', 'FlutterFlow', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Three.js'],
  BACKEND:  ['Node.js', 'Express', 'FastAPI', 'Python', 'REST APIs', 'PostgreSQL', 'Firebase'],
  TOOLING:  ['Git', 'GitHub', 'Vercel', 'Figma', 'VS Code', 'Docker', 'Postman'],
  DESIGN:   ['UI/UX Systems', 'Motion Design', 'Typography', 'Design Tokens', 'Responsive Layout'],
};

export default function About() {
  const [cat, setCat] = useState('FRONTEND');

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="sec-header">
          <span className="sec-label">ABOUT</span>
          <h2 className="sec-title">SKILLS &amp; STACK</h2>
        </div>

        <div className="skills-grid">
          <div className="skills-left">
            <h3 className="skills-title">DISCIPLINE.<br/>PERFORMANCE.<br/>CLARITY.</h3>
            <p className="skills-desc">
              I approach every project with engineering rigour — clean architecture,
              readable code, and intentional UX. I specialise in building fast,
              accessible digital products that scale.
            </p>
            <ul className="skills-principles">
              <li className="principle">PERFORMANCE_FIRST &mdash; no bloat, no shortcuts</li>
              <li className="principle">SYSTEM_DESIGN &mdash; composable, typed, documented</li>
              <li className="principle">MOTION_DRIVEN &mdash; animation as communication</li>
              <li className="principle">CROSS_PLATFORM &mdash; web, mobile, desktop parity</li>
            </ul>
          </div>

          <div className="skills-right">
            <div className="stack-categories">
              {Object.keys(stacks).map((k) => (
                <button
                  key={k}
                  className={`stack-cat-btn${cat === k ? ' active' : ''}`}
                  onClick={() => setCat(k)}
                >
                  {cat === k ? `[ ${k} ]` : k}
                </button>
              ))}
            </div>
            <div className="stack-display">
              <div className="stack-tags">
                {stacks[cat].map((t) => (
                  <span key={t} className="stack-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
