import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import Logo from '../../assets/images/Palette-logo.svg';
import TimelineLogo from '../../assets/images/timeline-icon.svg';
import LogoutLogo from '../../assets/images/logout-icon.svg';

import './DashboardNavbar.css';

const DashboardNavbar = () => {
    return(
        <div>
            <Navbar expand="sm" fixed="top" className="navbar">
                <img src={Logo} alt="logo" />
                <Navbar.Toggle className="navbar-toggle" style={{border:"none"}} />
                <Navbar.Collapse className="justify-content-end navbar-buttons">
                <Nav.Link className="nav-button self-align-center">Dashboard</Nav.Link>
                    <Nav.Link className="nav-button" href="#history"><img src={TimelineLogo} alt="timeline-icon" /> </Nav.Link>
                    <Nav.Link className="nav-button" href="#contact"><img src={LogoutLogo} alt="logout-icon" /> </Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default DashboardNavbar;