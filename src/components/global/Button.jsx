import React from 'react';

import styles from '../../styles/Button.module.css';

const Button = (props) => {
  return (
    <div className={styles.buttonWrapper}>
      <a href={props.buttonLink} className={styles.button}>
        {props.content}
      </a>
    </div>
  );
};

export default Button;
