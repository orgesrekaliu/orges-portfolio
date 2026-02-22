import { User, Briefcase, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-5" style={{ background: '#f8f9fa' }}>
      <div className="container px-3 px-md-4 px-lg-5 py-5">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">{t('aboutMe')}</h2>
              <div className="mx-auto" style={{ width: '60px', height: '4px', background: '#3b82f6' }}></div>
            </div>

            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="mb-3 text-primary">
                      <User size={48} />
                    </div>
                    <h5 className="card-title fw-bold mb-3">{t('whoIAm')}</h5>
                    <p className="card-text text-muted">
                      {t('whoIAmDesc')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="mb-3 text-primary">
                      <Briefcase size={48} />
                    </div>
                    <h5 className="card-title fw-bold mb-3">{t('whatIDo')}</h5>
                    <p className="card-text text-muted">
                      {t('whatIDoDesc')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="mb-3 text-primary">
                      <GraduationCap size={48} />
                    </div>
                    <h5 className="card-title fw-bold mb-3">{t('myGoal')}</h5>
                    <p className="card-text text-muted">
                      {t('myGoalDesc')}
                    </p>
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
