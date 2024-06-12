import React from 'react';

import styles from '../../styles/Map.module.css';

const Map = () => {
  return (
    <div id="mapSection" className={styles.map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.4534636761305!2d30.510916011916187!3d50.45127998718589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf76002ef677%3A0xc170267526b38c4a!2z0JzQsNGB0YHQsNC2INCa0LjQtdCyIC0g0KHRgtGD0LTRltGPIE1hc3NhZ2UgQ2x1Yg!5e0!3m2!1sru!2sua!4v1716500409148!5m2!1sru!2sua"
        title="map"
        width="100%"
        height="100%"
        style={{ border: '0' }}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
