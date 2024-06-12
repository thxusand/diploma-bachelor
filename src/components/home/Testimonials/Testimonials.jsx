import React from 'react';
import Slider from 'react-slick';

import styles from '../../../styles/Testimonials.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Container from '../../global/Container';
import Icon from '../../global/Icon';
import Button from '../../global/Button';
import Slide from './components/Slide';

const Testimonials = () => {
  const settings = {
    dots: true,
    dotsClass: `slick-dots ${styles.dots}`,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <section id="testimonialSection" className={styles.testimonials}>
      <Container className={styles.container}>
        <div className={styles.quotes}>
          <Icon spriteId="quotes" />
        </div>

        <Slider {...settings} className={styles.slider}>
          <Slide
            image="https://images.ctfassets.net/vztl6s0hp3ro/5l6tXP6NaoWULOqFDWoydh/34e9bb2cf490feeeff1439864c7995e3/7-types-of-employee-testimonials.jpg?fm=webp"
            text='Вражений візитом до "Wellness Oasis". Професіоналізм персоналу та затишна атмосфера вразили. Масаж перевершив очікування, даруючи відчуття розслаблення та енергетичного заряду. Чистота та порядок вразили стандартами санітарії. Дякую за чудовий досвід, обов&apos;язково повернусь і рекомендую всім!'
            name="Петро Ігнатенко"
          />
          <Slide
            image="https://www.prca.org.uk/sites/default/files/Machali%20Jameson%20-%20Headshot%20%282%29.jpg"
            text='Я відвідав салон "Wellness Oasis" і залишився дуже задоволений. Персонал професійний і дуже уважний до деталей. Масаж був надзвичайно розслабляючим і ефективним. Атмосфера в салоні сприяє відновленню душі і тіла. Рекомендую всім, хто шукає відмінний масаж!'
            name="Андрій Чубай"
          />
          <Slide
            image="https://st.depositphotos.com/62628780/60951/i/450/depositphotos_609517048-stock-photo-get-studio-portrait-attractive-older.jpg"
            text='Салон "Wellness Oasis" - прекрасне місце для відпочинку і розслаблення. Я отримала найкращий масаж у своєму житті! Майстер був дуже уважний до моїх потреб і вміло працював з моїми проблемними ділянками. Після сеансу я почувалася як нова людина. Обов&apos;язково повернуся сюди знову!'
            name="Оксана Кульбабка"
          />
        </Slider>

        <Button
          buttonLink="#!"
          content="Всі відгуки"
          className={styles.button}
        />
      </Container>
    </section>
  );
};

export default Testimonials;
