import React from 'react';

import styles from '../../../../styles/Card.module.css';

const Card = (props) => {
  return (
    <div className={`${styles.card} ${props.cardClass}`}>
      <a href={props.cardLink}>
        <h3 className={styles.cardTitle}>{props.title}</h3>
        <div className={styles.btn}>
          <span>Детальніше</span>
        </div>
      </a>
    </div>
  );
};

export default Card;
