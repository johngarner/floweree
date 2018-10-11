import React, { Component } from 'react';
import { Image, Alert, AppRegistry, Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('Clicky!')
  }

  render() {

    return (
      <View style={styles.container}>

        <View style={styles.flowerContainer}>
          <Image source={require('./assets/flowers/flower1.png')}/>
        </View>

        <View style={styles.buttonContainer1}>
          <TouchableOpacity onPress={this._onPressButton}>
            <Image
              source={require("./assets/buttons/watering_can.png")}
              style={styles.button}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer2}>
          <TouchableOpacity onPress={this._onPressButton}>
            <Image
              source={require("./assets/buttons/shop.png")}
              style={styles.button}
            />
          </TouchableOpacity>

        </View>

        <View style={styles.buttonContainer3}>
          <TouchableOpacity onPress={this._onPressButton}>
            <Image
              source={require("./assets/buttons/info.png")}
              style={styles.button}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer4}>
          <TouchableOpacity onPress={this._onPressButton}>
            <Image
              source={require("./assets/buttons/book.png")}
              style={styles.button}
            />
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   width: "100%",
   height: "100%",
   backgroundColor: "white",
  },
  button: {
      width: 50,
      height: 50
  },
  buttonContainer1: {
    marginTop: 30,
    marginLeft: 20,
    left: 0,
    top: 0,
    // backgroundColor: "red",
    position: "absolute",
  },
  buttonContainer2: {
    marginTop: 30,
    marginRight: 20,
    right: 0,
    top: 0,
    // backgroundColor: "blue",
    position: "absolute",
  },
  buttonContainer3: {
    marginBottom: 30,
    marginLeft: 20,
    left: 0,
    bottom: 0,
    // backgroundColor: "green",
    position: "absolute",
  },
  buttonContainer4: {
    marginBottom: 30,
    marginRight: 20,
    right: 0,
    bottom: 0,
    // backgroundColor: "purple",
    position: "absolute",
  },
  flowerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
