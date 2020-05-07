import React from 'react';
import Countdown, { formatTimeDelta } from 'react-countdown';

const Completionist = () => <span>Begun!</span>

const renderer = ({days, hours, minutes, seconds, completed }) => {
    const daysss = "d";
    if (completed) {
      return <Completionist />
    } else {
      return <span> {days} {daysss} {formatTimeDelta(hours)}:{formatTimeDelta(minutes)}:{formatTimeDelta(seconds)} </span>
    }
};

const PaletteTitle = () => {
    return(
        <div>
            <h1><strong> Palette '20 </strong></h1>
            <h4>begins in  <Countdown
                  date={'2020-05-22T10:00:00'}
                  formatTimeDelta={renderer}
              />
            </h4>
        </div>
    )
}

export default PaletteTitle;