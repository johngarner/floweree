import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Image, Text, View, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';


///Links the other window files to the rootstack navigator 
import IntroScreen from "./IntroScreen";
import GameScreen from "./GameScreen";
import StoreScreen from "./StoreScreen";
import AlbumScreen from "./AlbumScreen";



const RootStackFirst = createStackNavigator(
  ///This file stores the navigation through pages. It implements react navigation and sets up the homescreen as the 
  ///first page users will go through to get to the game. 
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
  	Album: {
  		screen: AlbumScreen,
  	},
  },

  {
  	initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
	render() {
    StatusBar.setHidden(true);
    return <RootStackFirst/>;
	}
}
