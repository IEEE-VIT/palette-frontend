import React from 'react';

import FacebookUpdates from '../../assets/images/updates-facebook.svg';
import InstagramUpdates from '../../assets/images/updates-instagram.svg';
import TwitterUpdates from '../../assets/images/updates-twitter.svg';

import './Updates.css';

const Updates = () => {
    return(
        <div className="updates-div">
            Follow <a href="https://ieeevit.org/" target="__blank" rel="noopener noreferrer" className="ieee-vit-link"> IEEE VIT </a> on
            <div className="updatesIcons">
                <a href="https://www.facebook.com/IEEEVIT/" target="__blank" rel="noopener noreferrer"><img src={FacebookUpdates} className="updateIcons" alt='updates-facebook' /></a>
                <a href="https://www.instagram.com/ieeevitvellore/?hl=en" target="__blank" rel="noopener noreferrer"><img src={InstagramUpdates} className="updateIcons" alt='updates-instagram' /></a>
                <a href="https://twitter.com/ieeevitvellore?lang=en" target="__blank" rel="noopener noreferrer"><img src={TwitterUpdates} className="updateIcons" alt='updates-twitter' /></a>
            </div>
        </div>
    )
}

export default Updates;