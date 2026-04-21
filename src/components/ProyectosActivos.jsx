import React from 'react';
import './ProyectosActivos.css';

const ProyectosActivos = () => {
  const proyectos = [
    { 
      nombre: "Sistema de Gestión Empresarial", 
      descripcion: "ERP completo para PYMEs con módulos de ventas, inventario y contabilidad",
      progreso: 85,
      estado: "activo"
    },
    { 
      nombre: "Plataforma de E-learning", 
      descripcion: "Cursos en línea con videoconferencias y certificaciones",
      progreso: 70,
      estado: "activo"
    },
    { 
      nombre: "App de Delivery", 
      descripcion: "Plataforma de pedidos a domicilio con geolocalización",
      progreso: 95,
      estado: "activo"
    },
    { 
      nombre: "Dashboard de Analytics", 
      descripcion: "Visualización de datos en tiempo real para empresas",
      progreso: 60,
      estado: "activo"
    }
  ];

  return (
    <div className="seccion-container">
      <h2 className="seccion-titulo">🚀 Proyectos Activos</h2>
      <p className="seccion-subtitulo">Proyectos en desarrollo actualmente</p>
      <div className="proyectos-grid">
        {proyectos.map((proyecto, index) => (
          <div key={index} className="proyecto-card activo">
            <div className="proyecto-icon">📊</div>
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.descripcion}</p>
            <div className="progreso-bar">
              <div className="progreso-fill" style={{ width: `${proyecto.progreso}%` }}></div>
            </div>
            <span className="progreso-texto">{proyecto.progreso}% completado</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProyectosActivos;