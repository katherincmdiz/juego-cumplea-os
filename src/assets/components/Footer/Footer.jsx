import React from 'react';
import styles from './Footer.module.css';
import iconoRight from '../Footer/arrow-right.png';
import iconoLeft from '../Footer/arrow.png';
import disparo from '../Footer/targets.png';

const Footer = ({ onLeft, onRight, onShoot }) => {
  return (
    <div className={styles.footer}>
      <button onTouchStart={onLeft}>
        <img src={iconoLeft} alt="Left" className={styles.icon} />
      </button>
      <button onTouchStart={onShoot}>
        <img src={disparo} alt="Shoot" className={styles.icon} />
      </button>
      <button onTouchStart={onRight}>
        <img src={iconoRight} alt="Right" className={styles.icon} />
      </button>
    </div>
  );
};

export default Footer;

