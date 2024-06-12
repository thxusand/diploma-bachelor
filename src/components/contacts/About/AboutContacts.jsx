import React from 'react';

import styles from '../../../styles/AboutContacts.module.css';

import Container from '../../global/Container';
import ContactsItem from './components/ContactsItem';

const AboutContacts = () => {
  return (
    <section className={styles.about}>
      <Container className={styles.container}>
        <div className={styles.infoWrapper}>
          <ContactsItem image="star" subtitle="Про нас">
            Наш реабілітаційний центр надає індивідуальні програми фізіотерапії
            та психологічної підтримки в природному середовищі.
          </ContactsItem>
          <ContactsItem image="clock" subtitle="Графік роботи">
            Пн - Сб: 9:00 – 22:00
            <br />
            Неділя: Зачинено
          </ContactsItem>
          <ContactsItem image="marker" subtitle="Де ми розташовані">
            м. Київ, вул. Шевченка, буд. 10 07500
            <br />
            Пошта: mail@gmail.com
            <br />
            Телефон: +380 00 000 00 00
          </ContactsItem>
        </div>
      </Container>
    </section>
  );
};

export default AboutContacts;
