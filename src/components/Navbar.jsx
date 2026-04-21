import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios', dropdown: true },
    { id: 'tecnologias', label: 'Tecnologías' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const dropdownItems = [
    { id: 'desarrollo-software', label: 'Desarrollo de Software' },
    { id: 'aplicaciones-moviles', label: 'Aplicaciones Móviles' },
    { id: 'automatizacion', label: 'Automatización' },
    { id: 'redes-cloud', label: 'Redes y Cloud' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <a href="#inicio">ByZcode</a>
        </div>
        
        <div className="menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </div>
        
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {navItems.map(item => (
            <li 
              key={item.id} 
              className={item.dropdown ? 'dropdown' : ''}
              onMouseEnter={() => item.dropdown && setDropdownOpen(true)}
              onMouseLeave={() => item.dropdown && setDropdownOpen(false)}
            >
              {item.dropdown ? (
                <>
                  <span className="dropdown-trigger">
                    {item.label} <span className="arrow">▼</span>
                  </span>
                  <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                    {dropdownItems.map(subItem => (
                      <li key={subItem.id}>
                        <ScrollLink
                          to={subItem.id}
                          smooth={true}
                          duration={500}
                          offset={-70}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </ScrollLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <ScrollLink
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="active"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </ScrollLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;