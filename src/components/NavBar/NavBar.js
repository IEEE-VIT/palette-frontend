import React from 'react';
import Logo from '../../assets/images/Palette-logo.svg';
import {Navbar, Nav} from 'react-bootstrap';
import './NavBar.css';

const NavBarComponent = () => {
    return(
        <div>
            <Navbar expand="sm" fixed="top" className="navbar">
                <a href="#start"><img src={Logo} alt="logo" /></a>
                <Navbar.Toggle className="navbar-toggle" style={{border:"none"}} />
                <Navbar.Collapse className="justify-content-end navbar-buttons">
                    <Nav.Link className="nav-button active" href="#info">Info</Nav.Link>
                    <Nav.Link className="nav-button" href="#history">History</Nav.Link>
                    <Nav.Link className="nav-button" href="#contact">Contact</Nav.Link>
                    {/* <Nav.Link className="nav-button" href="#login">Log in</Nav.Link> */}
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBarComponent;