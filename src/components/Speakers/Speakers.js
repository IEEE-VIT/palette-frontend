import React from 'react';
import Title from '../Title/Title';
import Amit from '../../assets/images/amit.svg';
import Chethan from '../../assets/images/chethan.svg';
import Abhinav from '../../assets/images/abhinav.svg';
import Saptarshi from '../../assets/images/Saptarshi.svg';
import Rahul from '../../assets/images/Rahul.svg';

import './Speakers.css';

const Speakers = () => {
    return(
        <div className="speakers-main-div">
            <Title title={'Past Speakers'} />
            <div className="speakers-div">
                <div className="speaker-div">
                    <img src={Saptarshi} alt="amit" className="speaker-image" />
                    <a href="https://www.instagram.com/saptarshiux" className="speaker-name" target="__blank" rel="noopener noreferrer"><p>Saptarshi Prakash</p></a>
                    <span>Sr.Product Design Manager, Swiggy</span>
                </div>
                <div className="speaker-div">
                    <img src={Amit} alt="amit" className="speaker-image" />
                    <a href="http://instagram.com/amit_chilamwar" className="speaker-name" target="__blank" rel="noopener noreferrer"><p>Amit Chilamwar</p></a>
                    <span>UX designer, inventindia Innovations</span>
                </div>
                <div className="speaker-div">
                    <img src={Chethan} alt="amit" className="speaker-image" />
                    <a href="http://instagram.com/design_pilot" className="speaker-name" target="__blank" rel="noopener noreferrer"><p>Chethan KVS</p></a>
                    <span>Product designer, Unacademy</span>
                </div>
                <div className="speaker-div">
                    <img src={Abhinav} alt="amit" className="speaker-image" />
                    <a href="http://instagram.com/abhinavagr180"  className="speaker-name" target="__blank" rel="noopener noreferrer"><p>Abhinav Agrawal</p></a>
                    <span>Product designer, Airtel</span>
                </div>
                <div className="speaker-div">
                    <img src={Rahul} alt="amit" className="speaker-image" />
                    <a href="https://www.instagram.com/madebyrahul/" className="speaker-name" target="__blank" rel="noopener noreferrer"><p>Rahul Chakraborty</p></a>
                    <span>Interaction Designer, Google Assistant</span>
                </div>
            </div>
        </div>
    )
}

export default Speakers;