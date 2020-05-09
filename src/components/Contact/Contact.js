import React from 'react';

import phone from '../../assets/images/phone.svg';
import mail from '../../assets/images/mail.svg';
import globe from '../../assets/images/globe.svg';
import IEEElogo from '../../assets/images/IEEE-VIT-logo.svg';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

import './Contact.css';

const Contact = () => {
    return(
        <div className="contact">
            <div className="contact-info">
                <p><img src={phone} alt='phone' className="contact-icon" /> +91 9560434342 </p>
                <p><img src={globe} alt='globe' className="contact-icon" /> <a href="https://ieeevit.org/" className="link-website">www.ieeevit.org</a> </p>
                <p><img src={mail} alt='mail' className="contact-icon" /> contact@ieeevit.org </p>
            </div>
            <div className="icon-links">
                <a href="https://www.facebook.com/IEEEVIT/" style={{color:"white"}}><FacebookIcon style={{ fontSize: 40 }} /></a>
                <p className="space"></p>
                <a href="https://www.instagram.com/ieeevitvellore/?hl=en" style={{color:"white"}}><InstagramIcon style={{ fontSize: 40 }} /></a>
                <p className="space"></p>
                <a href="https://github.com/IEEE-VIT" style={{color:"white"}}><GitHubIcon style={{ fontSize: 40 }} /></a>
                <p className="space"></p>
                <a href="https://twitter.com/ieeevitvellore?lang=en" style={{color:"white"}}><TwitterIcon style={{ fontSize: 40 }} /></a>
                <p className="space"></p>
                <a href="https://www.linkedin.com/company/ieee-vit-vellore/?originalSubdomain=in" style={{color:"white"}}><LinkedInIcon style={{ fontSize: 40 }} /></a>
            </div>
            <p> Follow us for more updates </p>
            <img src={IEEElogo} alt='IEEElogo' className="ieee-logo" />
        </div>
    )
}

export default Contact;