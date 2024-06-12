import React, { useRef } from 'react';

import styles from '../../../../styles/Masseus.module.css';

const Masseus = (props) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    card.style.transform = `rotateY(${x / 30}deg) rotateX(${-y / 30}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${styles.card} ${props.cardClass}`}
    >
      <div className={styles.textWrapper}>
        <p>{props.name}</p>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default Masseus;
