import React from 'react';
import Navbar from './components/Navbar';
import Bienvenida from './components/Bienvenida';
import Servicios from './components/Servicios';
import Tecnologias from './components/Tecnologias';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="bienvenida">
          <Bienvenida />
        </section>
        <section id="servicios">
          <Servicios />
        </section>
        <section id="tecnologias">
          <Tecnologias />
        </section>
        <section id="proyectos">
          <Proyectos />
        </section>
        <section id="contacto">
          <Contacto />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
