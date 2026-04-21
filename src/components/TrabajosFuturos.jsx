import React from 'react';

const TrabajosFuturos = () => {
  const proyectos = [
    "Plataforma de IA Generativa",
    "Metaverso Corporativo",
    "Blockchain para Supply Chain"
  ];

  return (
    <div className="section-container" style={{ textAlign: 'center' }}>
      <h2 className="section-title">Trabajos Futuros</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
        {proyectos.map((p, i) => (
          <div key={i} style={{ background: '#1a1a3e', padding: '1rem', borderRadius: '8px' }}>🔮 {p}</div>
        ))}
      </div>
    </div>
  );
};

export default TrabajosFuturos;