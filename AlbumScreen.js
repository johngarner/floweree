import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import GameScreen from "./GameScreen";

const finalflower = require('./assets/flowers/new/flower-09.png');
var flowerIndex = 0;
const flower1 = require('./assets/flowers/new/flower-01.png');
const flower2 = require('./assets/flowers/new/flower-02.png');
const flower3 = require('./assets/flowers/new/flower-03.png');
const flower4 = require('./assets/flowers/new/flower-04.png');
const flower5 = require('./assets/flowers/new/flower-05.png');
const flower6 = require('./assets/flowers/new/flower-06.png');
const flower7 = require('./assets/flowers/new/flower-07.png');
const flower8 = require('./assets/flowers/new/flower-08.png');
const flower9 = require('./assets/flowers/new/flower-09.png');
const flowers = [flower1, flower2, flower3, flower4, flower5, flower6, flower7, flower8, flower9];

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
{
    	 // <View style={styles.flowerContainer}>
      //   				<Image
      //     					source={flowers[flowerIndex]}
      //     					style={{width: "100%", height: "100%", resizeMode: "cover"}}
      //   				/>
     	// 			</View>
     }
     	if (myBoolean == true){
        	<Image 
        		source = {finalflower}
				//style={{width: "100%", height: "100%", resizeMode: "cover"}}
        	 />
     	}

      	</ScrollView>
    );
  }
}

export default AlbumScreen;