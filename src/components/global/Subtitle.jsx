import React from 'react';

import styles from '../../styles/Subtitle.module.css';

const Subtitle = (props) => {
  return (
    <h2 className={styles.subtitle} style={props.style}>
      {props.text}
    </h2>
  );
};

export default Subtitle;
