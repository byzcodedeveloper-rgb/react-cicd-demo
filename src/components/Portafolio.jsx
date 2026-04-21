import React from 'react';

const Portafolio = () => {
  const proyectos = [
    { nombre: "E-commerce Platform", desc: "Plataforma de ventas en línea" },
    { nombre: "Sistema de Automatización", desc: "Workflows inteligentes" },
    { nombre: "App de Delivery", desc: "Aplicación móvil para pedidos" },
    { nombre: "Dashboard Analytics", desc: "Visualización de datos en tiempo real" }
  ];

  return (
    <div className="section-container">
      <h2 className="section-title">Portafolio</h2>
      <p className="section-subtitle">Nuestros trabajos más recientes</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {proyectos.map((p, i) => (
          <div key={i} style={{ background: '#1a1a3e', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
            <h3 style={{ color: '#ff6b35' }}>{p.nombre}</h3>
            <p style={{ color: '#cccccc' }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portafolio;