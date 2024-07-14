import React from 'react';
import playerImage from '../../../../public/img/jugador.png';

const Player = ({ x, y }) => {
  return (
    <img src={playerImage} alt="Player" style={{
      position: 'absolute',
      left: x,
      bottom: y,
      width: 80,
      height: 80,
      filter: 'drop-shadow(1px 1px 20px #1c0648)'

    }} />
  );
};

export default Player;
