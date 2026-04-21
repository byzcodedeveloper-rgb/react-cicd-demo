import React from 'react';
import './Tecnologias.css';

const Tecnologias = () => {
  const tecnologias = [
    "React", "Node.js", "Python", "Docker",
    "MongoDB", "PostgreSQL", "GitHub Actions", "AWS"
  ];

  return (
    <div className="tecnologias-container">
      <div className="container">
        <h2>Tecnologías que Utilizamos</h2>
        <p className="section-subtitle">Stack moderno y escalable</p>
        <div className="tecnologias-grid">
          {tecnologias.map((tech, index) => (
            <div key={index} className="tech-badge">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tecnologias;