import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./ExercicioTres.css";

// Componente Home com botão de redirecionamento
const Home = () => {
  const navigate = useNavigate();

  const irParaSobre = () => {
    navigate("/sobre");
  };

  return (
    <div className="pagina home">
      <h2>Página Inicial</h2>
      <p>Clique no botão abaixo para ir para a página Sobre</p>
      <button onClick={irParaSobre} className="botao-redirecionar">
        Ir para Sobre
      </button>
    </div>
  );
};

// Componente Sobre
const Sobre = () => {
  const navigate = useNavigate();

  return (
    <div className="pagina sobre">
      <h2>Página Sobre</h2>
      <p>Esta é a página sobre nosso projeto!</p>
      <button onClick={() => navigate("/")} className="botao-redirecionar">
        Voltar para Home
      </button>
    </div>
  );
};

const ExercicioTres: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default ExercicioTres;
