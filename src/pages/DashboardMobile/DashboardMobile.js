import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import DashboardNavbar from '../../DashbaordComponents/DashboardNavbar/DashboardNavbar';
import DashboardTimer from '../../DashbaordComponents/DashboardTimer/DashboardTimer';
import ProblemStatemnet from '../../DashbaordComponents/ProblemStatement/ProblemStatement';
import SubmissionField from '../../DashbaordComponents/SubmissionField/SubmissionField';
import Instructions from '../../DashbaordComponents/Instructions/Instructions';
import Updates from '../../DashbaordComponents/Updates/Updates';

import './DashboardMobile.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      backgroundColor: 'transparent',
    },
    palette: {
        primary: "black",
      },
  }));
  
  function FullWidthTabs() {
    // useEffect(()=> {
    //     this.swipeableActions.updateHeight();
    // }) 
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
  
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Hack" {...a11yProps(0)} />
            <Tab label="Information" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
          // action={actions => {
          //   this.swipeableActions = actions;
          // }}
          animateHeight
          className="swipeable-views-mobile"
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
              <div>
                <DashboardTimer />
                <div>
                    <ProblemStatemnet />
                </div>
                <SubmissionField />
              </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction} className="tab-panel-information">
            <div className="information-mobile">
                <Instructions />
                <Updates />
            </div>
          </TabPanel>
        </SwipeableViews>
      </div>
    );
  }

class DashboardMobile extends React.Component {
    
    render() {
        return(
            <div className="dashboard-mobile-screen">
                <DashboardNavbar />
                <FullWidthTabs />
            </div>
        )
    }
}

export default DashboardMobile;