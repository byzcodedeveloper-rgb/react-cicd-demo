import React from 'react';
import './DesarrolloSoftware.css';

const DesarrolloSoftware = () => {
  return (
    <div className="subseccion-container">
      <div className="container">
        <h1>Desarrollo de Software</h1>
        <p className="subseccion-descripcion">
          Creamos soluciones de software a medida que se adaptan perfectamente a las necesidades de tu negocio.
        </p>
        
        <div className="subseccion-grid">
          <div className="subseccion-card">
            <h3>🏢 Sistemas Empresariales</h3>
            <p>ERPs, CRMs y sistemas de gestión adaptados a tus procesos.</p>
          </div>
          <div className="subseccion-card">
            <h3>🌐 Aplicaciones Web</h3>
            <p>Plataformas web escalables con las últimas tecnologías.</p>
          </div>
          <div className="subseccion-card">
            <h3>⚙️ Automatización de Procesos</h3>
            <p>Optimización de flujos de trabajo y tareas repetitivas.</p>
          </div>
          <div className="subseccion-card">
            <h3>🔧 Mantenimiento y Soporte</h3>
            <p>Soporte continuo y mejora constante de tus sistemas.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesarrolloSoftware;