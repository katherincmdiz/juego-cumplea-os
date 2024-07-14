import React from 'react';
import styles from './Inicio.module.css';
import Panel from '../../components/Panel/Panel';

const Inicio = () => {
  return (
    <div className={styles.containerInicio}>
      <img src="https://slovesno.com/wp-content/uploads/2023/06/happy-birthday-man-baloons-3.png" alt="fondo" />
      <Panel />
    </div>
  );
};

export default Inicio;

