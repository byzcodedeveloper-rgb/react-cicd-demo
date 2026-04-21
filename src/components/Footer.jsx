import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Redes sociales
  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/byzcode', icon: '📘' },
    { name: 'Instagram', url: 'https://instagram.com/byzcode', icon: '📷' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/byzcode', icon: '🔗' },
    { name: 'Twitter', url: 'https://twitter.com/byzcode', icon: '🐦' },
    { name: 'GitHub', url: 'https://github.com/byzcode', icon: '💻' }
  ];

  // Enlaces rápidos
  const quickLinks = [
    { name: 'Inicio', id: 'inicio' },
    { name: 'Quiénes Somos', id: 'quienes-somos' },
    { name: 'Servicios', id: 'servicios' },
    { name: 'Proyectos', id: 'proyectos' },
    { name: 'Contacto', id: 'contacto' }
  ];

  // Enlaces legales
  const legalLinks = [
    { name: 'Política de Privacidad', url: '/privacidad' },
    { name: 'Términos y Condiciones', url: '/terminos' },
    { name: 'Aviso Legal', url: '/aviso-legal' },
    { name: 'Política de Cookies', url: '/cookies' }
  ];

  // Función para scroll suave
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Columna 1 - Información de la empresa */}
        <div className="footer-col">
          <h3 className="footer-logo">ByZcode</h3>
          <p className="footer-description">
            Innovación y Desarrollo Tecnológico a tu Medida. 
            Creamos soluciones de software, aplicaciones, automatización y redes 
            que impulsan tu negocio al siguiente nivel.
          </p>
          <div className="footer-social">
            <h4>Síguenos</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Columna 2 - Contacto */}
        <div className="footer-col">
          <h4>Contacto</h4>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <strong>Email</strong>
                <a href="mailto:info@byzcode.com">info@byzcode.com</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <strong>Teléfono</strong>
                <a href="tel:+573001234567">+57 300 123 4567</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💬</span>
              <div>
                <strong>WhatsApp</strong>
                <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer">
                  +57 300 123 4567
                </a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <strong>Ubicación</strong>
                <span>Bogotá, Colombia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Columna 3 - Enlaces rápidos */}
        <div className="footer-col">
          <h4>Enlaces Rápidos</h4>
          <ul className="footer-links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 4 - Legales */}
        <div className="footer-col">
          <h4>Legales</h4>
          <ul className="footer-links">
            {legalLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
          <div className="footer-certificaciones">
            <p>🔒 Sitio seguro</p>
            <p>✨ Certificado SSL</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {currentYear} ByZcode - Todos los derechos reservados.</p>
          <p className="footer-credits">
            Desarrollado con ❤️ en React + CI/CD | Despliegue continuo en Render
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;