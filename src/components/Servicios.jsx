import React from 'react';
import './Servicios.css';

const Servicios = () => {
  const servicios = [
    {
      icon: "💻",
      title: "Desarrollo de Software",
      description: "Aplicaciones a medida, sistemas empresariales y soluciones web."
    },
    {
      icon: "📱",
      title: "Aplicaciones Móviles",
      description: "Apps nativas y multiplataforma para iOS y Android."
    },
    {
      icon: "🤖",
      title: "Automatización",
      description: "Procesos automatizados, bots y workflows inteligentes."
    },
    {
      icon: "🌐",
      title: "Redes y Cloud",
      description: "Infraestructura en la nube, redes seguras y escalables."
    }
  ];

  return (
    <div className="servicios-container">
      <div className="container">
        <h2>Nuestros Servicios</h2>
        <p className="section-subtitle">Soluciones tecnológicas integrales</p>
        <div className="servicios-grid">
          {servicios.map((servicio, index) => (
            <div key={index} className="servicio-card">
              <div className="icon">{servicio.icon}</div>
              <h3>{servicio.title}</h3>
              <p>{servicio.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicios;