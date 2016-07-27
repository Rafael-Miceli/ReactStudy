import buffer from 'buffer';
import {AsyncStorage} from 'react-native';


const authKey = 'auth';
const userKey = 'user';

export class AuthService {

    getAuthInfo(callback) {
        AsyncStorage.multiGet([authKey, userKey], (err, val) => {
            if(err) {
                return callback(error);
            }

            if(!val) {
                return callback();
            }


        });
    }

    login(credentials, callback) {
        var b = new buffer.Buffer(credentials.username + ':' + credentials.password);
        var encodedAuth = b.toString('base64');
        //console.log(b.toString('base64'));

        fetch('https://api.github.com/user', {
            headers: {
                'Authorization': 'Basic ' + encodedAuth
            }
        })
        .then((response) => {
            if (response.status >= 200 && response.status < 300)
                return response;
            
            throw {
                badCredentials: response.status == 401,
                unknownError: response.status != 401
            };  
        })
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log(result);

            AsyncStorage.multiSet([
                [authKey, encodedAuth],
                [userKey, JSON.stringify(result)]
            ], (err) => {
                if(err) {
                    throw err;
                }

                return callback({success: true});
            });                        
        })
        .catch((err) => {            
            console.log('Logon failed ' + err);
            return callback(err);
        });
    }
}
