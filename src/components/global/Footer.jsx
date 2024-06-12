import React from 'react';

import styles from '../../styles/Footer.module.css';

import Icon from '../global/Icon';
import Logo from './Logo';

const Footer = ({ currentYear }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerWrapper}>
          <div className={styles.socialsWrapper}>
            <Logo style={styles.logo} content="Wellness Oasis" />

            <div className={styles.socials}>
              <a href="#!" className={styles.instagram}>
                <Icon spriteId="instagram" />
              </a>
              <a href="#!" className={styles.facebook}>
                <Icon spriteId="facebook" />
              </a>
              <a href="#!" className={styles.telegram}>
                <Icon spriteId="telegram" />
              </a>
            </div>
          </div>

          <ul className={styles.links}>
            <li className={styles.link}>
              <p className={styles.listHead}>Посилання</p>
            </li>
            <li className={styles.link}>
              <a href="#!">Головна</a>
            </li>
            <li className={styles.link}>
              <a href="#!">Новини</a>
            </li>
            <li className={styles.link}>
              <a href="#!">Контакти</a>
            </li>
            <li className={styles.link}>
              <a href="#!">Послуги</a>
            </li>
          </ul>

          <ul className={styles.contacts}>
            <li className={styles.contact}>
              <p className={styles.listHead}>Контакти</p>
            </li>
            <li className={styles.contact}>
              <a className={styles.icon} href="#!">
                <Icon spriteId="marker" />
              </a>
              <a href="#!" className={styles.address}>
                Україна, м. Київ вул. Шевченка, буд. 10 07500
              </a>
            </li>
            <li className={styles.contact}>
              <a className={styles.icon} href="#!">
                <Icon spriteId="mail" />
              </a>
              <a href="#!" className={styles.mail}>
                wellness-oasis@gmail.com
              </a>
            </li>
            <li className={styles.contact}>
              <a className={styles.icon} href="#!">
                <Icon spriteId="phone" />
              </a>
              <a href="#!" className={styles.telephone}>
                +380 00 000 0000
              </a>
            </li>
          </ul>
        </div>
        <p className={styles.copyright}>{currentYear} © Wellness Oasis</p>
      </div>
    </footer>
  );
};

export default Footer;
