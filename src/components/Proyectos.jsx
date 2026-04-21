import React from 'react';
import './Proyectos.css';

const Proyectos = () => {
  const proyectos = [
    { nombre: "Sistema de Automatización", descripcion: "Flujos de trabajo automatizados para empresas", tags: ["Python", "Docker", "Redis"] },
    { nombre: "E-commerce Platform", descripcion: "Plataforma de ventas con pago integrado", tags: ["React", "Node.js", "MongoDB"] },
    { nombre: "Red Corporativa", descripcion: "Infraestructura de red segura y escalable", tags: ["Cisco", "AWS", "VPN"] },
    { nombre: "App Móvil Fitness", descripcion: "Seguimiento de entrenamiento y nutrición", tags: ["React Native", "Firebase"] }
  ];

  return (
    <div className="proyectos-container">
      <div className="container">
        <h2 className="section-title">Proyectos Recientes</h2>
        <p className="section-subtitle">Casos de éxito que hablan por sí mismos</p>
        <div className="proyectos-grid">
          {proyectos.map((proyecto, index) => (
            <div key={index} className="proyecto-card">
              <h3>{proyecto.nombre}</h3>
              <p>{proyecto.descripcion}</p>
              <div className="proyecto-tags">
                {proyecto.tags.map((tag, i) => (
                  <span key={i} className="proyecto-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyectos;