import {db, admin} from '../config/firebase';
import chalk from 'chalk';

export const googleOAuth = () => {
    return new Promise((resolve, reject) => {
        var provider = new admin.auth.GoogleAuthProvider();
        admin.auth().signInWithPopup(provider)
            .then((result) => {
                var user = result.user;
                resolve(user);
            })
            .catch((err) => {
                console.log(err);
                reject(err);
            });
          
    })
} 