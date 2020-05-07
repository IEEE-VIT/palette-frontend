import React from 'react';
import Countdown, { formatTimeDelta } from 'react-countdown';

import './RegistrationText.css';

const Completionist = () => <span>Begun!</span>

const renderer = ({days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />
    } else {
      return <span> {days} {hours} {minutes} {seconds} </span>
    }
};

const RegistrationText = () => {
    return(
        <p className="regText">
            Registration starts in <Countdown
                  date={'2020-05-12T00:00:00'}
                  formatTimeDelta={renderer}
              />  which is just a few days away!
        </p>
    )
}

export default RegistrationText;