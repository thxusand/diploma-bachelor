import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles/Container.module.css';

const Container = ({ children, className }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
