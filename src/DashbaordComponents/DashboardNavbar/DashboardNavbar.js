import React,{Component} from 'react';
import Logo from '../../assets/images/Palette-logo.svg';
import TimelineLogo from '../../assets/images/timeline-icon.svg';
import LogoutLogo from '../../assets/images/logout.svg';
import cookie from 'react-cookies';
import firebase from '../../utils/firebase';
import Timeline from '../../assets/Timeline.pdf';

import './DashboardNavbar.css';

class DashboardNavbar extends Component {

    signOut = () => {
        // console.log('sign out clicked')
        firebase.auth().signOut().then(function() {
            // console.log('inside signout auth')
            cookie.remove('PALETTE', { path: '/' })
            window.location.href = "/";
          })
          .catch(function(error) {
              console.log(error);
          });
    }

    render() {
        return(
            <div className="navbar-component">
                <img src={Logo} alt="logo" className='dashboard-palette-logo'/>
                <div className = 'dashboard-heading-container'>
                    <span><strong>Dashboard</strong></span>
                </div>
                <div className="nav-button-div">
                    <a className="navbar-buttons-dashboard" href={Timeline} target="__blank" rel="noopener noreferrer" ><img src={TimelineLogo} alt="timeline-icon"/></a>
                    <button className="navbar-buttons-dashboard" onClick={this.signOut}><img src={LogoutLogo} alt="logout-icon"/></button>
                </div>
            </div>
        )
    }
}

export default DashboardNavbar;