import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import googleIcon from '../../assets/images/icons8-google.svg';
import firebase from '../../utils/firebase';
import cookie from 'react-cookies';
import validator from 'validator';

import './LandingPageForm.css';
import Loading from '../Loading/Loading';

class LandingPageLoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name:'',
			email:'',
			password:'',
			loaded: '',
			loading: false,
            nameError: false,
            nameErrorText:'',
            emailError: false,
            emailErrorText:'',
            passwordError:false,
            passwordErrorText:'',
		}
	}

	setName = (name) => {
		this.setState({
			name: name.target.value
		})
    }
    
    checkValidName = (name) => {
        if(validator.isAlpha(name) && name.length >= 3) {
            return true;
        } else {
            return false;
        }
    }

	setEmail = (email) => {
        this.setState({
            email: email.target.value
        })
    }

    checkValidEmail = (email) => {
        if(validator.isEmail(email)) {
            return true
        } else {
            return false
        }
    }

    setPassword = (password) => {
        this.setState({
            password: password.target.value
        })
    }
    
    checkValidPassword = (password) => {
        if(validator.isAlphanumeric(password) && password.length > 6) {
            return true;
        } else {
            return false;
        }
    }

	//Google signup
    signIn = async () => {
        this.setState({
            loading:true
        })
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().languageCode = 'en';
        var that = this;
        firebase.auth().signInWithPopup(provider).then(function(result) {
            that.setState({loaded:false})
            if (result.credential) {
            
            }
            // The signed-in user info.
            var user = result.user;
            fetch(`${process.env.REACT_APP_BACKEND_URL}/user/create`,{
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
                // console.log('Saving Cookie...')
                const expires = new Date()
                expires.setDate(Date.now() + 1000 * 60 * 60 * 1)
                cookie.save('PALETTE',{uid: user.uid, email: user.email},{path:'/'});
            })
            .then(() => {
                console.log("in dashboard")
                window.location.href = "/dashboard";
                that.setState({loaded:true})
            })
            .catch(e => {
                that.setState({loaded:true})
            });
          }).catch(function(error) {
              console.log(error)
            that.setState({loaded:true})
          });
    }
	
	//Sign-up
     newRegistration = () => {
        this.setState({
            loading:true
        })
        //Firebase auth

        if(!this.checkValidName(this.state.name)) {
            this.setState({
                loading:false,
                nameError:true,
                nameErrorText:'Enter valid name'
            })
            return;
        } else {
            this.setState({
                nameError:false,
                nameErrorText:''
            })
        }

        if(!this.checkValidEmail(this.state.email)) {
            this.setState({
                loading:false,
                emailError:true,
                emailErrorText:'Enter a valid email'
            })
            return;
        } else {
            this.setState({
                emailError:false,
                emailErrorText:''
            })
        }

        if(!this.checkValidPassword(this.state.password)) {
            this.setState({
                loading:false,
                passwordError:true,
                passwordErrorText:'Enter alphanumeric password with length more than 6'
            })
            return;
        } else {
            this.setState({
                passwordError:false,
                passwordErrorText:''
            })
        }

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((data)=>{
            //Call Rest API
            fetch(`${process.env.REACT_APP_BACKEND_URL}/user/create`,{
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
                return data1.json();
            }).then((data1)=>{
                if (data1.statusCode !== 200) {
                    this.setState({loading:false})
                    console.log(data1.payload.msg)
                } else {
                    window.location.href="/dashboard"
                    cookie.save('PALETTE',{uid: data.user.uid, email: data.user.email},{path:'/'});
                }
            })
        })
        .catch(function(error) {
            console.log(this.state.error)
            this.setState({TeacherError: "User already exists!"})
        });
    }


	render() {
        const {name, email, password, loading} = this.state;
        if(loading) {
            return(
                <div className = 'register-loading'>
                    <Loading />
                </div>
            )
        } else {
            return(
                <div className="LandingPageForm">
                    <Button onClick={this.signIn} target="__blank" rel="noopener noreferrer" variant="outlined" className="Landing-googleButton" style={{marginBottom:15, borderWidth:2, borderColor:"black", borderRadius:5}}>
                        <img src={googleIcon} alt="gicon" className="Landing-gicon" height="24" width="24"/>
                        Continue with Google
                    </Button> 
                    <p>or</p>
                    <div className="Landing-input-fields">
                        {(this.state.nameError)
                            ? 
                            <TextField
                                error
                                fullWidth={true}
                                id="outlined-error-helper-text"
                                label=""
                                defaultValue={name}
                                onChange={(name) => this.setName(name)}
                                required
                                helperText={this.state.nameErrorText}
                                variant="outlined"
                            />
                            :
                            <TextField
                                id='outlined-error-helper-text'
                                fullWidth={true}
                                label="Name"
                                variant="outlined"
                                color="primary"
                                value={name}
                                onChange={(name) => this.setName(name)}
                                type='name'
                                helperText=""
                            />
                        }
                        {(this.state.emailError)
                            ?
                            <TextField
                                error
                                fullWidth={true}
                                id="outlined-error-helper-text"
                                label=""
                                defaultValue={email}
                                onChange={(email) => this.setEmail(email)}
                                required
                                helperText={this.state.emailErrorText}
                                variant="outlined"
                            />
                            :
                            <TextField
                                id='outlined-basic'
                                fullWidth={true}
                                label="Email"
                                variant="outlined"
                                margin='5px'
                                color="primary"
                                value={email}
                                onChange={(email) => this.setEmail(email)}
                                type='email'
                                helperText=""
                            />
                        }
                        {(this.state.passwordError)
                            ?
                            <TextField
                                error
                                fullWidth={true}
                                id="outlined-error-helper-text"
                                label=""
                                defaultValue={password}
                                onChange={(password) => this.setPassword(password)}
                                required
                                helperText={this.state.passwordErrorText}
                                variant="outlined"
                                type='password'
                            />
                            :
                            <TextField
                                id='outlined-basic'
                                fullWidth={true}
                                label="Password"
                                variant="outlined"
                                color="primary"
                                InputLabelProps="textLight"
                                value={password}
                                onChange={(password) => this.setPassword(password)}
                                type='password'
                                helperText=""
                            />
                        }
                        
                    </div>
                    <button  onClick={this.newRegistration} className="Landing-registerButton">Register</button>
                </div>
            )
        }
	}
}

export default LandingPageLoginForm;