import React from 'react';
import './Automatizacion.css';

const Automatizacion = () => {
  return (
    <div className="subseccion-container">
      <div className="container">
        <h1>Automatización</h1>
        <p className="subseccion-descripcion">
          Optimiza tus procesos con soluciones de automatización inteligente.
        </p>
        
        <div className="subseccion-grid">
          <div className="subseccion-card">
            <h3>🤖 RPA (Robotic Process Automation)</h3>
            <p>Automatización de tareas repetitivas con robots digitales.</p>
          </div>
          <div className="subseccion-card">
            <h3>📊 Workflows Automatizados</h3>
            <p>Flujos de trabajo inteligentes que agilizan operaciones.</p>
          </div>
          <div className="subseccion-card">
            <h3>🔗 Integraciones API</h3>
            <p>Conexión automática entre tus sistemas y aplicaciones.</p>
          </div>
          <div className="subseccion-card">
            <h3>📧 Automatización de Marketing</h3>
            <p>Email marketing, chatbots y campañas automatizadas.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automatizacion;