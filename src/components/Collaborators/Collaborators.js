import React from 'react';

import Dailyuix from '../../assets/images/dailyuix.svg';


import './Collaborators.css';

const Collaborators = () => {
    return(
        <div className="collaborator">
            <img src={Dailyuix} alt="dailyuix" className="collaborator-image" />
            <a href="https://www.instagram.com/dailyuix/?hl=en" target="__blank" rel="noopener noreferrer" className="collaborator-link">instagram.com/dailyuix</a>
        </div>
    )
}

export default Collaborators;