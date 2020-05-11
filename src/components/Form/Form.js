import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import googleIcon from '../../assets/images/icons8-google.svg';

import admin from '../../config/firebase';
import { googleOAuth, createUser } from '../../utils/firebaseHelperFuncs';

import './Form.css';


class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name:'',
			email:'',
			password:''
		}
	}

	setName = (name) => {
		this.setState({
			name: name.target.value
		})
		
	}

	setEmail = (email) => {
        this.setState({
            email: email.target.value
        })
    }

    setPassword = (password) => {
        this.setState({
            password: password.target.value
        })
	}

	onGoogleAuth = () => {
		console.log("Clicked google auth")
		googleOAuth()
			.then(async (user) => {
				const {isRegSuccess, wasUserRegistered} = await createUser(user.email, user.displayName, user.uid);
                if (isRegSuccess) {
                    window.location.href="/dashboard"
                } else {
                    if (wasUserRegistered) {
                        window.location.href="/dashboard"
                    }
                     alert("Looks like something went Wrong, Please reach out to us!")
                }
                return;
			})
			.catch((err) => {
                console.log(err);
            })
	}
	
	render() {
		const {name, email, password} = this.state;
		return(
			<div className="form">
				<Button variant="outlined" onClick={()=> this.onGoogleAuth()} className="googleButton" style={{marginBottom:15, borderWidth:2, borderColor:"black", borderRadius:5}}>
					<img src={googleIcon} alt="gicon" className="gicon" height="24" width="24"/>
					Continue with Google
				</Button> 
				<p>or</p>
				<div className="input-fields">
					<TextField
						id='outlined-basic'
						fullWidth={true}
						label="Name"
						variant="outlined"
						color="primary"
						value={name}
						onChange={(name) => this.setName(name)}
						required
						type='name'
						helperText=""
					/>
					<TextField
						id='outlined-basic'
						fullWidth={true}
						label="Email"
						variant="outlined"
						margin='5px'
						color="primary"
						value={email}
						onChange={(email) => this.setEmail(email)}
						required
						type='email'
						helperText=""
					/>
					<TextField
						id='outlined-basic'
						fullWidth={true}
						label="Password"
						variant="outlined"
						color="primary"
						InputLabelProps="textLight"
						value={password}
						onChange={(password) => this.setPassword(password)}
						required
						type='password'
						helperText=""
					/>
				</div>
				<button className="registerButton">Register</button>
				<p>Have an account? <button className="log-in-button">Log in</button></p>
			</div>
		)
	}
}

export default Form;