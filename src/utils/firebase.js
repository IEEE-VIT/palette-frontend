import * as firebase from "firebase/app";
import "firebase/auth";
import dotenv from 'dotenv'
dotenv.config()

firebase.initializeApp({
    apiKey: "AIzaSyC2b1utLO8uGUUja6rEB_Isp-7PEKVp_T4",
    authDomain: "ieee-palette.firebaseapp.com"
});

export default firebase;