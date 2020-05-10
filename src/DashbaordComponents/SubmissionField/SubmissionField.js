import React from 'react';

import './SubmissionField.css';

class SubmissionField extends React.Component {
    render() {
        return(
            <div className="submission-div">
                <input className="submission-input" />
                <button>Submit</button>
            </div>
        )
    }
}

export default SubmissionField;