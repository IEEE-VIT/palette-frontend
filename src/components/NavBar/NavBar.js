import React from 'react';
import Logo from '../../assets/images/Palette-logo.svg';
import {Navbar, Nav} from 'react-bootstrap';
import './NavBar.css';

const NavBarComponent = () => {
    return(
        <div>
            <Navbar expand="sm" fixed="top" className="navbar">
                <img src={Logo} alt="logo" />
                <Navbar.Toggle className="navbar-toggle" style={{border:"none"}} />
                <Navbar.Collapse className="justify-content-end navbar-buttons">
                    <Nav.Link className="nav-button" href="#home">Info</Nav.Link>
                    <Nav.Link className="nav-button" href="#features">History</Nav.Link>
                    <Nav.Link className="nav-button" href="#pricing">Contact</Nav.Link>
                    <Nav.Link className="nav-button" href="#pricing">Log in</Nav.Link>
                    <Nav.Link className="register-button" href="#pricing">Register</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBarComponent;