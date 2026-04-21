import React from 'react';

const QuienesSomos = () => {
  return (
    <div className="section-container" style={{ textAlign: 'center', maxWidth: '800px' }}>
      <h2 className="section-title">Quiénes Somos</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cccccc', marginBottom: '2rem' }}>
        ByZcode es una empresa de tecnología dedicada a la innovación y el desarrollo 
        de software. Nos apasiona crear soluciones que transforman negocios y mejoran 
        la vida de las personas.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <div><strong style={{ color: '#ff6b35' }}>5+</strong><br />Años</div>
        <div><strong style={{ color: '#ff6b35' }}>50+</strong><br />Proyectos</div>
        <div><strong style={{ color: '#ff6b35' }}>30+</strong><br />Clientes</div>
      </div>
    </div>
  );
};

export default QuienesSomos;