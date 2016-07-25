
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

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

                <ActivityIndicator animating={this.state.showProgress} size="large"/>
            </View>
        );
    }

    onLogin() {
        console.log("Ususario: ", this.state.username);
        console.log("Senha: ", this.state.password);

        this.state.showProgress = true; 
    }
}

