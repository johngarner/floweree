import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import GameScreen from "./GameScreen";

export class AlbumScreen extends React.Component {
	static navigationOptions = {
		title: 'Pictures',
		headerStyle: {
			backgroundColor: '#97BAFD',
		},
		headerTintColor: '#fff',
	};
  	render() {
    	return (
    	 <ScrollView>
        	<Image source = {require('./assets/flowers/homescreenflower.png')} />

        	//if fullyGrown = true then display image.

        	<Image source = {require('./assets/flowers/new/flower1.png')} />
        	<Image source = {require('./assets/flowers/flower2.png')} />
        	<Image source = {require('./assets/flowers/flower3.png')} />
        	<Image source = {require('./assets/flowers/flower4.png')} />
        	<Image source = {require('./assets/flowers/flower5.png')} />
        	<Image source = {require('./assets/flowers/flower6.png')} />
        	<Image source = {require('./assets/flowers/flower7.png')} />

      	</ScrollView>
    );
  }
}

export default AlbumScreen;