import React from 'react';

import styles from '../../../../styles/Slide.module.css';

const Slide = ({ image, text, name }) => {
  return (
    <div className={styles.slide}>
      <img src={image} alt="User avatar" />
      <p>{text}</p>
      <span>- {name}</span>
    </div>
  );
};

export default Slide;
