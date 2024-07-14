import React from 'react';
import enemyImage from '../../../../public/img/enemigo.png';

const Enemigo = ({ x, y }) => {
  return (
    <img src={enemyImage} alt="Enemy" style={{
      position: 'absolute',
      left: x,
      top: y,
      width: 60,
      height: 60
    }} />
  );
};

export default Enemigo;
