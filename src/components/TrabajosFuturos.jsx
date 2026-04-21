import React from 'react';
import './TrabajosFuturos.css';

const TrabajosFuturos = () => {
  const proyectos = [
    { 
      nombre: "Plataforma de IA Generativa", 
      descripcion: "Creación de contenido automático con inteligencia artificial",
      impacto: "Alto",
      icono: "🤖"
    },
    { 
      nombre: "Metaverso Corporativo", 
      descripcion: "Espacios virtuales para reuniones y colaboración",
      impacto: "Medio",
      icono: "🌐"
    },
    { 
      nombre: "Blockchain para Supply Chain", 
      descripcion: "Trazabilidad y transparencia en la cadena de suministro",
      impacto: "Alto",
      icono: "⛓️"
    }
  ];

  return (
    <div className="seccion-container">
      <h2 className="seccion-titulo">🔮 Trabajos Futuros</h2>
      <p className="seccion-subtitulo">Innovaciones que estamos explorando</p>
      <div className="futuros-grid">
        {proyectos.map((proyecto, index) => (
          <div key={index} className="futuro-card">
            <div className="futuro-icono">{proyecto.icono}</div>
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.descripcion}</p>
            <span className={`impacto impacto-${proyecto.impacto.toLowerCase()}`}>
              Impacto {proyecto.impacto}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrabajosFuturos;