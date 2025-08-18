import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

// Traducciones
const translations = {
  es: {
    // Navbar
    home: 'Home',
    aboutMe: 'Sobre mi',
    projects: 'Proyectos',
    skills: 'Skills',
    contact: 'Contacto',
    menu: 'Menu',
    darkMode: 'Modo oscuro',
    lightMode: 'Modo claro',
    
    // Intro
    hello: 'Hola,',
    iAm: 'soy',
    name: 'Alan',
    profession: 'Desarrollador de Software',
    introDescription: 'Soy un apasionado del desarrollo de software, siempre en búsqueda de inspiración creativa y ansioso por adquirir nuevos conocimientos. Cada proyecto es un nuevo desafío que me entusiasma abordar. Siempre estoy aprendiendo y explorando nuevas formas de mejorar mis habilidades. ¿Listo para crear algo increíble juntos?',
    viewCV: 'Ver mi CV',
    viewLinkedIn: 'Ver mi LinkedIn',
    
    // About
    aboutTitle: 'Sobre Mi',
    aboutDescription: 'Mi trayectoria ha sido diversa, habiendo transitado tanto la industria de la belleza como el mundo de la educación. A lo largo de los años, he adquirido una gran cantidad de experiencias que hoy enriquecen mi enfoque en el desarrollo de software. Mi paso por el sector de la belleza me permitió desarrollar una sensibilidad estética que ahora aplico al diseño de soluciones digitales. Como docente, aprendí la importancia de compartir conocimientos de manera clara, algo que valoro mucho en mi trabajo actual como desarrollador. Con una base en programación que he ido perfeccionando a lo largo del tiempo, decidí seguir mi verdadera pasión por el desarrollo de software, lo que me llevó a retomar mis estudios en programación. Hoy, como desarrollador, me esfuerzo por integrar creatividad, comunicación efectiva y un enfoque centrado en el usuario en cada proyecto que emprendo.',
    creativity: 'Creatividad',
    creativityDescription: 'Mi experiencia en la industria de la belleza me brindó un sentido del diseño y la estética que ahora aplico en la creación de soluciones digitales, buscando siempre una combinación de funcionalidad y estética.',
    communication: 'Comunicación',
    communicationDescription: 'La enseñanza me permitió desarrollar habilidades para comunicarme de forma efectiva, una habilidad que traslado al desarrollo de software para poder compartir conocimientos y colaborar de manera clara en proyectos técnicos.',
    userFocus: 'Enfoque en el Usuario',
    userFocusDescription: 'Mi paso por diferentes áreas me ha enseñado la importancia de escuchar y comprender las necesidades de los usuarios. Esto me permite diseñar soluciones de software que priorizan una experiencia fluida y centrada en el usuario.',
    
    // Works
    worksTitle: 'Mis proyectos',
    worksDescription: 'Haz click en las imágenes, para ver más sobre los proyectos que hice.',
    worksButton: 'Ver más proyectos',
    
    // Project titles (for tooltips)
    turneraApp: 'Gestión de turnos (.NET)',
    veterinariaApp: 'Gestor de Veterinarias (.NET)',
    universidadApp: 'SIU Diaguita - Gestión Universitaria (PHP)',
    stockCompras: 'Ventas y control de Stock (Java)',
    buscadorClima: 'Buscador de Clima (React)',
    buscadorPeliculas: 'Buscador de Películas (React)',
    logoX: 'Componente de X (React)',
    taTeTi: 'Tres en raya (React)',
    conectaCuatro: 'Conecta 4 (React)',
    mouseFollower: 'Seguidor de Cursor (React)',
    carrito: 'Carrito de compras (React)',
    tareas: 'Organizador de tareas (MERN)',
    
    // Skills
    skillsTitle: 'Skills',
    skillsDescription: 'Los años de estudio me han brindado variados conocimientos, aquí te muestro algunas de mis habilidades clave. Cada barra de progreso representa mi nivel de conocimiento en dicha tecnología.',
    
    // Contact
    contactTitle: 'Contacto',
    contactDescription: 'Si tenés alguna pregunta o comentario, por favor házmelo saber a través de este formulario. Estaré encantado de escucharte y responder a tus consultas.',
    contactNameLabel: 'Tu nombre',
    contactEmailLabel: 'Email',
    contactMessagePlaceholder: 'Escribe tu mensaje...',
    contactSendButton: 'Enviar',
    contactSuccessMessage: '¡El correo se envió con éxito!',
    contactErrorMessage: '¡Ups! Hubo un error al enviar el correo.',
    
    // Language toggle
    language: 'Idioma',
    spanish: 'Español',
    english: 'English'
  },
  en: {
    // Navbar
    home: 'Home',
    aboutMe: 'About Me',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
    menu: 'Menu',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    
    // Intro
    hello: 'Hello,',
    iAm: "I'm",
    name: 'Alan',
    profession: 'Software Developer',
    introDescription: "I'm passionate about software development, always seeking creative inspiration and eager to acquire new knowledge. Each project is a new challenge that excites me to tackle. I'm always learning and exploring new ways to improve my skills. Ready to create something amazing together?",
    viewCV: 'View my CV',
    viewLinkedIn: 'View my LinkedIn',
    
    // About
    aboutTitle: 'About Me',
    aboutDescription: 'My journey has been diverse, having transitioned from both the beauty industry and the world of education. Over the years, I have acquired a wealth of experiences that now enrich my approach to software development. My time in the beauty sector allowed me to develop an aesthetic sensibility that I now apply to designing digital solutions. As a teacher, I learned the importance of sharing knowledge clearly, something I value greatly in my current work as a developer. With a programming foundation that I have been perfecting over time, I decided to follow my true passion for software development, which led me to resume my programming studies. Today, as a developer, I strive to integrate creativity, effective communication, and a user-centered approach in every project I undertake.',
    creativity: 'Creativity',
    creativityDescription: 'My experience in the beauty industry gave me a sense of design and aesthetics that I now apply in creating digital solutions, always seeking a combination of functionality and aesthetics.',
    communication: 'Communication',
    communicationDescription: 'Teaching allowed me to develop skills to communicate effectively, a skill I transfer to software development to be able to share knowledge and collaborate clearly on technical projects.',
    userFocus: 'User Focus',
    userFocusDescription: 'My experience in different areas has taught me the importance of listening to and understanding user needs. This allows me to design software solutions that prioritize a smooth and user-centered experience.',
    
    // Works
    worksTitle: 'My Projects',
    worksDescription: 'Click on the images to see more about the projects I made.',
    worksButton: 'See more projects',
    
    // Project titles (for tooltips)
    turneraApp: 'Appointment Management (.NET)',
    veterinariaApp: 'Veterinary Management (.NET)',
    universidadApp: 'SIU Diaguita - University Management (PHP)',
    stockCompras: 'Sales and Stock Control (Java)',
    buscadorClima: 'Weather Finder (React)',
    buscadorPeliculas: 'Movie Finder (React)',
    logoX: 'X Component (React)',
    taTeTi: 'Tic Tac Toe (React)',
    conectaCuatro: 'Connect 4 (React)',
    mouseFollower: 'Cursor Follower (React)',
    carrito: 'Shopping Cart (React)',
    tareas: 'Task Organizer (MERN)',
    
    // Skills
    skillsTitle: 'Skills',
    skillsDescription: 'Years of study have given me diverse knowledge, here I show you some of my key skills. Each progress bar represents my level of knowledge in that technology.',
    
    // Contact
    contactTitle: 'Contact',
    contactDescription: 'If you have any questions or comments, please let me know through this form. I will be happy to hear from you and respond to your inquiries.',
    contactNameLabel: 'Your name',
    contactEmailLabel: 'Email',
    contactMessagePlaceholder: 'Write your message...',
    contactSendButton: 'Send',
    contactSuccessMessage: 'The email was sent successfully!',
    contactErrorMessage: 'Oops! There was an error sending the email.',
    
    // Language toggle
    language: 'Language',
    spanish: 'Español',
    english: 'English'
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
