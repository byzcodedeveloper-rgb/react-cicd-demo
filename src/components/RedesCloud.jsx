import React from 'react';
import './RedesCloud.css';

const RedesCloud = () => {
  return (
    <div className="subseccion-container">
      <div className="container">
        <h1>Redes y Cloud</h1>
        <p className="subseccion-descripcion">
          Infraestructura robusta, segura y escalable en la nube.
        </p>
        
        <div className="subseccion-grid">
          <div className="subseccion-card">
            <h3>☁️ Infraestructura Cloud</h3>
            <p>AWS, Azure, Google Cloud - Diseño e implementación.</p>
          </div>
          <div className="subseccion-card">
            <h3>🔒 Seguridad en Redes</h3>
            <p>Firewalls, VPNs y protección de datos empresariales.</p>
          </div>
          <div className="subseccion-card">
            <h3>📡 Redes Empresariales</h3>
            <p>Diseño, implementación y monitoreo de redes corporativas.</p>
          </div>
          <div className="subseccion-card">
            <h3>🐳 DevOps y Containers</h3>
            <p>Docker, Kubernetes y CI/CD para despliegues ágiles.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedesCloud;