import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import GameScreen from "./GameScreen";

const finalflower1 = require('./assets/flowers/thumbnails/flower-01-thumbnail.png');
const finalflower2 = require('./assets/flowers/thumbnails/flower-04-thumbnail.png');
const finalflower3 = require('./assets/flowers/thumbnails/flower-05-thumbnail.png');
const finalflower4 = require('./assets/flowers/thumbnails/flower-02-thumbnail.png');
const finalflower5 = require('./assets/flowers/thumbnails/flower-03-thumbnail.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  flowerContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "center",
  },
  flower: {
    width: 175,
    height: 175,
    resizeMode: "cover",
    marginTop: 20,
    marginBottom: 20,
  }
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
    if (this.state.fullyGrown5 == true) {
      return (
        <ScrollView contentContainerStyle={styles.container}>
          
          <View style={styles.flowerContainer}>
            <Image
              source={finalflower1}
              style={styles.flower}
            />
            <Image
              source={finalflower2}
              style={styles.flower}
            />
            <Image
              source={finalflower3}
              style={styles.flower}
            />
            <Image
              source={finalflower4}
              style={styles.flower}
            />
            <Image
              source={finalflower5}
              style={styles.flower}
            />
          </View>
          

        </ScrollView>
      );
    }

    if (this.state.fullyGrown4 == true) {
      return (
        <ScrollView contentContainerStyle={styles.container}>
          
          <View style={styles.flowerContainer}>
            <Image
              source={finalflower1}
              style={styles.flower}
            />
            <Image
              source={finalflower2}
              style={styles.flower}
            />
            <Image
              source={finalflower3}
              style={styles.flower}
            />
            <Image
              source={finalflower4}
              style={styles.flower}
            />
          </View>
          

        </ScrollView>
      );
    }

    if (this.state.fullyGrown3 == true) {
      return (
        <ScrollView contentContainerStyle={styles.container}>
          
          <View style={styles.flowerContainer}>
            <Image
              source={finalflower1}
              style={styles.flower}
            />
            <Image
              source={finalflower2}
              style={styles.flower}
            />
            <Image
              source={finalflower3}
              style={styles.flower}
            />
          </View>
          

        </ScrollView>
      );
    }

    if (this.state.fullyGrown2 == true) {
      return (
        <ScrollView contentContainerStyle={styles.container}>
          
          <View style={styles.flowerContainer}>
            <Image
              source={finalflower1}
              style={styles.flower}
            />
            <Image
              source={finalflower2}
              style={styles.flower}
            />
          </View>
          

        </ScrollView>
      );
    }

    if (this.state.fullyGrown1 == true) {
      return (
        <ScrollView contentContainerStyle={styles.container}>
          
          <View style={styles.flowerContainer}>
            <Image
              source={finalflower1}
              style={styles.flower}
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