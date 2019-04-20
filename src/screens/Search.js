import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import I18n from '../I18n';

const instructions = Platform.select({
  ios: I18n.t('welcomeios'),
  android: I18n.t('welcomeandroid'),
});

export class SearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>Search</Text>
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
