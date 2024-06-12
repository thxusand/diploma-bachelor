import React from 'react';

import styles from '../../../styles/HeaderContacts.module.css';

const HeaderContacts = (props) => {
  return (
    <header className={styles.header}>
      <h1>{props.title}</h1>
    </header>
  );
};

export default HeaderContacts;
