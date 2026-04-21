import React from 'react';
import './TarjetasProyectos.css';

const TarjetasProyectos = () => {
  const proyectos = [
    {
      id: 1,
      titulo: "Proyectos Activos",
      icono: "🚀",
      color: "#ff6b35",
      descripcion: "Proyectos en desarrollo actualmente",
      enlace: "#proyectos-activos"
    },
    {
      id: 2,
      titulo: "Proyectos en Proceso",
      icono: "⚙️",
      color: "#00c2ba",
      descripcion: "Proyectos en fase de desarrollo",
      enlace: "#proyectos-proceso"
    },
    {
      id: 3,
      titulo: "Trabajos Futuros",
      icono: "🔮",
      color: "#764ba2",
      descripcion: "Próximas innovaciones",
      enlace: "#trabajos-futuros"
    },
    {
      id: 4,
      titulo: "Galería",
      icono: "📸",
      color: "#2d6b5e",
      descripcion: "Nuestros trabajos",
      enlace: "#galeria"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="tarjetas-proyectos-container">
      <div className="tarjetas-grid">
        {proyectos.map((proyecto) => (
          <div 
            key={proyecto.id} 
            className="tarjeta-item"
            onClick={() => scrollToSection(proyecto.enlace.substring(1))}
          >
            <div className="tarjeta-icono" style={{ color: proyecto.color }}>
              {proyecto.icono}
            </div>
            <h3 className="tarjeta-titulo">{proyecto.titulo}</h3>
            <p className="tarjeta-descripcion">{proyecto.descripcion}</p>
            <div className="tarjeta-flecha" style={{ color: proyecto.color }}>
              →
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TarjetasProyectos;