import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import "./ExercicioDois.css";

// Componente Animal que usa useParams
const Animal = () => {
  const { name } = useParams();

  return (
    <div className="animal-page">
      <h2>Página do Animal</h2>
      <div className="animal-card">
        <h3>Nome do Animal: {name}</h3>
        <p>Este é um {name} muito especial!</p>
      </div>
    </div>
  );
};

const ExercicioDois: React.FC = () => {
  const animais = ["cachorro", "gato", "papagaio", "hamster"];

  return (
    <Router>
      <div className="container">
        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {animais.map((animal) => (
              <li key={animal}>
                <Link to={`/animal/${animal}`}>{animal}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <div className="home-page">
                  <h2>Selecione um animal</h2>
                  <p>
                    Clique em um dos links acima para ver detalhes do animal.
                  </p>
                </div>
              }
            />
            <Route path="/animal/:name" element={<Animal />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default ExercicioDois;
