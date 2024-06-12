import React from 'react';

import styles from '../../../styles/Header.module.css';

import Container from '../../global/Container';

const Header = () => {
  return (
    <header id="headerSection" className={styles.header}>
      <Container>
        <h1 className={styles.title}>
          Ласкаво просимо до
          <br />
          <span className={styles.span}>оздоровчого оазису</span>
        </h1>
      </Container>
    </header>
  );
};

export default Header;
