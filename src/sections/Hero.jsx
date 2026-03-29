import { useLang } from "../App.jsx";

export default function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="hero">
      <div className="container hero-container">
        <div className="sys-label">SYSTEM_INIT &mdash; V1.0.0</div>

        <div className="hero-title-block">
          <span className="hero-hi">{t('hiIm')}</span>
          <span className="hero-firstname">{t('nameFirst')}</span>
          <span className="hero-lastname">{t('nameLast')}</span>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="hero-tagline-box">{t('tagline')}</div>
        <p className="hero-desc">
          {t('desc')}
        </p>
        <div className="hero-cta">
          <a className="primary" href="#work">{t('viewWork')}</a>
          <a href="#contact">{t('hireMe')}</a>
        </div>
      </div>

      <div className="hero-info">
        <div className="hero-info-item">
          <div className="info-label">{t('baseLocation')}</div>
          <div className="info-value">{t('montrealRemote')}</div>
        </div>
        <div className="hero-info-item">
          <div className="info-label">{t('currentStatus')}</div>
          <div className="info-value available">{t('openToWork')}</div>
        </div>
        <div className="hero-info-item">
          <div className="info-label">{t('specialization')}</div>
          <div className="info-value" style={{ lineHeight: 1.6, fontSize: 10 }}>{t('webMobileMotion')}</div>
        </div>
        <div className="hero-info-item">
          <div className="info-label">{t('lastUpdate')}</div>
          <div className="info-value">{t('mar2026')}</div>
        </div>
      </div>

      <div className="hero-sysroot">JAIDA_DEV &mdash; SYSTEM_READY</div>
    </section>
  );
}
