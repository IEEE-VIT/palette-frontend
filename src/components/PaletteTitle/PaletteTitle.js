import React from 'react';
import Countdown from 'on-react-countdown';

const PaletteTitle = () => {
  const text = {
    days: 'd',
    hours: 'h',
    minutes: 'm',
    seconds: 's',
  }
    return(
        <div>
            <h1><strong> Palette ‘20 </strong></h1>
            <h3>
              22 . 05 . 2020
            </h3>
        </div>
    )
}

export default PaletteTitle;