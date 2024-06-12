import React from 'react';

import styles from '../../../styles/About.module.css';

import Container from '../../global/Container';
import Subtitle from '../../global/Subtitle';
import Triplet from './components/Triplet';
import AboutItems from './components/AboutItems';
import Icon from '../../global/Icon';

const About = () => {
  const subMargin = {
    margin: '100px 0 50px 0',
  };

  return (
    <section id="aboutSection" className={styles.about}>
      <Container>
        <Subtitle
          style={subMargin}
          className={styles.subtitle}
          text="Про нас"
        />

        <div className={styles.aboutContainer}>
          <Triplet />
          <AboutItems />
        </div>

        <div className={styles.leafWrapper}>
          <Icon spriteId="leaf" />
        </div>

        <div className={styles.stonesWrapper}>
          <Icon spriteId="stones" />
        </div>
      </Container>
    </section>
  );
};

export default About;
