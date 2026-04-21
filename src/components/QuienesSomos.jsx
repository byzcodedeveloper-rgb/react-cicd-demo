import React from 'react';
import './QuienesSomos.css';

const QuienesSomos = () => {
  return (
    <div className="quienes-somos-container">
      <div className="container">
        <h2 className="section-title">¿Quiénes Somos?</h2>
        <p className="section-subtitle">Conoce al equipo que impulsa tu negocio</p>
        
        <div className="quienes-somos-content">
          <div className="quienes-somos-texto">
            <p>
              En <strong>ByZcode</strong> somos un equipo apasionado por la tecnología y la innovación. 
              Nos especializamos en crear soluciones digitales que transforman negocios y mejoran la vida de las personas.
            </p>
            <p>
              Con años de experiencia en desarrollo de software, aplicaciones móviles, automatización e infraestructura en la nube, 
              ofrecemos servicios de alta calidad adaptados a las necesidades específicas de cada cliente.
            </p>
            <p>
              Nuestro compromiso es con la excelencia, la transparencia y la entrega de proyectos que superen las expectativas.
              Trabajamos con las últimas tecnologías y metodologías ágiles para garantizar resultados óptimos.
            </p>
            <div className="quienes-somos-valores">
              <div className="valor">
                <span>🎯</span>
                <h4>Misión</h4>
                <p>Impulsar el éxito de nuestros clientes a través de soluciones tecnológicas innovadoras y escalables.</p>
              </div>
              <div className="valor">
                <span>👁️</span>
                <h4>Visión</h4>
                <p>Ser referentes en desarrollo tecnológico, reconocidos por la calidad y confiabilidad de nuestras soluciones.</p>
              </div>
              <div className="valor">
                <span>💎</span>
                <h4>Valores</h4>
                <p>Innovación, compromiso, calidad, transparencia y trabajo en equipo.</p>
              </div>
            </div>
          </div>
          
          <div className="quienes-somos-stats">
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Años de Experiencia</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Proyectos Completados</span>
            </div>
            <div className="stat">
              <span className="stat-number">30+</span>
              <span className="stat-label">Clientes Satisfechos</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Soporte Técnico</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;