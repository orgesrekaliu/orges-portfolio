// import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
// import { useLanguage } from '../contexts/LanguageContext';
// import '../style/Hero.css';

// export default function Hero() {
//   const { t } = useLanguage();

//   return (
//     <section className="hero-section text-white d-flex align-items-center" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' }}>
//       <div className="container px-3 px-md-4 px-lg-5">
//         <div className="row align-items-center">
//           <div className="col-lg-8 mx-auto text-center">
//             <div className="mb-4">
//               <Code2 size={64} className="mb-3" />
//             </div>
//            <h1 className="display-4 display-lg-3 fw-bold mb-3">
//               {t('HiImOrges')}
//           </h1>


//             <h2 className="h3 fw-normal mb-4 text-white-50">Fullstack Junior Developer</h2>
//             <p className="lead mb-5">
//               {t('introText')}
//             </p>
//             <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-4">
//               <a href="#contact" className="btn btn-light btn-lg px-4">
//                 {t('getInTouch')}
//               </a>
//               <a href="#projects" className="btn btn-outline-light btn-lg px-4">
//                 {t('viewProjects')}
//               </a>
//             </div>
//             <div className="d-flex gap-3 justify-content-center mt-5 social-icons">
//   <a
//     href="https://github.com"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="text-white"
//   >
//     <Github size={28} />
//   </a>
//   <a
//     href="https://linkedin.com/in/orges-rekaliu-1901a2368"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="text-white"
//   >
//     <Linkedin size={28} />
//   </a>
//   <a href="mailto:orgesrekaliu8@gmail.com" className="text-white">
//     <Mail size={28} />
//   </a>
// </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import '../style/Hero.css';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="hero-section text-white d-flex align-items-center"
      style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' }}
    >
      <div className="container px-3 px-md-4 px-lg-5">
        <div className="row align-items-center">
          <div className="col-lg-8 mx-auto text-center">
            <div className="mb-4">
              <Code2 size={64} className="mb-3" />
            </div>

            <h1 className="display-4 display-lg-3 fw-bold mb-3">
              {t('HiImOrges')}
            </h1>

            <h2 className="h3 fw-normal mb-4 text-white-50">Fullstack Junior Developer</h2>

            <p className="lead mb-5">
              {t('introText')}
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-4">
              <a href="#contact" className="btn btn-light btn-lg px-4">
                {t('getInTouch')}
              </a>
              <a href="#projects" className="btn btn-outline-light btn-lg px-4">
                {t('viewProjects')}
              </a>
            </div>

            <div className="d-flex gap-3 justify-content-center mt-5 social-icons">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com/in/orges-rekaliu-1901a2368"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <Linkedin size={28} />
              </a>
              <a href="mailto:orgesrekaliu8@gmail.com" className="text-white">
                <Mail size={28} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

