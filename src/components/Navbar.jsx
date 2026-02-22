import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/logo1.png';
import '../style/Navbar.css';

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { language, setLanguage, t } = useLanguage();

  // Handle resize (mobile menu)
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ✅ Mobile-safe active link tracking (no IntersectionObserver)
  useEffect(() => {
    const ids = ['home', 'about', 'skills', 'projects', 'contact'];

    const getSections = () =>
      ids.map((id) => document.getElementById(id)).filter(Boolean);

    const setActiveFromScroll = () => {
      const sections = getSections();
      if (!sections.length) return;

      // adjust if your navbar is taller/shorter
      const navbarOffset = 210;

      let current = 'home';

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        // when section top passes below navbar area, it becomes current
        if (rect.top <= navbarOffset) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    // run once on load
    setActiveFromScroll();

    window.addEventListener('scroll', setActiveFromScroll, { passive: true });
    window.addEventListener('resize', setActiveFromScroll);

    return () => {
      window.removeEventListener('scroll', setActiveFromScroll);
      window.removeEventListener('resize', setActiveFromScroll);
    };
  }, []);

  const navLinks = [
    { name: t('home'), href: '#home' },
    { name: t('about'), href: '#about' },
    { name: t('skills'), href: '#skills' },
    { name: t('projects'), href: '#projects' },
    { name: t('contact'), href: '#contact' },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'sq', name: 'Shqip' },
  ];

  return (
    <nav style={{ background: '#1c1c1c' }} className="fixed-top shadow">
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0.5rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={() => {
            setActiveSection('home');
            if (isMobile) setIsOpen(false);
          }}
        >
          <img src={logo} alt="OR Logo" className="nav-logo" />
        </a>

        {/* Links */}
        {(!isMobile || isOpen) && (
          <ul
            style={{
              listStyle: 'none',
              display: isMobile ? 'block' : 'flex',
              padding: 0,
              margin: 0,
              textAlign: isMobile ? 'center' : 'right',
            }}
          >
            {navLinks.map((link, index) => (
              <li key={index} style={{ margin: isMobile ? '1rem 0' : '0 1rem' }}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.href.slice(1));
                    if (isMobile) setIsOpen(false);
                  }}
                  className={`nav-link-custom ${
                    activeSection === link.href.slice(1) ? 'active' : ''
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Right buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {/* Language selector */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                background: 'transparent',
                border: '1px solid #fff',
                color: '#fff',
                padding: '0.25rem 0.5rem',
                cursor: 'pointer',
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}
            >
              <Globe size={16} />
              {language}
            </button>

            {isLanguageOpen && (
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  top: '100%',
                  background: '#fff',
                  color: '#000',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  marginTop: '0.25rem',
                  minWidth: '100px',
                  zIndex: 1000,
                }}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsLanguageOpen(false);
                    }}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '0.5rem',
                      background: 'transparent',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontWeight: language === lang.code ? 'bold' : 'normal',
                    }}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          {isMobile && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
