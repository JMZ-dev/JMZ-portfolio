import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectModal from '../components/ProjectModal';

export default function Work() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="work" className="section">
      <div className="container">
        <div className="sec-header">
          <span className="sec-label">WORK</span>
          <h2 className="sec-title">SELECTED PROJECTS</h2>
        </div>

        <div className="cards-grid">
          {projects.map((p) => (
            <article key={p.id} className="card" onClick={() => setSelected(p)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setSelected(p)}>
              <div className="card-img-wrap">
                <img src={p.image} alt={p.title} className="card-img" />
              </div>
              <div className="card-body">
                <div className="card-sys mono">SYS_ID: {p.sysId} // {p.type}</div>
                <h4>{p.title}</h4>
                <p>{p.summary}</p>
                <div className="tags mono">
                  {p.stack.slice(0, 4).map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="card-footer mono">
                <span>{p.status}</span>
                {p.source ? (
                  <a href={p.source} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                    SOURCE &#8599;
                  </a>
                ) : p.live ? (
                  <a href={p.live} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                    LIVE &#8599;
                  </a>
                ) : (
                  <span style={{ color: 'var(--muted)' }}>IN PROGRESS</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
