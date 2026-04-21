import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'bienvenida', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'tecnologias', label: 'Tecnologías' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'contacto', label: 'Contacto' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <a href="#bienvenida">ByZcode</a>
        </div>
        <ul className="nav-menu">
          {navItems.map(item => (
            <li key={item.id}>
              <ScrollLink
                to={item.id}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="active"
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;