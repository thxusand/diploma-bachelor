import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import styles from '../../styles/TopButton.module.css';

import Icon from './Icon';

const TopButton = () => {
  const [isTop, setIsTop] = useState(true);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.topButton} ${
        isTop ? styles.buttonHidden : styles.buttonVisible
      }`}
    >
      <div className={styles.iconWrapper}>
        <Icon spriteId="buttonArrow" />
      </div>
    </button>
  );
};

export default TopButton;
