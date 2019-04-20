import React, {Component} from 'react';
import {Platform, StyleSheet,Button, Text, View} from 'react-native';

import I18n from '../I18n';

const instructions = Platform.select({
  ios: I18n.t('welcomeios'),
  android: I18n.t('welcomeandroid'),
});

export class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>  { I18n.t('welcome') } </Text>
        <Text style={styles.instructions}>{instructions}</Text>

        <Button
          title="Go to Profil"
          onPress={() => this.props.navigation.navigate('Profil')}
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
