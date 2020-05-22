import React from 'react';
import cookie from 'react-cookies';
import validator from 'validator';

import './SubmissionField.css';

class SubmissionField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            link:'',
            buttonActive:true,
            placeholderText:"Submission link",
            isChangeModal:false
        }
    }

    toOpenModal = () => {
        this.setState({
            isChangeModal:true
        })
    }

    setLink = (link) => {
		this.setState({
			link: link.target.value
        })
    }

    onSubmit = () => {
        if(validator.isURL(this.state.link)) {
            // this.setState({
            //     buttonActive:false
            // })
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
            // .then(data => {
            //     console.log(data.payload.message)
            // })
            .catch(err => {
                console.log("Problem")
            })
        }
        else {
            // console.log("else")
            this.setState({
                placeholderText:"This is not a valid URL",
                link:''
            })
        }
    }

    render() {
        return(
            <div>
                
                {(this.state.buttonActive) 
                    ? 
                    <div className="submission-div">
                        <input 
                            className="submission-input" 
                            placeholder={this.state.placeholderText}
                            onChange={(link) => this.setLink(link)}
                            value={this.state.link}
                        />
                        <button className="submission-button" style={{opacity:0.8}}><strong>Submit</strong></button> 
                    </div>
                    : 
                    <div className="submission-div">
                        <input 
                            className="submission-input" 
                            placeholder="Change link"
                            onChange={(link) => this.setLink(link)}
                            value={this.state.link}
                        />
                        <button className="submission-button" onClick={()=>this.onSubmit()}><strong>Change</strong></button>
                    </div>
                }
            </div>
        )
    }
}

export default SubmissionField;

//added env