import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import '../style/Footer.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer-custom bg-dark text-white d-flex flex-column justify-content-between">
      <div className="container px-3 px-md-4 px-lg-5 d-flex flex-column align-items-center">
        {/* Icons Row */}
        <div className="d-flex gap-4 mb-3 social-icons">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/orges-rekaliu-1901a2368"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:orgesrekaliu8@gmail.com"
            title="Email"
          >
            <Mail size={28} />
          </a>
        </div>

        {/* All Rights Reserved */}
        <div className="text-center mt-auto footer-text">
  <small>&copy; {new Date().getFullYear()} Orges. {t('allRightsReserved')}</small>
</div>

      </div>
    </footer>
  );
}
