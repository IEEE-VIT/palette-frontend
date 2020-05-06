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
            <div className="contact-info">
                <p><img src={phone} alt='phone' className="contact-icon" /> +91 9960331376 </p>
                <p><img src={mail} alt='mail' className="contact-icon" /> ziyankarmali@gmail.com </p>
            </div>
            <div className="icon-links">
                <a href="https://www.facebook.com/IEEEVIT/" style={{color:"white"}}><FacebookIcon style={{ fontSize: 40 }} /></a>
                <p className="space"></p>
                <a href="https://github.com/IEEE-VIT" style={{color:"white"}}><GitHubIcon style={{ fontSize: 40 }} /></a>
                <p className="space"></p>
                <a href="https://www.linkedin.com/company/ieee-vit-vellore/?originalSubdomain=in" style={{color:"white"}}><LinkedInIcon style={{ fontSize: 40 }} /></a>
            </div>
            <p> Follow us for more updates </p>
            <img src={IEEElogo} alt='IEEElogo' className="ieee-logo" />
        </div>
    )
}

export default Contact;