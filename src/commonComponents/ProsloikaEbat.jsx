import React, { useState } from 'react';
import BurgerButton from './BurgerButton';

function ProsloikaEbat() {
    const [buttonActive, setButtonActive] = useState(false);
    return (
        <BurgerButton active={buttonActive} setActive={setButtonActive}> </BurgerButton>
    );
  }

export default ProsloikaEbat;