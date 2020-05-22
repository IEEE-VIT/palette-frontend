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
                        <li>Refresh your page to view the submitted URL link to your wireframe.</li>
                        <li>To qualify for Round 2, you must join our slack workspace as all <strong> important announcements</strong> will be made there. <a href="https://join.slack.com/t/palette20/shared_invite/zt-eb839cx0-_lTn5ReBAe4N3dFc8tEAEQ" className="click-to-join-button"><strong>Click here to join</strong></a> </li>
                        <li>You will have to submit your final prototype at end of round 2 in the submission field provided.</li>
                        <li>For any guidance or queries, kindly ping us on Slack or email to design@ieeevit.org </li>
                    </ul>
                </div>
            </div>
            <a href="https://deeplearningdemystified.com/" target="__blank" rel="noopener noreferrer"><img src={DLD} alt="dld" className="dld-logo" /></a>
        </div>
    )
}

export default Instructions;