import React from 'react';
import { Platform, StatusBar } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";


//Screens
import {LoginScreen} from '../screens/login/Login';
import {RegisterScreen} from '../screens/login/Register';
import {HomeScreen} from '../screens/Home';
import {SearchScreen} from '../screens/Search';
import {ProfilScreen} from '../screens/Profil';


export const SignedOut = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: "Giriş" 
    }
  }, 
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      title: "Kayıt Ol"
    }
  }
});

export const SignedIn = createBottomTabNavigator(
  {
    Home: { 
      screen:  HomeScreen,
      navigationOptions: {
        title: "Ana Sayfa" 
      }
    },
    Search : { 
      screen: SearchScreen,
      navigationOptions: {
        title: "Ara" 
      }
     },
    Profil : { 
      screen: ProfilScreen,
      navigationOptions: {
        title: "Profil" 
      } 
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = Platform.OS === "ios" ? "ios-home" : "md-home";
        } else if (routeName === 'Search') {
          iconName = Platform.OS === "ios" ? "ios-search" : "md-search";
        }else if (routeName === 'Profil') {
          iconName = Platform.OS === "ios" ? "ios-person" : "md-person";
        }

        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      inactiveTintColor: 'gray',
    },
  }
);

export const createApp = (signedIn = false) => {
  return createAppContainer(createSwitchNavigator(
    {
      HomeStack: SignedIn,
      LoginStack : SignedOut
    },
    {
      initialRouteName: signedIn ? "HomeStack" : "LoginStack"
    }
  ));
};
