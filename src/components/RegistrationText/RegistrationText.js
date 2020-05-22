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
            Registrations have closed.
        </p>
    )
}

export default RegistrationText;