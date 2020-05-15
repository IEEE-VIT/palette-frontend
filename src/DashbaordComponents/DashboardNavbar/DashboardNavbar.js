import React from 'react';
import Logo from '../../assets/images/Palette-logo.svg';
import TimelineLogo from '../../assets/images/timeline-icon.svg';
import LogoutLogo from '../../assets/images/logout-icon.svg';

import './DashboardNavbar.css';

const DashboardNavbar = () => {
    return(
        <div className="navbar-component">
            <img src={Logo} alt="logo" />
            <h3>Dashboard</h3>
            <div className="nav-button-div">
                <button className="navbar-buttons"><img src={TimelineLogo} alt="timeline-icon" style={{marginRight:20}} /></button>
                <button className="navbar-buttons"><img src={LogoutLogo} alt="logout-icon"/></button>
            </div>
        </div>
    )
}

export default DashboardNavbar;