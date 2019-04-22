import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import I18n from '../../I18n';
import { onSignIn } from "../../auth";

import { Container, Header, Content, Form, Button, Text ,Item, Input, Label } from 'native-base';


export class LoginScreen extends Component {
  
  render() {
    return (
      <Container>
      <Content padder>

        <Form>
          <Item stackedLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item stackedLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
          
        </Form>
       
        <Button block success style={styles.login}
            onPress={()=>{
              onSignIn();
              this.props.navigation.navigate('HomeStack');
            }}>
          <Text>{ I18n.t('login') }</Text>
        </Button>

        <Button block padder onPress={() => this.props.navigation.navigate('Register')}>
          <Text>{ I18n.t('register') }</Text>
        </Button>
          
      </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    marginBottom:10
  },
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
  }
});
