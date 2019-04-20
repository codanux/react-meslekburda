import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import I18n from '../../I18n';


export class RegisterScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> { I18n.t('register') + " " + I18n.t('page')} </Text>
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
