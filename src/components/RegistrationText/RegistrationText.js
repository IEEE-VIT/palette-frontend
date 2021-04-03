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
      <div id="RegistrationText__div">
        <p className="regText">
            1st Place: Nomit Pahuja
        </p>
        <p className="regText">
            2nd Place: M Abiraami
        </p>
        <p className="regText">
            3rd Place: Kumar Rohit Chandra
        </p>
      </div>
    )
}

export default RegistrationText;