import React from 'react';

import styles from '../../../styles/ContactSection.module.css';

import Container from '../../global/Container';
import Icon from '../../global/Icon';
import Subtitle from '../../global/Subtitle';
import Form from '../../global/Form';
import ContactField from './components/ContactField';

const Contacts = () => {
  return (
    <section id="contactSection" className={styles.contacts}>
      <Container className={styles.container}>
        <div className={styles.contactsWrapper}>
          <div className={styles.formWrapper}>
            <Form />
          </div>

          <div className={styles.textWrapper}>
            <Subtitle text="Зв’язатись з нами" />

            <p className={styles.text}>
              Якщо у вас залишились питання - заповніть форму та ми з вами
              зв’яжемось якомога швидше.
            </p>

            <div className={styles.line} />

            <div className={styles.fieldsWrapper}>
              <ContactField
                link="#!"
                firstItem="Адреса"
                secondItem="м. Київ, вул. Шевченка, буд. 10  07500"
              />
              <ContactField
                link="#!"
                firstItem="Пошта"
                secondItem="wellness-oasis@gmail.com"
              />
              <ContactField
                link="#!"
                firstItem="Тел"
                secondItem="+380 00 000 00 00"
              />
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.lotusWrapper}>
        <Icon className={styles.lotus} spriteId="lotus" />
      </div>
    </section>
  );
};

export default Contacts;
