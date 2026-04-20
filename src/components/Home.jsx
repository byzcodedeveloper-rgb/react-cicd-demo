import React from "react";
import './Home.css';

const Home = () => {
    return(
      <div className="home">
        <div className="card">
          <h2> Hola esto es una prueba de CI/CD</h2>
          <p>Este proyecto esta desplegado automaticamente con:</p>
          <ul>
              <li> React + Vite</li>
              <li> Docker</li>
              <li> Github Action (CI)</li>
              <li> Render (CD)</li>
          </ul>
          <p className="status"> Pipeline CI/CD activo</p>
        </div>
      </div>
    );
};

export default Home;