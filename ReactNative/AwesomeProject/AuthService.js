import buffer from 'buffer';

export class AuthService {
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
            return callback({success: true});            
        })
        .catch((err) => {            
            console.log('Logon failed ' + err);
            return callback(err);
        });
    }
}
