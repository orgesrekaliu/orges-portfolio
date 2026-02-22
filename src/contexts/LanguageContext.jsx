import { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    portfolio: 'Portfolio',
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    getInTouch: 'Get In Touch',
    viewProjects: 'View Projects',
    aboutMe: 'About Me',
    skillsTitle: 'Skills & Technologies',
    featuredProjects: 'Real-World Projects',
    contactTitle: 'Get In Touch',
    contactSubtitle: 'Have a project in mind or want to collaborate? Feel free to reach out!',
    whoIAm: 'Who Am I',
    whoIAmDesc:'A full-stack developer who builds efficient, scalable web applications and enjoys turning ideas into clean, reliable digital experiences.',
    whatIDo: 'What I Do',
    whatIDoDesc: 'I build responsive and user-focused web applications using modern frameworks and tools, with a strong emphasis on clean code and best practices.',


    myGoal: 'My Goal',
    myGoalDesc: 'To keep growing as a developer while contributing to meaningful projects that create real value.',
    frontend: 'Frontend',
    backend: 'Backend',
    toolsOthers: 'Tools & Others',
    projectsDesc: 'Here are some of my recent projects that showcase my skills and experience',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    message: 'Message',
    sendMessage: 'Send Message',
    code: 'Code',
    liveDemo: 'Live Demo',
    madeWith: 'Made with',
    by: 'by Orges',
    allRightsReserved: 'All rights reserved.',
    introText: 'Passionate about building modern web applications with clean code and innovative user experiences. Specializing in React, Node.js, and modern web technologies.',
    HiImOrges: "Hi, I'm Orges",
  },
  de: {
    portfolio: 'Portfolio',
    home: 'Startseite',
    about: 'Über mich',
    skills: 'Fähigkeiten',
    projects: 'Projekte',
    contact: 'Kontakt',
    getInTouch: 'Kontakt aufnehmen',
    viewProjects: 'Projekte ansehen',
    aboutMe: 'Über mich',
    skillsTitle: 'Fähigkeiten & Technologien',
    featuredProjects: 'Projekte aus der Praxis',
    contactTitle: 'Kontakt aufnehmen',
    contactSubtitle: 'Haben Sie ein Projekt im Sinn oder möchten zusammenarbeiten? Nehmen Sie gerne Kontakt auf!',
    whoIAm: 'Wer bin ich',
    whoIAmDesc:'Ein Full-Stack-Entwickler, der effiziente, skalierbare Webanwendungen entwickelt und es liebt, Ideen in klare und zuverlässige digitale Erlebnisse umzusetzen.',


    whatIDo: 'Was ich mache',
    whatIDoDesc: 'Ich entwickle responsive und benutzerorientierte Webanwendungen mit modernen Frameworks und Tools, mit einem starken Fokus auf sauberen Code und bewährte Best Practices.',
    myGoal: 'Mein Ziel',
    myGoalDesc: 'Mich kontinuierlich als Entwickler weiterzuentwickeln und an sinnvollen Projekten mitzuwirken, die echten Mehrwert schaffen.',
    frontend: 'Frontend',
    backend: 'Backend',
    toolsOthers: 'Tools & Sonstiges',
    projectsDesc: 'Hier sind einige meiner neuesten Projekte, die meine Fähigkeiten und Erfahrung zeigen',
    email: 'E-Mail',
    phone: 'Telefon',
    location: 'Standort',
    yourName: 'Ihr Name',
    yourEmail: 'Ihre E-Mail',
    message: 'Nachricht',
    sendMessage: 'Nachricht senden',
    code: 'Code',
    liveDemo: 'Live Demo',
    madeWith: 'Erstellt mit',
    by: 'von Orges',
    allRightsReserved: 'Alle Rechte vorbehalten.',
    introText: 'Leidenschaft für die Erstellung moderner Webanwendungen mit sauberem Code und intuitiver Benutzerführung. Spezialisiert auf React, Node.js und moderne Webtechnologien.',
    HiImOrges: "Hallo, ich bin Orges",
  },
  sq: {
    portfolio: 'Portfolio',
    home: 'Shtëpia',
    about: 'Rreth meje',
    skills: 'Aftësitë',
    projects: 'Projektet',
    contact: 'Kontakti',
    getInTouch: 'Na kontaktoni',
    viewProjects: 'Shiko Projektet',
    aboutMe: 'Rreth meje',
    skillsTitle: 'Aftësitë & Teknologjitë',
    featuredProjects: 'Projekte të Botës Reale',
    contactTitle: 'Na kontaktoni',
    contactSubtitle: 'Keni një projekt në mendje ose dëshironi të bashkëpunoni? Mos hezitoni të na kontaktoni!',
    whoIAm: 'Kush jam unë',
    whoIAmDesc:'Një zhvillues full-stack që ndërton aplikacione web efikase dhe që përshtaten me rritjen, duke shëndërruar idetë në përvoja digjitale të pastra dhe të besueshme.',


    whatIDo: 'Çfarë bëj unë',
    whatIDoDesc: 'Ndërtoj aplikacione web responsive dhe të orientuara drejt përdoruesit duke përdorur framework-e dhe mjete moderne, me fokus të fortë në kod të pastër dhe praktikat më të mira.',
    myGoal: 'Qëllimi im',
    myGoalDesc: 'Të vazhdoj të rritem si zhvillues dhe të kontribuoj në projekte domethënëse që krijojnë vlerë reale.',
    frontend: 'Frontend',
    backend: 'Backend',
    toolsOthers: 'Mjetet & Të tjera',
    projectsDesc: 'Këtu janë disa nga projektet e mia të fundit që tregojnë aftësitë dhe përvojën time',
    email: 'Email',
    phone: 'Telefon',
    location: 'Vendndodhja',
    yourName: 'Emri juaj',
    yourEmail: 'Email juaj',
    message: 'Mesazhi',
    sendMessage: 'Dërgoni Mesazhin',
    code: 'Kodi',
    liveDemo: 'Demo Live',
    madeWith: 'Bërë me',
    by: 'nga Orgesi',
    allRightsReserved: 'Të gjitha të drejtat e rezervuara.',
    introText: 'I pasionuar për ndërtimin e aplikacioneve web moderne me kod të pastër dhe përvojë inovative për përdoruesit. Specializuar në React, Node.js dhe teknologjitë moderne të uebit.',
    HiImOrges: "Përshëndetje, unë jam Orgesi",
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
