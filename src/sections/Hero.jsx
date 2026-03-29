export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-container">
        <div className="sys-label">SYSTEM_INIT &mdash; V1.0.0</div>

        <div className="hero-title-block">
          <span className="hero-hi">HI, I&apos;M</span>
          <span className="hero-firstname">MOHAMED</span>
          <span className="hero-lastname">JAIDA.</span>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="hero-tagline-box">BUILT TO<br/>PERFORM</div>
        <p className="hero-desc">
          I BUILD DIGITAL PRODUCTS WITH DISCIPLINED UX,<br/>
          STRUCTURED DELIVERY, AND PERFORMANCE-FIRST<br/>
          ENGINEERING. SPECIALIZING IN REACT,<br/>
          FLUTTERFLOW, AND MOTION SYSTEMS.
        </p>
        <div className="hero-cta">
          <a className="primary" href="#work">VIEW WORK &#8599;</a>
          <a href="#contact">HIRE ME &rarr;</a>
        </div>
      </div>

      <div className="hero-info">
        <div className="hero-info-item">
          <div className="info-label">BASE_LOCATION</div>
          <div className="info-value">MONTREAL // REMOTE</div>
        </div>
        <div className="hero-info-item">
          <div className="info-label">CURRENT_STATUS</div>
          <div className="info-value available">OPEN TO WORK</div>
        </div>
        <div className="hero-info-item">
          <div className="info-label">SPECIALIZATION</div>
          <div className="info-value" style={{ lineHeight: 1.6, fontSize: 10 }}>WEB &amp; MOBILE<br/>MOTION SYSTEMS</div>
        </div>
        <div className="hero-info-item">
          <div className="info-label">LAST_UPDATE</div>
          <div className="info-value">MAR_2026.04</div>
        </div>
      </div>

      <div className="hero-sysroot">JAIDA_DEV &mdash; SYSTEM_READY</div>
    </section>
  );
}
