import { useRef, useState, useContext } from 'react';
import { LangContext } from '../App.jsx';

// ─── Formspree setup (free, 50 submissions/month) ────────────────────────────
// 1. Go to https://formspree.io and sign up with cazawi0905@gmail.com
// 2. Click "New Form", name it anything, copy the endpoint URL
// 3. Replace the value below with your endpoint, e.g.:
//    'https://formspree.io/f/xabcdefg'
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xaqlnjra';
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const { t } = useContext(LangContext);
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(formRef.current),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('sent');
        formRef.current.reset();
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        throw new Error('Server error');
      }
    } catch (err) {
      console.error('Form error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const btnLabel = {
    idle:    <>SEND_MESSAGE &nbsp;&#8594;</>,
    sending: <>SENDING&#8230;</>,
    sent:    <>&#10003;&nbsp; MESSAGE_SENT</>,
    error:   <>&#9888;&nbsp; SEND_FAILED — RETRY</>,
  }[status];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="sec-header">
          <span className="sec-label">{t('contact')}</span>
          <h2 className="sec-title">{t('startProject')}</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-form-wrap">
            <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
              <div className="field">
                <label className="mono">{t('name')}</label>
                <input name="from_name" type="text" placeholder={t('yourName')} required />
              </div>
              <div className="field">
                <label className="mono">{t('email')}</label>
                <input name="from_email" type="email" placeholder={t('yourEmail')} required />
              </div>
              <div className="field">
                <label className="mono">{t('project')}</label>
                <textarea name="message" rows={5} placeholder={t('describeProject')} required />
              </div>
              <button
                className={`submit-btn mono${status === 'sent' ? ' sent' : ''}${status === 'error' ? ' error' : ''}`}
                type="submit"
                disabled={status === 'sending'}
              >
                {btnLabel}
              </button>
            </form>
          </div>

          <div className="contact-info-wrap">
            <div className="contact-block">
              <div className="contact-block-label mono">DIRECT_MAIL</div>
              <a className="contact-email" href="mailto:cazawi0905@gmail.com">
                cazawi0905@gmail.com
              </a>
            </div>
            <div className="contact-block">
              <div className="contact-block-label mono">LOCATION</div>
              <div className="contact-location">MONTREAL, CANADA<br/>AVAILABLE REMOTE</div>
            </div>
            <div className="contact-block">
              <div className="contact-block-label mono">SOCIAL</div>
              <div className="social-links">
                <a className="social-link" href="https://github.com/JMZ-dev" target="_blank" rel="noreferrer">GITHUB &#8599;</a>
                <a className="social-link" href="https://www.linkedin.com/in/mohamed-zouheir-jaida-978a512ba/" target="_blank" rel="noreferrer">LINKEDIN &#8599;</a>
              </div>
            </div>
            <div className="status-row">
              <span className="status-dot"></span>
              <span className="mono">SYSTEM_STATUS: ONLINE — AVAILABLE_FOR_NEW_PROJECTS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
