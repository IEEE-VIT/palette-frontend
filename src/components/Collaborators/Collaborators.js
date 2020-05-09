import React from 'react';

import Swiggy from '../../assets/images/swiggy-logo.svg';
import Flipkart from '../../assets/images/flipkart-logo.svg';

import './Collaborators.css';

const Collaborators = () => {
    return(
        <div className="collaborator">
            <img src={Flipkart} alt="Flipkart" />
            <img src={Swiggy} alt="Swiggy" />
        </div>
    )
}

export default Collaborators;