import React from 'react';
import './Servicios.css';

const Servicios = () => {
  const servicios = [
    { icon: "💻", title: "Desarrollo de Software", description: "Aplicaciones a medida, sistemas empresariales y soluciones web escalables." },
    { icon: "📱", title: "Aplicaciones Móviles", description: "Apps nativas y multiplataforma para iOS y Android con las mejores prácticas." },
    { icon: "🤖", title: "Automatización", description: "Procesos automatizados, bots inteligentes y workflows que optimizan tu negocio." },
    { icon: "🌐", title: "Redes y Cloud", description: "Infraestructura en la nube, redes seguras y escalables para tu empresa." }
  ];

  return (
    <div className="servicios-container">
      <div className="container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-subtitle">Soluciones tecnológicas integrales para tu negocio</p>
        <div className="servicios-grid">
          {servicios.map((item, index) => (
            <div key={index} className="servicio-card">
              <div className="servicio-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicios;