import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import { createMuiTheme } from '@material-ui/core/styles';

import DashboardNavbar from '../../DashbaordComponents/DashboardNavbar/DashboardNavbar';
import DashboardTimer from '../../DashbaordComponents/DashboardTimer/DashboardTimer';
import ProblemStatemnet from '../../DashbaordComponents/ProblemStatement/ProblemStatement';
import SubmissionField from '../../DashbaordComponents/SubmissionField/SubmissionField';
import Instructions from '../../DashbaordComponents/Instructions/Instructions';
import Updates from '../../DashbaordComponents/Updates/Updates';

import './DashboardMobile.css';

const styles = {
    tabs: {
        background: '#fff',
    },
    slide: {
        padding: 15
    }
};

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ffffff',
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
});

class DashboardMobilee extends React.Component {
    state = {
        index: 0,
      };
    
    handleChange = (event, value) => {
        this.setState({
            index: value,
        });
    };

    handleChangeIndex = index => {
        this.setState({
            index,
        });
    };

    render() {
        const {index} = this.state;
        return(
            <div className="dashboard-mobile-screen">
                <DashboardNavbar />
                <div>
                    <Tabs value={index} indicatorColor="primary" variant="fullWidth" onChange={this.handleChange}>
                        <Tab label="Hack" className="dashboard-tab" />
                        <Tab label="Information" className="dashboard-tab" />
                    </Tabs>
                    <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                    <div style={Object.assign({}, styles.slide, styles.slide1)}>
                        <div>
                            <DashboardTimer />
                            <div>
                                <ProblemStatemnet />
                            </div>
                            <SubmissionField />
                        </div>
                    </div>
                    <div style={Object.assign({}, styles.slide, styles.slide2)}>
                        <div className="information-mobile">
                            <Instructions />
                        </div>
                        <div className="information-updates">
                            <Updates />
                        </div>
                    </div>
                    </SwipeableViews>
                </div>
            </div>
        )
    }
}

export default DashboardMobilee;