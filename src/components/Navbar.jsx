import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Elementos del menú principal
  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'quienes-somos', label: 'Quiénes Somos' },
    { id: 'mision-vision', label: 'Misión y Visión' },
    { id: 'servicios', label: 'Servicios', dropdown: true },
    { id: 'tecnologias', label: 'Tecnologías' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'contacto', label: 'Contacto' }
  ];

  // Elementos del submenú desplegable de Servicios
  const dropdownItems = [
    { id: 'desarrollo-software', label: 'Desarrollo de Software' },
    { id: 'aplicaciones-moviles', label: 'Aplicaciones Móviles' },
    { id: 'automatizacion', label: 'Automatización' },
    { id: 'redes-cloud', label: 'Redes y Cloud' }
  ];

  // Función para hacer scroll suave a una sección
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 70; // Altura del navbar fijo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    // Cerrar menú móvil después de hacer clic
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  // Cerrar menú móvil
  const closeMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
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
        
        {/* Icono menú hamburguesa (solo móvil) */}
        <div className="menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </div>
        
        {/* Menú de navegación */}
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li 
              key={item.id} 
              className={item.dropdown ? 'dropdown' : ''}
              onMouseEnter={() => item.dropdown && setDropdownOpen(true)}
              onMouseLeave={() => item.dropdown && setDropdownOpen(false)}
            >
              {item.dropdown ? (
                <>
                  {/* Item con desplegable */}
                  <span className="dropdown-trigger">
                    {item.label} <span className="arrow">▼</span>
                  </span>
                  <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                    {dropdownItems.map((subItem) => (
                      <li key={subItem.id}>
                        <a 
                          href={`#${subItem.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(subItem.id);
                          }}
                        >
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                /* Item normal sin desplegable */
                <a 
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={window.location.hash === `#${item.id}` ? 'active' : ''}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;