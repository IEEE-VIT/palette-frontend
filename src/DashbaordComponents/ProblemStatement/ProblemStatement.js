import React from 'react';
import Unlock from '../../assets/images/unlock.svg';
import New from '../../assets/images/new.svg';

import './ProblemStatement.css';

const ProblemStatement = () => {
    return(
        <div className="problem-statment">
            <div className="problem-statement-title">
                <h4><strong>Problem Statement</strong></h4>
            </div>

            <div className="problems-display">
                <p className="problem-statement-category"><img src={Unlock} alt="unlock" /> Design a mobile app </p>
                <p className="problem-statement-category"><img src={Unlock} alt="unlock" /> for a restaurant in Brazil </p>
                <p className="problem-statement-category"><img src={Unlock} alt="unlock" /> to help footballers have healthier food  </p>
            </div>

            <div className="row generate-lock-buttons">
                <div className="column">
                    <p> <img src={New} alt="new" /> Generate new </p>
                </div>
                <div className="column">
                    <p> Lock this! </p>
                </div>
            </div>
        </div>
    )
}

export default ProblemStatement;
