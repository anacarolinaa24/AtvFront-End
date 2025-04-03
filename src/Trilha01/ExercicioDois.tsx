import React from "react";
import styles from "../Trilha01/ExercicioDois";

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
    <div className={styles.card}>
      <img src={imageUrl} alt={name} className={styles.image} />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ExercicioDois;
