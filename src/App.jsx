import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// Importar todos los componentes (los crearé a continuación)
import Inicio from './components/Inicio';
import ServiciosDesarrollo from './components/ServiciosDesarrollo';
import ServiciosRedes from './components/ServiciosRedes';
import Portafolio from './components/Portafolio';
import Colaboradores from './components/Colaboradores';
import Mision from './components/Mision';
import Vision from './components/Vision';
import QuienesSomos from './components/QuienesSomos';
import Contactenos from './components/Contactenos';
import ProyectosActivos from './components/ProyectosActivos';
import ProyectosProceso from './components/ProyectosProceso';
import TrabajosFuturos from './components/TrabajosFuturos';
import Galeria from './components/Galeria';

function App() {
  // Efecto para el scroll suave con offset del navbar
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const targetId = e.target.getAttribute('href')?.slice(1);
      if (targetId && document.getElementById(targetId)) {
        e.preventDefault();
        const element = document.getElementById(targetId);
        const offset = 120; // Altura del navbar (dos filas)
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        {/* SECCIONES DEL MENÚ PRINCIPAL */}
        <section id="inicio" className="section">
          <Inicio />
        </section>

        <section id="servicios-desarrollo" className="section">
          <ServiciosDesarrollo />
        </section>

        <section id="servicios-redes" className="section">
          <ServiciosRedes />
        </section>

        <section id="portafolio" className="section">
          <Portafolio />
        </section>

        <section id="colaboradores" className="section">
          <Colaboradores />
        </section>

        <section id="mision" className="section">
          <Mision />
        </section>

        <section id="vision" className="section">
          <Vision />
        </section>

        <section id="quienes-somos" className="section">
          <QuienesSomos />
        </section>

        <section id="contactenos" className="section">
          <Contactenos />
        </section>

        {/* SECCIONES DEL SUBMENÚ */}
        <section id="proyectos-activos" className="section">
          <ProyectosActivos />
        </section>

        <section id="proyectos-proceso" className="section">
          <ProyectosProceso />
        </section>

        <section id="trabajos-futuros" className="section">
          <TrabajosFuturos />
        </section>

        <section id="galeria" className="section">
          <Galeria />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
