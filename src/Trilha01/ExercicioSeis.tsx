import React, { useState } from "react";
import ".ExercicioSeis.css";

const ExercicioSeis: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(
      `Mensagem enviada por ${formData.name} (${formData.email}): ${formData.message}`
    );
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Entre em Contato</h2>
      <input
        type="text"
        name="name"
        placeholder="Nome"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Sua mensagem"
        onChange={handleChange}
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ExercicioSeis;
