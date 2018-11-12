import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

export class AlbumScreen extends React.Component {
	static navigationOptions = {
		title: 'Pictures',
		headerStyle: {
			backgroundColor: '#97BAFD',
		},
		headerTintColor: '#fff',
	};

  	_onPressButton() {
  		Alert.alert('Next Page')

	}
  	render() {
    	return (
    		// <ScrollView>
      		<View style={{ width: "100%", height: "100%", backgroundColor: "#97BAFD"}}>
	        	<Image
	        		source = {require("./assets/flowers/new/flower3.png")}
	        		style= {{width: 100, height: 100}}
	        	/>
      		</View>
    );
  }
}

export default AlbumScreen;