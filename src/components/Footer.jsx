import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} ByZcode. Todos los derechos reservados.</p>
        <p>Desarrollado con React + CI/CD en Render</p>
        <p><a href="#inicio" className="footer-link">Volver arriba ↑</a></p>
      </div>
    </footer>
  );
};

export default Footer;