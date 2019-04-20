import React, {Component} from 'react';
import {StyleSheet, Button ,Text, View} from 'react-native';
import I18n from '../I18n';
import { onSignOut } from '../auth';

export class ProfilScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>User Profil</Text>
        <Button
          title={I18n.t('exit')}
          onPress={() =>{
            onSignOut()
            this.props.navigation.navigate('LoginPage');
          }}
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
