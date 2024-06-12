import React from 'react';

import styles from '../../../styles/Masseuses.module.css';

import Subtitle from '../../global/Subtitle';
import Container from '../../global/Container';
import Icon from '../../global/Icon';
import Masseus from './components/Masseus';
import Button from '../../global/Button';

const Masseuses = () => {
  const subMargin = {
    margin: '100px 0 50px 0',
  };

  return (
    <section id="specialistSection" className={styles.masseuses}>
      <div className={styles.waveWrapper}>
        <Icon className={styles.wave} spriteId="waveBottom" />
      </div>

      <Container>
        <Subtitle
          style={subMargin}
          className={styles.subtitle}
          text="Наші майстри"
        />

        <div className={styles.masseusesContainer}>
          <a href="#!">
            <Masseus
              cardClass={styles.first}
              name="Євгенія Ключковська"
              title="Старший масажист"
            />
          </a>
          <a href="#!">
            <Masseus
              cardClass={styles.second}
              name="Дар’я Шевченко"
              title="Масажист"
            />
          </a>
          <a href="#!">
            <Masseus
              cardClass={styles.third}
              name="Марина Зибіна"
              title="Молодший масажист"
            />
          </a>
        </div>

        <Button buttonLink="#!" content="Всі майстри" />
      </Container>

      <div className={styles.bowlWrapper}>
        <Icon className={styles.bowl} spriteId="bowl" />
      </div>

      <div className={styles.flowerWrapper}>
        <Icon spriteId="flower" />
      </div>
    </section>
  );
};

export default Masseuses;
