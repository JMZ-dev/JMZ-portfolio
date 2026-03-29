import { motion } from "framer-motion";

const backdrop = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.18 } },
  exit: { opacity: 0, transition: { duration: 0.16 } },
};

const modal = {
  hidden: { y: 14, opacity: 0, scale: 0.985 },
  show: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.22, ease: "easeOut" } },
  exit: { y: 10, opacity: 0, scale: 0.985, transition: { duration: 0.16 } },
};

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const hasSource = Boolean(project.source);
  const hasLive = Boolean(project.live);

  return (
    <motion.div className="modal-backdrop" variants={backdrop} initial="hidden" animate="show" exit="exit" onClick={onClose}>
      <motion.div className="modal" variants={modal} onClick={(e) => e.stopPropagation()}>
        <div className="modal-top">
          <div>
            <div style={{ fontSize: 18, letterSpacing: "-0.01em" }}><strong>{project.title}</strong></div>
            <div className="small mono">SYS_ID: {project.sysId} • {project.company} • {project.year}</div>
          </div>
          <button className="btn" onClick={onClose}>Close</button>
        </div>

        <div className="modal-body">
          <div>
            <img className="modal-shot" src={project.image} alt={`${project.title} preview`} />
            <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 8 }}>
              {project.stack?.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>

          <div>
            <div className="panel" style={{ padding: 16 }}>
              <div className="small mono" style={{ letterSpacing: "0.18em", textTransform: "uppercase" }}>Overview</div>
              <p style={{ margin: "8px 0 0", color: "var(--muted)", lineHeight: 1.7 }}>{project.summary}</p>
            </div>

            <div style={{ height: 12 }} />

            <div className="panel" style={{ padding: 16 }}>
              <div className="small mono" style={{ letterSpacing: "0.18em", textTransform: "uppercase" }}>Problem / Solution</div>
              <ul className="list">
                <li><strong>Problem:</strong> {project.problem}</li>
                <li><strong>Solution:</strong> {project.solution}</li>
              </ul>
            </div>

            <div style={{ height: 12 }} />

            <div className="panel" style={{ padding: 16 }}>
              <div className="small mono" style={{ letterSpacing: "0.18em", textTransform: "uppercase" }}>Key contributions</div>
              <ul className="list">
                {project.bullets?.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>

            <div style={{ height: 12 }} />

            <div className="row">
              {hasSource && (
                <a className="btn" href={project.source} target="_blank" rel="noreferrer">
                  Source code
                </a>
              )}
              {hasLive && (
                <a className="btn primary" href={project.live} target="_blank" rel="noreferrer">
                  Live preview
                </a>
              )}
              {!hasSource && !hasLive && (
                <div className="small">Add demo / GitHub links when ready.</div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
