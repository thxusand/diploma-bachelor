import React from 'react';
import sprite from '../../images/sprite.svg';

const Icon = ({ spriteId, className }) => {
  return (
    <svg style={{ width: '100%', height: '100%' }} className={className}>
      <use href={`${sprite}#${spriteId}`} />
    </svg>
  );
};

export default Icon;
