import React from 'react';

import styles from '../../styles/Contacts.module.css';

import Map from '../global/Map';
import Footer from '../global/Footer';
import Nav from '../global/Nav';
import HeaderContacts from './Header/HeaderContacts';
import AboutContacts from './About/AboutContacts';
import Form from '../global/Form';
import Subtitle from '../global/Subtitle';
import Icon from '../global/Icon';
import TopButton from '../global/TopButton';

const Contacts = () => {
  return (
    <>
      <Nav
        link1="Головна"
        link2="Новини"
        link3="Контакти"
        link4="Послуги"
        path1="/"
        path2="/blog"
        path3="/contacts"
        weekDay1="Пн"
        weekDay2="Сб"
        hours1="9:00"
        hours2="22:00"
        phoneNumber="380 00 000 00 00"
      />
      <HeaderContacts title="Контакти" />
      <AboutContacts />
      <div className={styles.contactsContainer}>
        <div className={styles.form}>
          <Subtitle text="Залишились питання?" className={styles.subtitle} />
          <div className={styles.formWrapper}>
            <Form />
          </div>
          <div className={styles.iconWrapper}>
            <Icon spriteId="miniLotus" />
          </div>
        </div>
        <div className={styles.mapWrapper}>
          <Map />
        </div>
      </div>
      <TopButton />
      <Footer currentYear="2024" />
    </>
  );
};

export default Contacts;
