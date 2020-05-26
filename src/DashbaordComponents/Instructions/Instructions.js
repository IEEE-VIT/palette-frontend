import React from 'react';
import DLD from '../../assets/images/dld-logo.svg';

import './Instructions.css';

const Instructions = () => {
    return(
        <div className="instructions">
            <div>
                <div className="instructions-title">
                    <strong>Instructions</strong>
                </div>

                <div className="instructions-list">
                    <ul> 
                        <li>Your problem statments will be randomly generated. You will be given three tries to generate your problem statement. You can confirm your problem statement on any of the tries but after three tries, the third one will be final.</li>
                        <li>You can not generate new problem statements once you finalise on a problem statement you want to go with. Do not logout until your problem statement has been selected.</li>
                        <li>For any guidance or queries, kindly ping us on Slack or email to design@ieeevit.org </li>
                    </ul>
                </div>
            </div>
            <a href="https://deeplearningdemystified.com/" target="__blank" rel="noopener noreferrer"><img src={DLD} alt="dld" className="dld-logo" /></a>
        </div>
    )
}

export default Instructions;