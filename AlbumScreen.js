import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import GameScreen from "./GameScreen";

const finalflower1 = require('./assets/flowers/new/flower-01-thumbnail.png');

//don't have images yet
const finalflower2 = require('./assets/flowers/new/flower-01-thumbnail.png');
const finalflower3 = require('./assets/flowers/new/flower-01-thumbnail.png');
const finalflower4 = require('./assets/flowers/new/flower-01-thumbnail.png');
const finalflower5 = require('./assets/flowers/new/flower-01-thumbnail.png');



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  flowerContainer: {
    width: 200,
    height: 200,
  },
});

export class AlbumScreen extends React.Component {
	static navigationOptions = {
		title: 'Album',
		headerStyle: {
			backgroundColor: '#97BAFD',
		},
		headerTintColor: '#fff',
	};

  constructor(props) {
    super(props)

    this.state = {
      fullyGrown1: JSON.parse(this.props.navigation.state.params.fullyGrown1),
      fullyGrown2: JSON.parse(this.props.navigation.state.params.fullyGrown2),
      fullyGrown3: JSON.parse(this.props.navigation.state.params.fullyGrown3),
      fullyGrown4: JSON.parse(this.props.navigation.state.params.fullyGrown4),
      fullyGrown5: JSON.parse(this.props.navigation.state.params.fullyGrown5),
    };
  }

  render() {
    if (this.state.fullyGrown == true) {
      return (
        <ScrollView contentContainerStyle={styles.container}>
          
          <View style={styles.flowerContainer}>
            <Image
              source={finalflower}
              style={{width: "100%", height: "100%", resizeMode: "cover"}}
            />
          </View>
          

        </ScrollView>
      );
    }
  	return (
      <ScrollView contentContainerStyle={styles.container}>



      </ScrollView>
    );
  }
}

export default AlbumScreen;