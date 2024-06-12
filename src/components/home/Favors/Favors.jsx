import React from 'react';

import styles from '../../../styles/Favors.module.css';

import Container from '../../global/Container';
import Subtitle from '../../global/Subtitle';
import Icon from '../../global/Icon';
import Card from './components/Card';
import Button from '../../global/Button';

const Favors = () => {
  const subMargin = {
    margin: '100px 0 50px 0',
  };

  return (
    <section id="favorSection" className={styles.favors}>
      <div className={styles.waveWrapper}>
        <Icon className={styles.wave} spriteId="waveTop" />
      </div>

      <Container>
        <Subtitle
          style={subMargin}
          className={styles.subtitle}
          text="Топ послуги"
        />

        <div className={styles.favorsContainer}>
          <Card cardClass={styles.massage} title="Масаж спини" cardLink="#!" />
          <Card cardClass={styles.lifting} title="RF-ліфтинг" cardLink="#!" />
          <Card cardClass={styles.lfk} title="ЛФК" cardLink="#!" />
        </div>

        <Button buttonLink="#!" content="Повний список послуг" />
      </Container>
    </section>
  );
};

export default Favors;
