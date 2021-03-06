import React from 'react';
import Countdown from 'on-react-countdown';

import './DashboardTimer.css';

const DashboardTimer = () => {
    const text = {
        days: 'd',
        hours: 'h',
        minutes: 'm',
        seconds: 's',
      }
    return(
        <div className="dashboard-timer">
            {/* Round 2 ends in <span className="dashboard-time-together"><strong><Countdown end={1590217200} wordsEndingOff={true} text={text} /></strong></span> */}
            Round 1 ends in 1d 2h 3m 4s.
        </div>
    )
}

export default DashboardTimer;