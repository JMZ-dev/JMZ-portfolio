import { useState, useContext } from 'react';
import { LangContext } from '../App.jsx';



export default function About() {
  const { t, lang } = useContext(LangContext);
  const [cat, setCat] = useState('FRONTEND');

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="sec-header">
          <span className="sec-label">{t('about')}</span>
          <h2 className="sec-title">{t('skillsStack')}</h2>
        </div>

        <div className="skills-grid">
          <div className="skills-left">
            <h3 className="skills-title">{t('disciplinePerformanceClarity')}</h3>
            <p className="skills-desc">
              {t('skillsDesc')}
            </p>
            <ul className="skills-principles">
              <li className="principle">{t('principles.performance')}</li>
              <li className="principle">{t('principles.systemDesign')}</li>
              <li className="principle">{t('principles.motionDriven')}</li>
              <li className="principle">{t('principles.crossPlatform')}</li>
            </ul>
          </div>

          <div className="skills-right">
            <div className="stack-categories">
              {Object.keys(t('stacks')).map((k) => (
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
