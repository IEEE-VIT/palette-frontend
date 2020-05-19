import React from 'react';
import Title from '../Title/Title';
import Amit from '../../assets/images/amit.svg';
import Chethan from '../../assets/images/chethan.svg';
import Abhinav from '../../assets/images/abhinav.svg';

import './Speakers.css';

const Speakers = () => {
    return(
        <div className="speakers-main-div">
            <Title title={'Speakers'} />
            <div className="speakers-div">
                <div className="speaker-div">
                    <img src={Amit} alt="amit" className="speaker-image" />
                    <p><strong>Amit Chilamwar</strong></p>
                    <p>UX designer, inventindia Innovations</p>
                </div>
                <div className="speaker-div">
                    <img src={Chethan} alt="amit" className="speaker-image" />
                    <p><strong>Chethan KVS</strong></p>
                    <p>Product designer, Unacademy</p>
                </div>
                <div className="speaker-div">
                    <img src={Abhinav} alt="amit" className="speaker-image" />
                    <p><strong>Abhinav Agrawal</strong></p>
                    <p>Product designer, Airtel</p>
                </div>
            </div>
        </div>
    )
}

export default Speakers;