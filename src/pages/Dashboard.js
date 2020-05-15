import React, {Component} from 'react';
import windowSize from 'react-window-size';
import firebase from '../utils/firebase';

import './Dashboard.css';
import DashboardMobile from './DashboardMobile/DashboardMobile';
import DashboardDesktop from './DashboardDesktop/DashboardDesktop';

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