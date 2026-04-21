import React from 'react';
import './MisionVision.css';

const MisionVision = () => {
  return (
    <div className="mision-vision-container">
      <div className="container">
        <h2 className="section-title">Misión y Visión</h2>
        <p className="section-subtitle">Nuestro compromiso con la excelencia</p>
        
        <div className="mision-vision-grid">
          <div className="mision-card">
            <div className="card-icon">🎯</div>
            <h3>Misión</h3>
            <p>
              Impulsar el éxito de nuestros clientes a través de soluciones tecnológicas 
              innovadoras, personalizadas y escalables, superando sus expectativas y 
              contribuyendo a su crecimiento en el entorno digital.
            </p>
          </div>
          
          <div className="vision-card">
            <div className="card-icon">👁️</div>
            <h3>Visión</h3>
            <p>
              Ser líderes en el desarrollo de software y tecnología en la región, 
              reconocidos por nuestra calidad, innovación y compromiso con la 
              transformación digital de las empresas.
            </p>
          </div>
        </div>
        
        <div className="valores-section">
          <h3>Nuestros Valores</h3>
          <div className="valores-grid">
            <div className="valor-item">
              <span>💡</span>
              <h4>Innovación</h4>
              <p>Siempre a la vanguardia tecnológica</p>
            </div>
            <div className="valor-item">
              <span>🤝</span>
              <h4>Compromiso</h4>
              <p>Dedicación total a nuestros clientes</p>
            </div>
            <div className="valor-item">
              <span>⭐</span>
              <h4>Calidad</h4>
              <p>Excelencia en cada proyecto</p>
            </div>
            <div className="valor-item">
              <span>🔓</span>
              <h4>Transparencia</h4>
              <p>Comunicación clara y honesta</p>
            </div>
            <div className="valor-item">
              <span>🤝</span>
              <h4>Trabajo en Equipo</h4>
              <p>Colaboración y sinergia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MisionVision;