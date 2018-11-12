import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import User from "./User";
import IntroScreen from "./IntroScreen";
import GameScreen from "./GameScreen";
import StoreScreen from "./StoreScreen";
import AlbumScreen from "./AlbumScreen";

// if (User.firstLogin) {
//   console.log("hi");
//   RootStack
// }

const RootStackFirst = createStackNavigator(
  {
  	Home: {
      screen: IntroScreen,
    },
  	Game: {
  		screen: GameScreen,
  	},
  	Store: {
  		screen: StoreScreen,
  	},
  	Pictures: {
  		screen: AlbumScreen,
  	},
  },

  {
  	initialRouteName: 'Home',
  }
);

// const RootStack = createStackNavigator(
//   {
//     Home: {
//       screen: IntroScreen,
//     },
//     Game: {
//       screen: GameScreen,
//     },
//     Store: {
//       screen: StoreScreen,
//     },
//     Pictures: {
//       screen: AlbumScreen,
//     },
//   },

//   {
//     initialRouteName: 'Game',
//   }
// );


export default class App extends React.Component {
	render() {
    return <RootStackFirst/>;
    // if (User.props.firstLogin == true){
    //   return <RootStackFirst/>;
    // } else {
    //   return <RootStack/>;
    // }
	}
}
