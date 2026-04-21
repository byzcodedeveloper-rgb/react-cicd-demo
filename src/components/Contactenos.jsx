import React, { useState } from 'react';

const Contactenos = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Mensaje enviado! Te contactaremos pronto.');
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div className="section-container" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 className="section-title">Contáctenos</h2>
      <p className="section-subtitle">¿Listo para empezar tu proyecto?</p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input type="text" name="nombre" placeholder="Nombre completo" value={formData.nombre} onChange={handleChange} required style={{ padding: '1rem', borderRadius: '8px', border: 'none' }} />
        <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} required style={{ padding: '1rem', borderRadius: '8px', border: 'none' }} />
        <textarea name="mensaje" placeholder="Mensaje" rows="5" value={formData.mensaje} onChange={handleChange} required style={{ padding: '1rem', borderRadius: '8px', border: 'none' }}></textarea>
        <button type="submit" className="btn-primary">Enviar Mensaje</button>
      </form>
    </div>
  );
};

export default Contactenos;