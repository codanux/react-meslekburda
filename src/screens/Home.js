import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import I18n from '../I18n';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';


export class HomeScreen extends Component {
  render() {
    return (
      <Container>
         <Content padder>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://www.campusonline.com/upload/urunler/513490_ResimOkumaveModernslupTarihiEitimiTmBlmler_KOzFY58i/resimokumatumbolumler600min.jpg'}} />
                <Body>
                  <Text>Codanux</Text>
                  <Text note>04-15-2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://www.campusonline.com/upload/urunler/513490_ResimOkumaveModernslupTarihiEitimiTmBlmler_KOzFY58i/resimokumatumbolumler600min.jpg'}} style={{height: 200, width: 350, flex: 1}}/>
                <Text>
                  // Açıklama
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 Görüntülenme</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
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
