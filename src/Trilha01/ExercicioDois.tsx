import React from "react";
import "./ExercicioDois.css";

interface ProfileCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

const ExercicioDois: React.FC<ProfileCardProps> = ({
  name,
  description,
  imageUrl,
}) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} className="image" />
      <h2 className="name">{name}</h2>
      <p className="description">{description}</p>
    </div>
  );
};

export default ExercicioDois;
