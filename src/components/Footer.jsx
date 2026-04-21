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
      <div className="footer-content">
        {/* Fila 1: Logo y descripción */}
        <div className="footer-brand">
          <h2 className="footer-logo">ByZcode</h2>
          <p className="footer-description">
            Innovación y Desarrollo Tecnológico a tu Medida.
          </p>
        </div>

        {/* Fila 2: Contacto y Redes Sociales */}
        <div className="footer-contact">
          <div className="contact-info">
            <div className="contact-item">
              <span>📧</span>
              <a href="mailto:info@byzcode.com">info@byzcode.com</a>
            </div>
            <div className="contact-item">
              <span>📞</span>
              <a href="tel:+573001234567">+57 300 123 4567</a>
            </div>
            <div className="contact-item">
              <span>💬</span>
              <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
            <div className="contact-item">
              <span>📍</span>
              <span>Bogotá, Colombia</span>
            </div>
          </div>

          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Fila 3: Enlaces rápidos */}
        <div className="footer-links-row">
          <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}>Inicio</a>
          <a href="#quienes-somos" onClick={(e) => { e.preventDefault(); scrollToSection('quienes-somos'); }}>Quiénes Somos</a>
          <a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('servicios'); }}>Servicios</a>
          <a href="#tecnologias" onClick={(e) => { e.preventDefault(); scrollToSection('tecnologias'); }}>Tecnologías</a>
          <a href="#proyectos" onClick={(e) => { e.preventDefault(); scrollToSection('proyectos'); }}>Proyectos</a>
          <a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}>Contacto</a>
        </div>

        {/* Fila 4: Copyright */}
        <div className="footer-copyright">
          <p>&copy; {currentYear} ByZcode - Todos los derechos reservados.</p>
          <p className="footer-credits">Desarrollado con React + CI/CD en Render</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;