import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import styles from '../../styles/Nav.module.css';

import Logo from './Logo';
import Icon from './Icon';
import DropDown from './DropDown';

const Nav = (props) => {
  const [isTop, setIsTop] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    if (focused) {
      buttonRef.current.blur();
    } else {
      buttonRef.current.focus();
    }
    setFocused(!focused);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
      setFocused(false);
    }
  };

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className={`${styles.nav} ${isTop ? '' : styles.navScrolled}`}>
      <div className={styles.navContainer}>
        <div onClick={scrollToTop} className={styles.logoWrapper}>
          <Logo style={styles.logo} content="Wellness Oasis" />
        </div>

        <ul className={styles.links}>
          <li className={`${styles.linkItem} ${styles.menu}`} ref={dropdownRef}>
            <button
              ref={buttonRef}
              onClick={toggleDropdown}
              className={`${styles.menuLink} ${
                dropdownOpen ? styles.active : ''
              }`}
            >
              <span className={styles.link}>{props.link1}</span>
              <div className={styles.iconWrapper}>
                <Icon className={styles.arrow} spriteId="dropdown" />
              </div>
            </button>
            {dropdownOpen && (
              <DropDown
                className={`${styles.dropDown} ${
                  dropdownOpen ? styles.open : ''
                }`}
              />
            )}
          </li>
          <li className={styles.linkItem}>
            <Link
              to={props.path2}
              onClick={scrollToTop}
              className={styles.link}
            >
              {props.link2}
            </Link>
          </li>
          <li className={styles.linkItem}>
            <Link
              to={props.path3}
              onClick={scrollToTop}
              className={styles.link}
            >
              {props.link3}
            </Link>
          </li>
          <li className={styles.linkItem}>
            <Link
              to={props.path4}
              onClick={scrollToTop}
              className={styles.link}
            >
              {props.link4}
            </Link>
          </li>
        </ul>

        <div className={styles.infoWrapper}>
          <p className={styles.workingHours}>
            <span>{props.weekDay1}</span>-<span>{props.weekDay2}</span>:&nbsp;
            <span>{props.hours1}</span> - <span>{props.hours2}</span>
          </p>
          <a href="#!" className={styles.phone}>
            +{props.phoneNumber}
          </a>
        </div>

        <button className={styles.burgerWrapper}>
          <Icon className={styles.burger} spriteId="burger" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
