import React from 'react';

import styles from '../../../../styles/ContactField.module.css';

const ContactField = ({ firstItem, secondItem, link }) => {
  return (
    <div className={styles.fields}>
      <p className={styles.firstItem}>{firstItem}:</p>
      <a href={link} className={styles.secondItem}>
        {secondItem}
      </a>
    </div>
  );
};

export default ContactField;
