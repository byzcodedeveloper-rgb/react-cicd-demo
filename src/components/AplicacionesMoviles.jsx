import React from 'react';
import './AplicacionesMoviles.css';

const AplicacionesMoviles = () => {
  return (
    <div className="subseccion-container">
      <div className="container">
        <h1>Aplicaciones Móviles</h1>
        <p className="subseccion-descripcion">
          Desarrollamos apps nativas y multiplataforma que conectan con tus usuarios.
        </p>
        
        <div className="subseccion-grid">
          <div className="subseccion-card">
            <h3>📱 iOS</h3>
            <p>Apps nativas para iPhone y iPad con Swift y SwiftUI.</p>
          </div>
          <div className="subseccion-card">
            <h3>🤖 Android</h3>
            <p>Aplicaciones para dispositivos Android con Kotlin y Jetpack.</p>
          </div>
          <div className="subseccion-card">
            <h3>⚡ Multiplataforma</h3>
            <p>React Native y Flutter para iOS y Android desde un solo código.</p>
          </div>
          <div className="subseccion-card">
            <h3>📲 Progressive Web Apps</h3>
            <p>Apps web que funcionan como nativas en cualquier dispositivo.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AplicacionesMoviles;