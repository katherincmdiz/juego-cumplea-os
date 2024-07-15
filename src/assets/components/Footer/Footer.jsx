import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ onLeft, onRight, onShoot }) => {
  return (
    <div className={styles.footer}>
      <button onTouchStart={onLeft}>Left</button>
      <button onTouchStart={onRight}>Right</button>
      <button onTouchStart={onShoot}>Shoot</button>
    </div>
  );
};

export default Footer;
