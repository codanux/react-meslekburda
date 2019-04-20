import React, {Component} from 'react';
import {Platform, StyleSheet,Button, Text, View} from 'react-native';
import I18n from '../../I18n';
import { onSignIn } from "../../auth";


export class LoginScreen extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>  { I18n.t('login') + " " + I18n.t('page') } </Text>

        <Button
          title= { I18n.t('login') }
          onPress={()=>{
            onSignIn();
            this.props.navigation.navigate('HomePage');
          }}
        />
        <Button
          title= { I18n.t('register') }
          onPress={() => this.props.navigation.navigate('Register')}
        />
      </View>
    );
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
