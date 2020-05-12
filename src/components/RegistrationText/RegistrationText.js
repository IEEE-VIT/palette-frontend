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
            Registrations close in <strong className="timer-together"><Countdown end={1590100200} wordsEndingOff={true} text={text} /></strong>
        </p>
    )
}

export default RegistrationText;