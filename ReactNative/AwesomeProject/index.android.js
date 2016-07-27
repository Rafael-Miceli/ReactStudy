/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Login } from './login';
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthService } from './AuthService';

class AwesomeProject extends Component {

  constructor(props) {
      super(props);

      this.state = {
          isLoggedIn: false,
          checkingAuth: true 
      }
  } 

  componentDidMount() {
    var authService = new AuthService();
    authService.getAuthInfo((err, auth) => {
      this.setState({
        checkingAuth: false,
        isLoggedIn: auth != null
      })
    });
  }

  render() {

    if (this.state.checkingAuth) {
      return (
        <View>
            <Spinner visible={true} />
        </View>
      );
    } 

    if (this.state.isLoggedIn) {
      return (
        <View>
          <Text>You are loged in</Text>
        </View> 
      );
    } 
    else {
      return (      
        <Login onLogin={this.onLogin.bind(this)}/>
      );
    }        
  }

  onLogin() {
    console.log("Succefully logged in!");    
    this.setState({isLoggedIn: true}); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
