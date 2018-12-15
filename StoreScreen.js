import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

//Clock file import for react moment access
import Clock from "./Clock";

export class StoreScreen extends React.Component {
  ///This page will eventually become a store where users can spend their pollen points. As of right now though it only
  //access the current amount of points through the game screen and contains a clear data button which we use for testing and allows
  // the user to reset the data and start the game over. 
	static navigationOptions = {
		title: 'Store',
	};

  constructor(props) {
    super(props)

    this.state = {
      pollenPoints: JSON.parse(this.props.navigation.state.params.pollenPoints),
    };
  }

  	render() {
    	return (
      		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Pollen Points: {this.state.pollenPoints} </Text>
        		<Clock/>
      		</View>
    	);
  	}
}

export default StoreScreen;