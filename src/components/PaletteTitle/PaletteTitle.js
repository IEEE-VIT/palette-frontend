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
            <h1><strong> Palette '20 </strong></h1>
            <h4>
              begins in <Countdown end={1589221800} wordsEndingOff={true} text={text} />
            </h4>
        </div>
    )
}

export default PaletteTitle;