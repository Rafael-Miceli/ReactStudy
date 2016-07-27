
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

import buffer from 'buffer';
import { AuthService } from './AuthService';

export class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showProgress: false
        }; 
    }

    render() {
        var errocCtrl = <View />

        if (!this.state.success && this.state.badCredentials) {
            errocCtrl = <Text>Wrong username or password, please try again</Text>; 
        }

        if (!this.state.success && this.state.unknownError) {
            errocCtrl = <Text>Caught unexpected error</Text>;
        } 

        return (
            <View>
                <TextInput placeholder="Login" 
                onChangeText={(text) => this.setState({username: text})} />
                <TextInput placeholder="Password" secureTextEntry={true} 
                onChangeText={(text) => this.setState({password: text})} />

                <TouchableHighlight onPress={this.onLogin.bind(this)}>
                    <Text>Login</Text>
                </TouchableHighlight>

                {errocCtrl}

                <Spinner visible={this.state.showProgress} />              
            </View>          
        )
    }

    onLogin() {
        this.setState({showProgress: true}); 

        let authService = new AuthService();

        authService.login({username: this.state.username, password: this.state.password}, 
        (result) => {
            this.setState(Object.assign({
                showProgress: false
            }, result));

            if(result.success && this.props.onLogin){
                this.props.onLogin(); 
            }
        });
        
    }
}

const styles = StyleSheet.create({
    loader: {
        marginTop: 200
    }
});
