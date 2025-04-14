import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./ExercicioUm.css";

const Home = () => (
  <div className="page">
    <h2>Página Inicial</h2>
    <p>Bem-vindo ao nosso site!</p>
  </div>
);

const About = () => (
  <div className="page">
    <h2>Sobre Nós</h2>
    <p>Somos uma empresa dedicada ao desenvolvimento web.</p>
  </div>
);

const Contact = () => (
  <div className="page">
    <h2>Contato</h2>
    <p>Entre em contato conosco pelo email: exemplo@email.com</p>
  </div>
);

const ExercicioUm: React.FC = () => {
  return (
    <Router>
      <div className="nav-container">
        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default ExercicioUm;
