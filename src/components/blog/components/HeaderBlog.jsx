import React from 'react';

import styles from '../../../styles/HeaderBlog.module.css';

const HeaderBlog = (props) => {
  return (
    <header className={styles.header}>
      <h1>{props.title}</h1>
    </header>
  );
};

export default HeaderBlog;
