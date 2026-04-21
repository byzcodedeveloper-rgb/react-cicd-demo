import React from 'react';
import './Bienvenida.css';

const Bienvenida = () => {
  return (
    <div className="bienvenida-container">
      <div className="hero-content">
        <h1>Innovación y Desarrollo Tecnológico a tu Medida</h1>
        <p className="subtitle">
          Desarrollo de software, aplicaciones, automatización y redes.
          Creamos proyectos robustos y escalables que impulsan tu negocio al siguiente nivel.
        </p>
        <button className="btn" onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}>
          Comenzar Proyecto
        </button>
      </div>
      <div className="hero-decoration">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Bienvenida;