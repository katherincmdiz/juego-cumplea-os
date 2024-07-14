import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Panel.module.css';

const Panel = () => {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate('/juego');
  };

  return (
    <div className={styles.panel}>
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
};

export default Panel;

