
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

        var b = new buffer.Buffer('hello');
        console.log(b.toString('base64'));

        this.setState({showProgress: false});
        // fetch('https://api.github.com/search/repositories?q=SiteMjr')
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((result) => {
        //         console.log(result);
        //         this.setState({showProgress: false}); 
        //     });
    }
}

const styles = StyleSheet.create({
    loader: {
        marginTop: 200
    }
});
