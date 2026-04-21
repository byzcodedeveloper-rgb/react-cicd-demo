import React from 'react';

const Colaboradores = () => {
  const colaboradores = [
    { nombre: "Juan Pérez", rol: "CEO & Fundador" },
    { nombre: "María García", rol: "CTO" },
    { nombre: "Carlos López", rol: "Lead Developer" },
    { nombre: "Ana Martínez", rol: "Project Manager" }
  ];

  return (
    <div className="section-container">
      <h2 className="section-title">Colaboradores</h2>
      <p className="section-subtitle">El equipo detrás de ByZcode</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
        {colaboradores.map((c, i) => (
          <div key={i} style={{ background: '#1a1a3e', padding: '1.5rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>👤</div>
            <h3 style={{ color: '#ff6b35' }}>{c.nombre}</h3>
            <p style={{ color: '#cccccc' }}>{c.rol}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colaboradores;