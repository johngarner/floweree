import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import GameScreen from "./GameScreen";

const finalflower = require('./assets/flowers/new/flower-09.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
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
      fullyGrown: (this.props.navigation.state.params.fullyGrown),
    };
  }

  render() {
  	return (
      <ScrollView contentContainerStyle={styles.container}>

        if (this.state.fullyGrown == "true") {
          <Text>Fully grown? {this.state.fullyGrown}</Text>
       	}

      </ScrollView>
    );
  }
}

export default AlbumScreen;