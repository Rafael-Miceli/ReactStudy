
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

import buffer from 'buffer';

export class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showProgress: false
        }; 
    }

    render() {
        return (
            <View>
                <Text>
                    Realize seu login
                </Text>
                <TextInput placeholder="Login" 
                onChangeText={(text) => this.setState({username: text})} />
                <TextInput placeholder="Password" secureTextEntry={true} 
                onChangeText={(text) => this.setState({password: text})} />

                <TouchableHighlight onPress={this.onLogin.bind(this)}>
                    <Text>Login</Text>
                </TouchableHighlight>

                <Spinner visible={this.state.showProgress} />              
            </View>                
        )
    }

    onLogin() {
        this.setState({showProgress: true}); 

        var b = new buffer.Buffer(this.state.username + ':' + this.state.password);
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
        })
        .catch((err) => {
            //this.setState(err);
            console.log('Logon failed ' + err);
        })
        .finally(() =>{
            this.setState({showProgress: false});
        })
        
    }
}

const styles = StyleSheet.create({
    loader: {
        marginTop: 200
    }
});
