import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Innovación y Desarrollo Tecnológico a tu Medida</h1>
        <p className="hero-subtitle">
          Desarrollo de software, aplicaciones, automatización y redes. 
          Creamos proyectos robustos y escalables que impulsan tu negocio al siguiente nivel.
        </p>
        <button 
          className="btn-primary"
          onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Comenzar Proyecto
        </button>
      </div>
    </div>
  );
};

export default Hero;