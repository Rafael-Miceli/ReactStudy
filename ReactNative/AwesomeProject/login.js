
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
        if (this.state.showProgress) {
            return this.renderLoadingView();
        }
        else {
            return this.renderViewWithouLogin();
        }
    }

    renderLoadingView() {
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

                <TouchableHighlight onPress={this.onAct.bind(this)}>
                    <Text>Activity</Text>
                </TouchableHighlight>

                <ActivityIndicator animating={true} size="large" />              
            </View>                
        )
    }

    renderViewWithouLogin() {
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

                <TouchableHighlight onPress={this.onAct.bind(this)}>
                    <Text>Activity</Text>
                </TouchableHighlight>              
            </View>
        )
        
    }

    onLogin() {
        console.log("Ususario: ", this.state.username);
        console.log("Senha: ", this.state.password);
        console.log("Antes de tentar logar: ", this.state.showProgress);
        this.setState({showProgress: true}); 
        console.log("Após tentar logar: ", this.state.showProgress);
    }

    onAct() {
        console.log("Antes de tentar active: ", this.state.showProgress);
        this.setState({showProgress: false}); 
        console.log("Após tentar active: ", this.state.showProgress);
    }
}

const styles = StyleSheet.create({
    loader: {
        marginTop: 200
    }
});
