import React, {Component} from 'react';
import windowSize from 'react-window-size';

import './Dashboard.css';
import DashboardMobile from './DashboardMobile/DashboardMobile';
import DashboardDesktop from './DashboardDesktop/DashboardDesktop';

class Dashboard extends Component {
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