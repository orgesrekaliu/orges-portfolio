import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
  {
    title: 'Device Manager System',
    description:
      'A device management web application that allows users to track, organize, and manage technical equipment efficiently through a centralized dashboard.',
    technologies: ['React', 'Bootstrap', 'JavaScript', 'DataBase'],
    github: 'YOUR_GITHUB_LINK',
    demo: 'YOUR_LIVE_DEMO_LINK',
  },
  {
    title: 'Metalworker Ardi Business Website',
    description:
      'A professional business website for a metalworking company showcasing services, portfolio, and contact information to improve online presence and attract new clients.',
    technologies: ['React', 'Bootstrap', 'CSS', 'JavaScript'],
    github: "https://github.com/orgesrekaliu/metalworker-ardi",
      demo: 'https://metalworkardi.vercel.app',
}
];
  return (
    <section id="projects" className="py-5" style={{ background: '#f8f9fa' }}>
      <div className="container px-3 px-md-4 px-lg-5 py-5">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">{t('featuredProjects')}</h2>
              <div className="mx-auto" style={{ width: '60px', height: '4px', background: '#3b82f6' }}></div>
              <p className="lead text-muted mt-3">
                {t('projectsDesc')}
              </p>
            </div>

            <div className="row g-4">
              {projects.map((project, index) => (
                <div key={index} className="col-lg-6 col-md-6">
                  <div className="card h-100 border-0 shadow-sm hover-lift">
                    <div className="card-body p-4">
                      <h5 className="card-title fw-bold mb-3">{project.title}</h5>
                      <p className="card-text text-muted mb-3">{project.description}</p>
                      <div className="mb-3">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="badge bg-light text-primary me-2 mb-2"
                            style={{ fontSize: '0.85rem', fontWeight: '500' }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="d-flex gap-3 mt-4 flex-wrap">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2"
                        >
                        <Github size={16} />
                        {t("code")}
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm d-flex align-items-center gap-2"
                        >
                          <ExternalLink size={16} />
                          {t('liveDemo')}
                        </a>
                      </div>
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
