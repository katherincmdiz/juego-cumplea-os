import React, { useState, useEffect, useRef } from 'react';
import styles from './Game.module.css';
import Player from '../../components/Player/Player';
import Enemigo from '../../components/Enemigo/Enemigo';
import bulletImage from '../../../../public/img/icono-favorito.png';

const Game = () => {
  const [playerPos, setPlayerPos] = useState({ x: 100, y: 0 });
  const [enemies, setEnemies] = useState([{ id: 1, x: 100, y: 0 }]);
  const [bullets, setBullets] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setPlayerPos(pos => ({ ...pos, x: pos.x - 10 }));
      } else if (e.key === 'ArrowRight') {
        setPlayerPos(pos => ({ ...pos, x: pos.x + 10 }));
      } else if (e.key === ' ') {
        shoot();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [playerPos]);

  const shoot = () => {
    setBullets([...bullets, { id: Date.now(), x: playerPos.x + 20, y: window.innerHeight - 100 }]);
  };

  useEffect(() => {
    const moveEnemies = setInterval(() => {
      setEnemies(enemies => enemies.map(enemy => ({ ...enemy, y: enemy.y + 5 })));
    }, 100);

    const moveBullets = setInterval(() => {
      setBullets(bullets => bullets.map(bullet => ({ ...bullet, y: bullet.y - 10 })));
    }, 50);

    const addEnemy = setInterval(() => {
      const randomX = Math.floor(Math.random() * window.innerWidth);
      setEnemies(enemies => [...enemies, { id: Date.now(), x: randomX, y: 0 }]);
    }, 2000);

    return () => {
      clearInterval(moveEnemies);
      clearInterval(moveBullets);
      clearInterval(addEnemy);
    };
  }, []);

  useEffect(() => {
    const checkCollisions = () => {
      bullets.forEach(bullet => {
        enemies.forEach(enemy => {
          if (
            bullet.x < enemy.x + 50 &&
            bullet.x + 10 > enemy.x &&
            bullet.y < enemy.y + 50 &&
            bullet.y + 10 > enemy.y
          ) {
            setEnemies(prevEnemies => prevEnemies.filter(e => e.id !== enemy.id));
            setBullets(prevBullets => prevBullets.filter(b => b.id !== bullet.id));
            setScore(prevScore => prevScore + 1);
          }
        });
      });
    };

    const interval = setInterval(checkCollisions, 50);
    return () => clearInterval(interval);
  }, [bullets, enemies, score]);



  return (
    <div className={styles.container}>
      <Player x={playerPos.x} y={playerPos.y} />
      {enemies.map(enemy => (
        <Enemigo key={enemy.id} x={enemy.x} y={enemy.y} />
      ))}
      {bullets.map(bullet => (
        <img
          key={bullet.id}
          src={bulletImage}
          alt="Bullet"
          className={styles.bullet}
          style={{ left: bullet.x, top: bullet.y }}
        />
      ))}
      <div className={styles.score}>Score: {score}</div>
    </div>
  );
};

export default Game;