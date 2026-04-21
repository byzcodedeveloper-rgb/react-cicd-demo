import React, { useState } from 'react';
import './Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes integrar un servicio de email
    alert('¡Mensaje enviado! Te contactaremos pronto.');
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div className="contacto-container">
      <div className="container">
        <h2>Contáctanos</h2>
        <p className="section-subtitle">¿Listo para llevar tu proyecto al siguiente nivel?</p>
        <div className="contacto-wrapper">
          <form onSubmit={handleSubmit} className="contacto-form">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="mensaje"
              placeholder="Cuéntanos sobre tu proyecto"
              rows="5"
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;