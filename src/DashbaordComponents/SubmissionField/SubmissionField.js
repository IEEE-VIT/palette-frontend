import React from 'react';

import './SubmissionField.css';

class SubmissionField extends React.Component {
    constructor() {
        super();
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
        fetch(`http://localhost:8000/user/submitLink`,{  //${process.env.REACT_APP_BACKEND_URL}
            method: "post",
            headers: {
                'Content-type':'application/json',
                'Authorization': "Bearer "+"djphgGNKBpcOoLL8Jin9TSIexQk1"  //cookie.load('PALETTE').uid
            },
            body: JSON.stringify({
                link: this.state.link
            })
        })
        .then(response => response.json())
        .then(data => {
            alert(data.payload.message)
        })
        .catch(err => {
            alert("Problem")
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