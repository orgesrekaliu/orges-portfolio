import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../style/Contact.css';

const PHONE = {
  display: '+383 48 886 933',
  tel: '+38348886933',
};

export default function Contact() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // idle | sending | success | error
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // (optional) extra front-end validation beyond "required"
    if (formData.message.trim().length < 10) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setStatus('idle'); // clears old success/error message while user edits
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-5">
      <div className="container px-3 px-md-4 px-lg-5 py-5">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">{t('contactTitle')}</h2>
              <div className="mx-auto" style={{ width: '60px', height: '4px', background: '#3b82f6' }}></div>
              <p className="lead text-muted mt-3">{t('contactSubtitle')}</p>
            </div>

            <div className="row g-4">
              {/* Email Card */}
              <div className="col-lg-4 col-md-6">
                <a href="mailto:orgesrekaliu8@gmail.com" className="text-decoration-none">
                  <div className="card border-0 shadow-sm text-center p-4 h-100 hover-card">
                    <div className="mb-3 text-primary d-flex justify-content-center">
                      <Mail size={40} />
                    </div>
                    <h5 className="fw-bold mb-2">{t('email')}</h5>
                    <p className="text-muted mb-0">orgesrekaliu8@gmail.com</p>
                  </div>
                </a>
              </div>

              {/* Phone Card */}
              <div className="col-lg-4 col-md-6">
                <a href={`tel:${PHONE.tel}`} className="text-decoration-none" aria-label={`Call ${PHONE.display}`}>
                  <div className="card border-0 shadow-sm text-center p-4 h-100 hover-card">
                    <div className="mb-3 text-primary d-flex justify-content-center">
                      <Phone size={40} />
                    </div>
                    <h5 className="fw-bold mb-2">{t('phone')}</h5>
                    <p className="text-muted mb-0">{PHONE.display}</p>
                  </div>
                </a>
              </div>

              {/* Location Card */}
              <div className="col-lg-4 col-md-6">
                <div className="card border-0 shadow-sm text-center p-4 h-100 hover-card">
                  <div className="mb-3 text-primary d-flex justify-content-center">
                    <MapPin size={40} />
                  </div>
                  <h5 className="fw-bold mb-2">{t('location')}</h5>
                  <p className="text-muted mb-0">Podujevo, Kosovo</p>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-lg-8 mx-auto">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label fw-medium">
                          {t('yourName')}
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          minLength={2}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-medium">
                          {t('yourEmail')}
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="message" className="form-label fw-medium">
                          {t('message')}
                        </label>
                        <textarea
                          className="form-control form-control-lg"
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          minLength={10}
                        ></textarea>
                        <small className="text-muted">Minimum 10 characters.</small>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100 d-flex align-items-center justify-content-center gap-2"
                        disabled={status === 'sending'}
                      >
                        <Send size={20} />
                        {status === 'sending' ? 'Sending...' : t('sendMessage')}
                      </button>

                      {status === 'success' && (
                        <p className="text-success mt-3 mb-0 text-center">
                          Message sent ✅ I’ll reply as soon as possible.
                        </p>
                      )}

                      {status === 'error' && (
                        <p className="text-danger mt-3 mb-0 text-center">
                          Failed to send ❌ Please try again.
                        </p>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
