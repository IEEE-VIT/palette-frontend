import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';


import googleIcon from '../../assets/images/icons8-google.svg';

import './Form.css';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
	  flexWrap: 'wrap',
	  borderColor: 'black !important'
    },
    margin: {
	  margin: theme.spacing(1),
	  borderWidth:3,
	  borderColor: "black"
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
	  width: '25ch',
	  borderWidth:3,
	  borderColor: "black"
    },
  }));

const Form = () => {
    const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
	  };
	  
	  const onButtonClick = () => {
		console.log(values);
	  }

      const classes = useStyles();
      const [values, setValues] = React.useState({
		firstName: '',
		lastName: '',
        password: '',
        email: '',
        showPassword: false,
      });
    return(
        <div className='form'>  
            <Button variant="outlined" className="googleButton" style={{marginBottom:15, borderWidth:2, borderColor:"black", borderRadius:5}}>
                <img src={googleIcon} alt="gicon" className="gicon" height="24" width="24"/>
                Continue with Google
            </Button> 
            <p>or</p>
                <TextField className={clsx(classes.margin, classes.textField)} onChange={handleChange('firstName')} id="outlined-basic" label="First name" variant="outlined" color="primary" />
                <TextField className={clsx(classes.margin, classes.textField)} onChange={handleChange('lastName')} id="outlined-basic" label="Last name" variant="outlined" color="primary" />
                <TextField className={clsx(classes.margin, classes.textField)} onChange={handleChange('email')} id="outlined-basic" label="Email address" variant="outlined" color="primary" />
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                    labelWidth={70}
                />
                </FormControl>
				<button className="registerButton" onClick={onButtonClick()}>Register</button>

        </div>
    )
}

export default Form;