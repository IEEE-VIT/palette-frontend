import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import googleIcon from '../../assets/images/icons8-google.svg';
import firebase from '../../utils/firebase';
import cookie from 'react-cookies';
import validator from 'validator';

import './LandingPageLoginForm.css';
import Loading from '../Loading/Loading';

class LandingPageLoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email:'',
			password:'',
			loaded: '',
			loading: false,
            emailError: false,
            emailErrorText:'',
            passwordError:false,
            passwordErrorText:'',
            authStatus: '',
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

	//Google login
    gLogIn = async () => {
        this.setState({
            loading:true
        })
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().languageCode = 'en';
        var that = this;
        firebase.auth().signInWithPopup(provider).then(function(result) {
            that.setState({loaded:false})
            // The signed-in user info.
            var user = result.user;
            fetch(`${process.env.REACT_APP_BACKEND_URL}/user/login`,{
                method: "post",
                headers: {
                    'Content-type':'application/json',
                    'Authorization': "Bearer "+user.uid
                },
            })
            .then(data => {
                console.log(data.status);
                if(data.status === 200) {
                    const expires = new Date()
                    expires.setDate(Date.now() + 1000 * 60 * 60 * 1)
                    cookie.save('PALETTE',{uid: user.uid, email: user.email},{path:'/'});
                    // console.log("in dashboard")
                    window.location.href = "/dashboard";
                    that.setState({loaded:true})
                } else {
                    // that.setState({loaded:true})
                    that.setState({
                        loading: false,
                        authStatus: 'Invalid email/password combination',
                    });
                }
            })
            // .then(response => response.json())
            // .then(data => {
            //     //console.log(data)
            //     // console.log('Saving Cookie...')
            // })
            // .then(() => {
            // })
            .catch(e => {
                that.setState({loaded:true})
            });
          }).catch(function(error) {
              console.log(error)
          }.bind(this));
    }

	//LogIn
     logIn = () => {
        this.setState({
            loading:true,
            authStatus: '',
        });

        //Firebase auth
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

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((data) => {
            this.setState({
                loading: false,
            });
            window.location.href="/dashboard"
            cookie.save('PALETTE',{uid: data.user.uid, email: data.user.email},{path:'/'});
        })
        .catch((err) => {
            // console.log(err);
            this.setState({
                loading: false,
                authStatus: 'Invalid email/password combination',
            });
        });
    }


	render() {
        const {email, password, loading} = this.state;
        if(loading) {
            return(
                <div className = 'login_loading-container'>
                    <Loading />
                </div>
            )
        } else {
            return(
                <div className="landing-page-login-form">
                    <Button onClick={this.gLogIn} target="__blank" rel="noopener noreferrer" variant="outlined" className="googleButton" style={{marginBottom:15, borderWidth:2, borderColor:"black", borderRadius:5}}>
                        <img src={googleIcon} alt="gicon" className="gicon" height="24" width="24"/>
                        Continue with Google
                    </Button>
                    <p>or</p>
                    <div className="login-input-fields">
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
                                required
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
                                required
                                type='password'
                                helperText=""
                            />
                        }

                    </div>
                    <div>{this.state.authStatus}</div>
                    <button className="loginButton" onClick={this.logIn}>Login</button>
                </div>
            )
        }
	}
}

export default LandingPageLoginForm;