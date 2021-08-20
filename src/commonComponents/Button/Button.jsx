import React from 'react';

import './style.sass';

export function Button({ buttonText, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {buttonText}
    </button>
  );
}