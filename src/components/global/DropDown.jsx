import React from 'react';
import { Link } from 'react-scroll';

import styles from '../../styles/DropDown.module.css';

const DropDown = (props) => {
  return (
    <ul className={`${styles.dropDownList} ${props.className}`}>
      <li>
        <Link
          to="headerSection"
          spy={false}
          smooth={true}
          offset={0}
          duration={500}
          className={styles.anchor}
        >
          Головна
        </Link>
      </li>
      <li>
        <Link
          to="aboutSection"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className={styles.anchor}
        >
          Про нас
        </Link>
      </li>
      <li>
        <Link
          to="favorSection"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className={styles.anchor}
        >
          Топ послуги
        </Link>
      </li>
      <li>
        <Link
          to="specialistSection"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className={styles.anchor}
        >
          Наші майстри
        </Link>
      </li>
      <li>
        <Link
          to="testimonialSection"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className={styles.anchor}
        >
          Відгуки
        </Link>
      </li>
      <li>
        <Link
          to="contactSection"
          spy={false}
          smooth={true}
          offset={0}
          duration={500}
          className={styles.anchor}
        >
          Зв'язатись
        </Link>
      </li>
      <li>
        <Link
          to="mapSection"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className={styles.anchor}
        >
          Місцерозташування
        </Link>
      </li>
    </ul>
  );
};
export default DropDown;
