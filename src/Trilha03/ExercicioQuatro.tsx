import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";
import "./ExercicioQuatro.css";

// Interfaces
interface Quarto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  capacidade: number;
}

// Dados simulados
const quartos: Quarto[] = [
  {
    id: 1,
    nome: "Quarto Standard",
    descricao: "Quarto confortável com vista para a cidade",
    preco: 200,
    capacidade: 2,
  },
  {
    id: 2,
    nome: "Suíte Luxo",
    descricao: "Suíte espaçosa com vista para o mar",
    preco: 400,
    capacidade: 3,
  },
  {
    id: 3,
    nome: "Quarto Família",
    descricao: "Ideal para famílias, com área de estar",
    preco: 500,
    capacidade: 4,
  },
];

// Componentes
const Home = () => (
  <div className="page home">
    <h2>Bem-vindo ao Hotel React</h2>
    <p>Descubra o melhor em hospitalidade</p>
    <Link to="/quartos" className="botao">
      Ver Quartos
    </Link>
  </div>
);

const Rooms = () => (
  <div className="page rooms">
    <h2>Quartos Disponíveis</h2>
    <div className="room-grid">
      {quartos.map((quarto) => (
        <div key={quarto.id} className="room-card">
          <h3>{quarto.nome}</h3>
          <p>Capacidade: {quarto.capacidade} pessoas</p>
          <p>R$ {quarto.preco}/noite</p>
          <Link to={`/quarto/${quarto.id}`} className="botao">
            Ver Detalhes
          </Link>
        </div>
      ))}
    </div>
  </div>
);

const RoomDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const quarto = quartos.find((q) => q.id === Number(id));

  if (!quarto) return <div>Quarto não encontrado</div>;

  const fazerReserva = () => {
    navigate("/sucesso");
  };

  return (
    <div className="page room-details">
      <h2>{quarto.nome}</h2>
      <div className="room-info">
        <p>{quarto.descricao}</p>
        <p>Capacidade: {quarto.capacidade} pessoas</p>
        <p>Preço: R$ {quarto.preco}/noite</p>
        <button onClick={fazerReserva} className="botao reservar">
          Reservar Agora
        </button>
      </div>
    </div>
  );
};

const BookingSuccess = () => (
  <div className="page success">
    <h2>Reserva Confirmada!</h2>
    <p>Sua reserva foi realizada com sucesso.</p>
    <Link to="/" className="botao">
      Voltar para Home
    </Link>
  </div>
);

const ExercicioQuatro: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/quartos">Quartos</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quartos" element={<Rooms />} />
            <Route path="/quarto/:id" element={<RoomDetails />} />
            <Route path="/sucesso" element={<BookingSuccess />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default ExercicioQuatro;
