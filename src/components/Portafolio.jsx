import React from 'react';
import './Portafolio.css';

const Portafolio = () => {
  const proyectos = [
    { nombre: "E-commerce Platform", desc: "Plataforma de ventas en línea con pagos integrados", tecnologia: "React, Node.js", icono: "🛒" },
    { nombre: "Sistema de Automatización", desc: "Workflows inteligentes para empresas", tecnologia: "Python, Docker", icono: "🤖" },
    { nombre: "App de Delivery", desc: "Aplicación móvil para pedidos a domicilio", tecnologia: "React Native, Firebase", icono: "📱" },
    { nombre: "Dashboard Analytics", desc: "Visualización de datos en tiempo real", tecnologia: "Vue.js, D3.js", icono: "📊" },
    { nombre: "Red Corporativa", desc: "Infraestructura de red empresarial", tecnologia: "Cisco, AWS", icono: "🌐" },
    { nombre: "Sistema IoT", desc: "Monitoreo industrial con sensores", tecnologia: "Arduino, MQTT", icono: "🔌" }
  ];

  return (
    <div className="seccion-container">
      <h2 className="seccion-titulo">📁 Portafolio</h2>
      <p className="seccion-subtitulo">Conoce nuestros proyectos destacados</p>
      <div className="portafolio-grid">
        {proyectos.map((proyecto, index) => (
          <div key={index} className="portafolio-card">
            <div className="portafolio-icono">{proyecto.icono}</div>
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.desc}</p>
            <span className="portafolio-tech">{proyecto.tecnologia}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portafolio;