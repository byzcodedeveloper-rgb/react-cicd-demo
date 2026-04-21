import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuienesSomos from './components/QuienesSomos';
import MisionVision from './components/MisionVision';  // ← Importar
import Servicios from './components/Servicios';
import Tecnologias from './components/Tecnologias';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import DesarrolloSoftware from './components/DesarrolloSoftware';
import AplicacionesMoviles from './components/AplicacionesMoviles';
import Automatizacion from './components/Automatizacion';
import RedesCloud from './components/RedesCloud';
import './App.css';

function App() {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const targetId = e.target.getAttribute('href')?.slice(1);
      if (targetId && document.getElementById(targetId)) {
        e.preventDefault();
        document.getElementById(targetId).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
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
        <section id="inicio" className="section-hero">
          <Hero />
        </section>
        <section id="quienes-somos" className="section-quienes-somos">
          <QuienesSomos />
        </section>
        <section id="mision-vision" className="section-mision-vision">
          <MisionVision />  {/* ← Nueva sección */}
        </section>
        <section id="servicios" className="section-servicios">
          <Servicios />
        </section>
        <section id="desarrollo-software">
          <DesarrolloSoftware />
        </section>
        <section id="aplicaciones-moviles">
          <AplicacionesMoviles />
        </section>
        <section id="automatizacion">
          <Automatizacion />
        </section>
        <section id="redes-cloud">
          <RedesCloud />
        </section>
        <section id="tecnologias" className="section-tecnologias">
          <Tecnologias />
        </section>
        <section id="proyectos" className="section-proyectos">
          <Proyectos />
        </section>
        <section id="contacto" className="section-contacto">
          <Contacto />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
