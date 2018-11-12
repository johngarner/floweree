import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Clock from "./Clock";

export class StoreScreen extends React.Component {
	static navigationOptions = {
		title: 'Store',
	};

  	render() {
    	return (
      		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        		<Text>This will be a store... eventually</Text>
        		<Clock/>
      		</View>
    	);
  	}
}

export default StoreScreen;