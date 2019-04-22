import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header, View, Title, Text, Button, Icon, Left, Right, Body, Content } from "native-base";

import I18n from '../I18n';
import { onSignOut , USER_NAME} from '../auth';
import AsyncStorage from '@react-native-community/async-storage';

export class ProfilScreen extends Component {
  
  constructor(props){
    super(props);
    this.state = {name:'Test'};
  }

  componentWillMount = async () => {
    await AsyncStorage.getItem(USER_NAME)
    .then((e)=>{
         this.setState({
          name: e
         });
    });
   }

  render() {
    return (
      <Container>
        <Header span>
          <Body style={styles.center}>
            <Title> { I18n.t('welcome') +" "+ this.state.name}</Title>
          </Body>
        </Header>
        
        <Content padder>
          <Text> Veri </Text>

          <Button block
            onPress={() =>{
              onSignOut()
              this.props.navigation.navigate('LoginStack');
            }}>
            <Text> {I18n.t('exit')} </Text>
          </Button>

        </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
