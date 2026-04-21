import React from 'react';

const ServiciosDesarrollo = () => {
  const servicios = [
    { title: "Desarrollo Web", desc: "Aplicaciones web modernas con React, Node.js y más." },
    { title: "Apps Móviles", desc: "Aplicaciones nativas y multiplataforma para iOS y Android." },
    { title: "Software a Medida", desc: "Soluciones personalizadas para tu negocio." },
    { title: "APIs y Microservicios", desc: "Arquitecturas escalables y eficientes." }
  ];

  return (
    <div className="section-container">
      <h2 className="section-title">Servicios de Desarrollo</h2>
      <p className="section-subtitle">Soluciones tecnológicas de vanguardia</p>
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

export default ServiciosDesarrollo;