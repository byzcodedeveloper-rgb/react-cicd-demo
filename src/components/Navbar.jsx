import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Primera fila del menú
  const mainNavItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios-desarrollo', label: 'Servicios de Desarrollo' },
    { id: 'servicios-redes', label: 'Servicios de Redes' },
    { id: 'portafolio', label: 'Portafolio' },
    { id: 'colaboradores', label: 'Colaboradores' },
    { id: 'mision', label: 'Misión' },
    { id: 'vision', label: 'Visión' },
    { id: 'quienes-somos', label: 'Quiénes Somos' },
    { id: 'contactenos', label: 'Contáctenos' }
  ];

  // Segunda fila del menú (subcategorías)
  const subNavItems = [
    { id: 'proyectos-activos', label: 'Proyectos Activos' },
    { id: 'proyectos-proceso', label: 'Proyectos en Proceso' },
    { id: 'trabajos-futuros', label: 'Trabajos Futuros' },
    { id: 'galeria', label: 'Galería' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120; // Offset más grande por el menú de dos filas
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <a href="#inicio" onClick={(e) => {
            e.preventDefault();
            scrollToSection('inicio');
          }}>ByZcode</a>
        </div>

        {/* Botón menú hamburguesa (móvil) */}
        <div className="menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </div>

        {/* Menú desktop */}
        <div className={`nav-wrapper ${mobileMenuOpen ? 'active' : ''}`}>
          {/* Primera fila - Menú principal */}
          <ul className="nav-menu nav-menu-primary">
            {mainNavItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Segunda fila - Submenú */}
          <ul className="nav-menu nav-menu-secondary">
            {subNavItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;