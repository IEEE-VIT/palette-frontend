import React, {Component} from 'react';
import windowSize from 'react-window-size';
import firebase from '../utils/firebase';
import DashboardDesktop from './DashboardDesktop/DashboardDesktop';
import DashboardMobile from './DashboardMobile/DashboardMobile';
// import logo from '../assets/images/Palette-logo.svg';
// import logout from '../assets/images/logout.svg';
// import Countdown from 'on-react-countdown';
// import cookie from 'react-cookies';
// import Updates from '../components/Updates/Updates';

import './Dashboard.css';

class Dashboard extends Component {

    componentWillMount(){
        firebase.auth().onAuthStateChanged(async (user) => {
            if (!user) {
                window.location.href ="/"
                return;
            }
        });
	}

    render() {
        if(this.props.windowWidth < 768) {
            return(
                <DashboardMobile />
            )
        } else {
            return(
                <DashboardDesktop />
            )
        }
    }
}

export default windowSize(Dashboard);