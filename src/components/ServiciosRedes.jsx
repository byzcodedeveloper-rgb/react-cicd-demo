import React from 'react';

const ServiciosRedes = () => {
  const servicios = [
    { title: "Infraestructura Cloud", desc: "AWS, Azure, Google Cloud - Diseño e implementación." },
    { title: "Seguridad Informática", desc: "Protección de datos y redes empresariales." },
    { title: "Redes Corporativas", desc: "Diseño y gestión de redes empresariales." },
    { title: "Soporte 24/7", desc: "Monitoreo y mantenimiento continuo." }
  ];

  return (
    <div className="section-container">
      <h2 className="section-title">Servicios de Redes</h2>
      <p className="section-subtitle">Infraestructura robusta y segura</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {servicios.map((s, i) => (
          <div key={i} style={{ background: '#1a1a3e', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ color: '#ff6b35', marginBottom: '0.5rem' }}>{s.title}</h3>
            <p style={{ color: '#cccccc' }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiciosRedes;