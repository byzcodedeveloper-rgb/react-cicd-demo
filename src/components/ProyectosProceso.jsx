import React from 'react';
import './ProyectosProceso.css';

const ProyectosProceso = () => {
  const proyectos = [
    { 
      nombre: "Marketplace Internacional", 
      descripcion: "Plataforma de comercio electrónico cross-border",
      fase: "Diseño UX/UI",
      fechaEstimada: "Junio 2026"
    },
    { 
      nombre: "App de Finanzas Personales", 
      descripcion: "Control de gastos e inversiones con IA",
      fase: "Desarrollo Backend",
      fechaEstimada: "Julio 2026"
    },
    { 
      nombre: "Sistema de IoT Industrial", 
      descripcion: "Monitoreo de maquinaria en tiempo real",
      fase: "Pruebas",
      fechaEstimada: "Mayo 2026"
    }
  ];

  return (
    <div className="seccion-container">
      <h2 className="seccion-titulo">⚙️ Proyectos en Proceso</h2>
      <p className="seccion-subtitulo">Proyectos en desarrollo y próximos a lanzar</p>
      <div className="proceso-grid">
        {proyectos.map((proyecto, index) => (
          <div key={index} className="proceso-card">
            <div className="proceso-estado">🔄 En desarrollo</div>
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.descripcion}</p>
            <div className="proceso-info">
              <span>📌 {proyecto.fase}</span>
              <span>📅 {proyecto.fechaEstimada}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProyectosProceso;