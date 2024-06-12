import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../styles/Logo.module.css';

const Logo = ({ content, style }) => {
  return (
    <h3 className={style}>
      <Link to="/" className={styles.logo}>
        {content}
      </Link>
    </h3>
  );
};

export default Logo;
