import React from 'react';
import cookie from 'react-cookies';

import './SubmissionField.css';

class SubmissionField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            link:'',
            buttonActive:true
        }
    }

    setLink = (link) => {
		this.setState({
			link: link.target.value
        })
    }

    onSubmit = () => {
        this.setState({
            buttonActive:false
        })
        fetch(`${process.env.REACT_APP_BACKEND_URL}/user/submitLink`,{
            method: "post",
            headers: {
                'Content-type':'application/json',
                'Authorization': "Bearer "+ cookie.load('PALETTE').uid
            },
            body: JSON.stringify({
                link: this.state.link
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.payload.message)
        })
        .catch(err => {
            console.log("Problem")
        })
    }

    render() {
        return(
            <div className="submission-div">
                <input 
                    className="submission-input" 
                    placeholder="Enter the drive link containing images of your wireframes" 
                    onChange={(link) => this.setLink(link)}
                />
                {(this.state.buttonActive) 
                    ? 
                    <button className="submission-button" onClick={()=>this.onSubmit()}>Submit</button> 
                    : 
                    <button className="submission-button" disabled>Submit</button>
                }
            </div>
        )
    }
}

export default SubmissionField;