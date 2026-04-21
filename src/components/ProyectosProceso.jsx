import React from 'react';

const ProyectosProceso = () => {
  const proyectos = [
    "Marketplace Internacional",
    "App de Finanzas Personales",
    "Sistema de IoT Industrial"
  ];

  return (
    <div className="section-container" style={{ textAlign: 'center' }}>
      <h2 className="section-title">Proyectos en Proceso</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
        {proyectos.map((p, i) => (
          <div key={i} style={{ background: '#1a1a3e', padding: '1rem', borderRadius: '8px' }}>🔄 {p}</div>
        ))}
      </div>
    </div>
  );
};

export default ProyectosProceso;