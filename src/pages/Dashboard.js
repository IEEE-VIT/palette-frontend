import React, {Component} from 'react';
import logo from '../assets/images/Palette-logo.svg';
import logout from '../assets/images/logout.svg';
import Countdown from 'on-react-countdown';


import './Dashboard.css';

class Dashboard extends Component {
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
                    <img src={logout} alt='logout' />
                </div>

                <div className="center-text">
                    <h2>Coming to your screen in <strong><Countdown end={1590100200} wordsEndingOff={true} text={text} /></strong></h2>
                </div>
            </div>
        )
    }
}

export default Dashboard;