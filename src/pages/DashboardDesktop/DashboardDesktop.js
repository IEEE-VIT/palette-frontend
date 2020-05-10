import React from 'react';

import './DashboardDesktop.css';
import DashboardNavbar from '../../DashbaordComponents/DashboardNavbar/DashboardNavbar';
import DashboardTimer from '../../DashbaordComponents/DashboardTimer/DashboardTimer';
import ProblemStatement from '../../DashbaordComponents/ProblemStatement/ProblemStatement';
import SubmissionField from '../../DashbaordComponents/SubmissionField/SubmissionField';
import Instructions from '../../DashbaordComponents/Instructions/Instructions';
import Updates from '../../DashbaordComponents/Updates/Updates';

class DashboardDesktop extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <DashboardNavbar />
                </div>
               
               <section className="dash-menu">
                <div className="row">
                    <div className="column">
                        <DashboardTimer />
                        <ProblemStatement />
                    </div>
                    <div className="column">
                        <Instructions />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <SubmissionField />
                    </div>
                    <div className="column">
                        <Updates />
                    </div>
                </div>
               </section>
            </div>
        )
    }
}

export default DashboardDesktop;