import React from 'react';
import Countdown from 'on-react-countdown';

import './RegistrationText.css';

const RegistrationText = () => {
  const text = {
    days: 'd',
    hours: 'h',
    minutes: 'm',
    seconds: 's',
  }
    return(
        <p className="regText">
            Registration starts in <strong><Countdown end={1589221800} wordsEndingOff={true} text={text} /></strong> which is just a few days away!
        </p>
    )
}

export default RegistrationText;