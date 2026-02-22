import { useLanguage } from '../contexts/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('frontend'),
      skills: [
        { name: 'React', level: 85 },
        { name: 'JavaScript', level: 70 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Bootstrap', level: 85 },
      ],
    },
    {
      title: t('backend'),
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express', level: 70 },
        { name: 'REST APIs', level: 80 },
        { name: 'Database Design', level: 75 },
      ],
    },
    {
      title: t('toolsOthers'),
      skills: [
        { name: 'Git/GitHub', level: 80 },
        { name: 'VS Code', level: 90 },
        { name: 'SQL/MongoDB', level: 70 },
        { name: 'Responsive Design', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-5">
      <div className="container px-3 px-md-4 px-lg-5 py-5">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">{t('skillsTitle')}</h2>
              <div className="mx-auto" style={{ width: '60px', height: '4px', background: '#3b82f6' }}></div>
            </div>

            <div className="row g-4">
              {skillCategories.map((category, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <h5 className="card-title fw-bold mb-4 text-primary">{category.title}</h5>
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="mb-3">
                          <div className="d-flex justify-content-between mb-1">
                            <span className="fw-medium">{skill.name}</span>
                            <span className="text-muted">{skill.level}%</span>
                          </div>
                          <div className="progress" style={{ height: '8px' }}>
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: `${skill.level}%` }}
                              aria-valuenow={skill.level}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
