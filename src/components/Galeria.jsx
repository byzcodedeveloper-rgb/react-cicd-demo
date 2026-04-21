import React, { useState } from 'react';
import './Galeria.css';

const Galeria = () => {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const proyectos = [
    { id: 1, titulo: "E-commerce Platform", categoria: "Web", imagen: "🛒", descripcion: "Plataforma de ventas en línea" },
    { id: 2, titulo: "App de Delivery", categoria: "Móvil", imagen: "📱", descripcion: "Aplicación de pedidos a domicilio" },
    { id: 3, titulo: "Dashboard Analytics", categoria: "Web", imagen: "📊", descripcion: "Visualización de datos en tiempo real" },
    { id: 4, titulo: "Sistema IoT", categoria: "IoT", imagen: "🔌", descripcion: "Monitoreo industrial" },
    { id: 5, titulo: "Red Corporativa", categoria: "Redes", imagen: "🌐", descripcion: "Infraestructura empresarial" },
    { id: 6, titulo: "App Finanzas", categoria: "Móvil", imagen: "💰", descripcion: "Control de inversiones" }
  ];

  const categorias = ["Todos", "Web", "Móvil", "IoT", "Redes"];

  const [filtro, setFiltro] = useState("Todos");

  const proyectosFiltrados = filtro === "Todos" 
    ? proyectos 
    : proyectos.filter(p => p.categoria === filtro);

  return (
    <div className="seccion-container">
      <h2 className="seccion-titulo">📸 Galería de Proyectos</h2>
      <p className="seccion-subtitulo">Nuestros trabajos más destacados</p>

      {/* Filtros */}
      <div className="filtros-galeria">
        {categorias.map((cat, index) => (
          <button
            key={index}
            className={`filtro-btn ${filtro === cat ? 'activo' : ''}`}
            onClick={() => setFiltro(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de galería */}
      <div className="galeria-grid">
        {proyectosFiltrados.map((proyecto) => (
          <div 
            key={proyecto.id} 
            className="galeria-item"
            onClick={() => setImagenSeleccionada(proyecto)}
          >
            <div className="galeria-imagen">{proyecto.imagen}</div>
            <div className="galeria-overlay">
              <h4>{proyecto.titulo}</h4>
              <p>{proyecto.categoria}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para ver detalles */}
      {imagenSeleccionada && (
        <div className="modal" onClick={() => setImagenSeleccionada(null)}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icono">{imagenSeleccionada.imagen}</div>
            <h3>{imagenSeleccionada.titulo}</h3>
            <p>{imagenSeleccionada.descripcion}</p>
            <span className="modal-categoria">{imagenSeleccionada.categoria}</span>
            <button className="modal-cerrar" onClick={() => setImagenSeleccionada(null)}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeria;