import React from 'react';

import './Instructions.css';

const Instructions = () => {
    return(
        <div className="instructions">
            <div className="instructions-title">
                <h4><strong>Instructions</strong></h4>
            </div>

            <div className="instructions-list">
                <ul> 
                    <li>To qualify for Round 2, you must join our slack workspace as we will roll out additional information personally to you. <a href="#"><strong>Click here to join</strong></a>  </li>
                    <li>You can not generate new problem statements once you finalise on a problem statement you want to go with</li>
                    <li>For any guidance or queries, kindly email to design@ieeevit.org</li>
                </ul>
            </div>
        </div>
    )
}

export default Instructions;