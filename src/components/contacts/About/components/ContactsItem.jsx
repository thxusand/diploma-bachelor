import React from 'react';

import styles from '../../../../styles/ContactsItem.module.css';
import Icon from '../../../global/Icon';

const ContactsItem = ({ image, subtitle, children }) => {
  return (
    <div className={styles.item}>
      <div className={styles.iconWrapper}>
        <Icon spriteId={image} />
      </div>

      <h2>{subtitle}</h2>

      <p>{children}</p>
    </div>
  );
};

export default ContactsItem;
