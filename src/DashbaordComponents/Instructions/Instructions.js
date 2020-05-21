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
                        <li>Your problem statments will be randomly generated. You will be given three tries to generate your problem statement. You can confirm your problem statement on any of the tries but after three tries, the third one will be final. Check out our <a href="https://ieeevit.org/"><strong>Instagram</strong></a> post to see how the generator works.</li>
                        <li>You can not generate new problem statements once you finalise on a problem statement you want to go with</li>
                        <li>To qualify for Round 2, you must join our slack workspace as all <strong> important announcements</strong> will be made there. <a href="https://join.slack.com/t/palette20/shared_invite/zt-eb839cx0-_lTn5ReBAe4N3dFc8tEAEQ"><strong>Click here to join</strong></a> </li>
                        <li>You will have to submit your final prototype at end of round 2 in the submission field provided.</li>
                        <li>For any guidance or queries, kindly ping us on Slack or email to design@ieeevit.org </li>
                    </ul>
                </div>
            </div>
            <img src={DLD} alt="dld" className="dld-logo" />
        </div>
    )
}

export default Instructions;