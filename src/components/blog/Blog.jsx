import React from 'react';

import styles from '../../styles/Blog.module.css';

import Footer from '../global/Footer';
import Nav from '../global/Nav';
import HeaderBlog from './components/HeaderBlog';
import Subtitle from '../global/Subtitle';
import TopButton from '../global/TopButton';
import Container from '../global/Container';

const Blog = () => {
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
      <HeaderBlog title="Новини" />
      <section className={styles.blog}>
        <Container className={styles.container}>
          <div className={styles.subtitleWrapper}>
            <Subtitle text="Новини нашого центру" className={styles.subtitle} />
          </div>
          <div className={styles.facebookWrapper}>
            <iframe
              title="facebook"
              src="https://abb390dbcbe44e5b8182b777b9b79265.elf.site"
              width="100%"
              height="100%"
              frameborder="0"
            />
          </div>
        </Container>
      </section>
      <TopButton />
      <Footer currentYear="2024" />
    </>
  );
};

export default Blog;
