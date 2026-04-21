import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <a href="#inicio" onClick={closeMenu}>ByZcode</a>
        </div>
        
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
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
                          onClick={closeMenu}
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
                  onClick={closeMenu}
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