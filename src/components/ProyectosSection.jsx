import React from 'react';
import './ProyectosSection.css';

const ProyectosSection = () => {
  const proyectos = [
    {
      id: 1,
      titulo: "Proyectos Activos",
      descripcion: "Proyectos en desarrollo actualmente con nuestros clientes",
      icono: "🚀",
      color: "#ff6b35",
      enlace: "#proyectos-activos"
    },
    {
      id: 2,
      titulo: "Proyectos en Proceso",
      descripcion: "Proyectos que están en fase de desarrollo y pruebas",
      icono: "⚙️",
      color: "#00c2ba",
      enlace: "#proyectos-proceso"
    },
    {
      id: 3,
      titulo: "Trabajos Futuros",
      descripcion: "Próximos proyectos e innovaciones que estamos planeando",
      icono: "🔮",
      color: "#764ba2",
      enlace: "#trabajos-futuros"
    },
    {
      id: 4,
      titulo: "Galería",
      descripcion: "Muestra visual de nuestros proyectos y trabajos realizados",
      icono: "📸",
      color: "#2d6b5e",
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
    <div className="proyectos-section">
      <div className="seccion-header">
        <h2 className="seccion-titulo">Nuestros Proyectos</h2>
        <p className="seccion-subtitulo">Conoce el estado de nuestros trabajos</p>
      </div>
      
      <div className="tarjetas-grid">
        {proyectos.map((proyecto) => (
          <div 
            key={proyecto.id} 
            className="tarjeta-proyecto"
            style={{ borderBottom: `4px solid ${proyecto.color}` }}
            onClick={() => scrollToSection(proyecto.enlace.substring(1))}
          >
            <div className="tarjeta-icono" style={{ backgroundColor: `${proyecto.color}20` }}>
              <span>{proyecto.icono}</span>
            </div>
            <h3 className="tarjeta-titulo">{proyecto.titulo}</h3>
            <p className="tarjeta-descripcion">{proyecto.descripcion}</p>
            <button className="tarjeta-boton" style={{ color: proyecto.color }}>
              Ver más →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProyectosSection;