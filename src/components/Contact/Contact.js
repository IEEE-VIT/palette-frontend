import React from 'react';

import phone from '../../assets/images/phone.svg';
import mail from '../../assets/images/mail.svg';
import IEEElogo from '../../assets/images/IEEE-VIT-logo.svg';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './Contact.css';

const Contact = () => {
    return(
        <div className="contact">
            <p><img src={phone} alt='phone' className="contact-icon" /> +91 9960331376 </p>
            <p><img src={mail} alt='mail' className="contact-icon" /> ziyankarmali@gmail.com </p>
            <div className="icon-links">
                <GitHubIcon style={{ fontSize: 40 }} />
                <p className="space"></p>
                <FacebookIcon style={{ fontSize: 40 }} />
                <p className="space"></p>
                <LinkedInIcon style={{ fontSize: 40 }} />
            </div>
            <p> Follow us for more updates </p>
            <img src={IEEElogo} alt='IEEElogo' className="ieee-logo" />
        </div>
    )
}

export default Contact;