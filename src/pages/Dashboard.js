import React, {Component} from 'react';
import logo from '../assets/images/Palette-logo.svg';
import logout from '../assets/images/logout.svg';
import Countdown from 'on-react-countdown';
import cookie from 'react-cookies';
import firebase from '../utils/firebase';

import './Dashboard.css';
import Updates from '../components/Updates/Updates';

class Dashboard extends Component {
    
    signOut = () => {
        console.log('sign out clicked')
        firebase.auth().signOut().then(function() {
            console.log('inside signout auth')
            var that = this;
            cookie.remove('PALETTE', { path: '/' })
            that.renderRedirect();
            that.handleClose();
            //console.log("Logged out")
          })
          .then(() => {
                console.log("in .then")
                window.location.href = "/";
          })
          .catch(function(error) {
          });
    }

    render() {
        const text = {
            days: 'd',
            hours: 'h',
            minutes: 'm',
            seconds: 's',
          }
        return(
            <div>
                <div className="navbar">
                    <img src={logo} alt='palette-logo' />
                    <span className><strong>Palette ‘20</strong> </span>
                    <button onClick={this.signOut} className="logout-button"><img src={logout} alt='logout' /></button>
                </div>

                <div className="center-text">
                    <h2>Coming to your screen in <strong className="timer-together"><Countdown end={1590100200} wordsEndingOff={true} text={text} /></strong></h2>
                    {/* <div className="end-updates">
                        <Updates />
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Dashboard;