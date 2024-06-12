import React from 'react';

import styles from '../../styles/Home.module.css';

import Header from './Header/Header';
import About from './About/About';
import Favors from './Favors/Favors';
import Masseuses from './Masseuses/Masseuses';
import Testimonials from './Testimonials/Testimonials';
import Contacts from './Contacts/Contacts';
import Map from '../global/Map';
import Footer from '../global/Footer';
import Nav from '../global/Nav';
import TopButton from '../global/TopButton';

const Home = () => {
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
      <Header />
      <About />
      <Favors />
      <Masseuses />
      <Testimonials />
      <Contacts id="contactSection" />
      <div className={styles.mapWrapper}>
        <Map />
      </div>
      <TopButton />
      <Footer currentYear="2024" />
    </>
  );
};

export default Home;
