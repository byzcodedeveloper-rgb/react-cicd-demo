import React from 'react';
import './Inicio.css';

const Inicio = () => {
  return (
    <div className="inicio-container">
      <h1>ByZcode</h1>
      <p className="tagline">Innovación y Desarrollo Tecnológico a tu Medida</p>
      <p className="description">
        Desarrollo de software, aplicaciones, automatización y redes. 
        Creamos proyectos robustos y escalables que impulsan tu negocio.
      </p>
      <button 
        className="btn-primary"
        onClick={() => document.getElementById('contactenos')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Contáctanos
      </button>
    </div>
  );
};

export default Inicio;