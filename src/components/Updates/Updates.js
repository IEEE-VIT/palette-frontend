import React from 'react';
import UpdatesFacebook from '../../assets/images/updates-facebook.svg';
import UpdatesInstagram from '../../assets/images/updates-instagram.svg';
import UpdatesTwitter from '../../assets/images/updates-twitter.svg';
import DeepLearningDemystified from '../../assets/images/Deep-Learning-Demystified-Logo.svg';

import './Updates.css';

const Updates = () => {
    return(
        <div className="main-updates-div">
            <div className="sponsored-by-div">
                <p className="for-more-updates">Sponsored by </p>
                <img src={DeepLearningDemystified} alt="deeplearningdemystified" />
            </div>
            <div className="updates-div">
                <p className="for-more-updates">For more updates follow us on </p>
                <div className="updatesIcons">
                    <a href="https://www.facebook.com/IEEEVIT/" target="_blank" rel="noopener noreferrer"><img src={UpdatesFacebook} className="updateIcons" alt='updates-facebook' /></a>
                    <a href="https://www.instagram.com/ieeevitvellore/?hl=en" target="_blank" rel="noopener noreferrer"><img src={UpdatesInstagram} className="updateIcons" alt='updates-instagram' /></a>
                    <a href="https://twitter.com/ieeevitvellore?lang=en" target="_blank" rel="noopener noreferrer"><img src={UpdatesTwitter} className="updateIcons" alt='updates-twitter' /></a>
                </div>
            </div>
        </div>
    )
}

export default Updates;