import React from 'react';

const Galeria = () => {
  const imagenes = [1, 2, 3, 4, 5, 6];

  return (
    <div className="section-container" style={{ textAlign: 'center' }}>
      <h2 className="section-title">Galería</h2>
      <p className="section-subtitle">Nuestro trabajo en imágenes</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {imagenes.map((i) => (
          <div key={i} style={{ background: '#1a1a3e', padding: '3rem', borderRadius: '8px', textAlign: 'center' }}>
            🖼️ Proyecto {i}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;