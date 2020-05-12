import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import googleIcon from '../../assets/images/icons8-google.svg';
import firebase from '../../utils/firebase';
import cookie from 'react-cookies';


import './Form.css';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name:'',
			email:'',
			password:'',
			loaded: '',
			loading: '',
			error: ''
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

	//Google signup
    signIn = async () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().languageCode = 'en';
        var that = this;
        firebase.auth().signInWithPopup(provider).then(function(result) {
            that.setState({loaded:false})
            if (result.credential) {
            
            }
            // The signed-in user info.
            var user = result.user;
            console.log(result)
            fetch(`http://localhost:8000/user/create`,{
                method: "post",
                headers: {
                    'Content-type':'application/json',
                    'Authorization': "Bearer "+user.uid
                },
                body: JSON.stringify({
                    name: user.displayName,
                    email: user.email,
                })
            })
            .then(response => response.json())
            .then(data => {
                //console.log(data)
                //console.log('Saving Cookie...')
                const expires = new Date()
                expires.setDate(Date.now() + 1000 * 60 * 60 * 1)
                cookie.save('PALETTE',{uid: user.uid, email: user.email},{path:'/'});
            })
            .then(() => {
                window.location.href = "/dashboard";
                that.setState({loaded:true})
            })
            .catch(e => {
                that.setState({loaded:true})
            });
          }).catch(function(error) {
              console.log(error)
            that.setState({loaded:true})
          }.bind(this));
    }
	
	//Sign-up
     newRegistration=()=>{

		//Firebase auth
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((data)=>{
    
            //Call Rest API
            fetch(`https://git.heroku.com/salty-retreat-16868/user/create`,{
                method: "post",
                headers: {
                    'Content-type':'application/json',
                    'Authorization': "Bearer "+data.user.uid
                },
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                })
            }).then((data1)=>{
                console.log("API Response: " + data1)
                return data1.json();
            }).then((data1)=>{
                if (data1.statusCode !== 200) {
                    this.setState({loading:false})
                    alert(data1.payload.msg)
                } else {
                    window.location.href="/dashboard"
                    cookie.save('PALETTE',{uid: data.user.uid, email: data.user.email},{path:'/'});
                }
            })
        })
        .catch(function(error) {
            console.log(this.state.error)
            this.setState({TeacherError: "User already exists!"})
        }.bind(this));
    }


	render() {
		const {name, email, password} = this.state;
		return(
			<div className="form">
				<Button onClick={this.signIn} variant="outlined" className="googleButton" style={{marginBottom:15, borderWidth:2, borderColor:"black", borderRadius:5}}>
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
				<button  onClick={this.newRegistration} className="registerButton">Register</button>
				<p>Have an account? <button className="log-in-button">Log in</button></p>
			</div>
		)
	}
}

export default Form;