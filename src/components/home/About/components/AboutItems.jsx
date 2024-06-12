import React from 'react';

import styles from '../../../../styles/AboutItems.module.css';
import Icon from '../../../global/Icon';

const AboutItem = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
				<Icon className={props.svgClass} spriteId={props.svgId} />
			</div>

      <p className={styles.text}>{props.text}</p>
    </div>
  );
};

const AboutItems = () => {
  return (
    <div className={styles.grid}>
      <AboutItem
        svgId="services"
        svgClass="icon"
        text="Великий вибір послуг від майстрів найвищого класу"
      />
      <AboutItem
        svgId="hotStones"
        svgClass="icon"
        text="Масаж з гарячими каміннями по тайській методиці"
      />
      <AboutItem
        svgId="hygiene"
        svgClass="icon"
        text="Ретельне слідкування за гігієною при наданні послуг"
      />
      <AboutItem
        svgId="remedies"
        svgClass="icon"
        text="Натуральні засоби найвищої якості"
      />
    </div>
  );
};

export default AboutItems;
