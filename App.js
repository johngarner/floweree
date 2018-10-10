import React, { Component } from 'react';
import { Image, Alert, AppRegistry, Button, StyleSheet, Text, View } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('Alert')
  }

  render() {

    return (
      <View style={styles.container}>

        <View style={styles.flowerContainer}>
          <Image source={require('./assets/flowers/flower1.png')}/>
        </View>
        
        <View style={styles.buttonContainer1}>

          <Button
            onPress={this._onPressButton}
            title="1"
          />
        </View>

        <View style={styles.buttonContainer2}>
          <Button
            onPress={this._onPressButton}
            title="2"
            color="#841584"
          />
        </View>

        <View style={styles.buttonContainer3}>
          <Button
            onPress={this._onPressButton}
            title="3"
          />
        </View>

        <View style={styles.buttonContainer4}>
          <Button
            onPress={this._onPressButton}
            title="4"
            color="#841584"
          />
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
  buttonContainer1: {
    marginTop: 30,
    marginLeft: 30,
    left: 0,
    top: 0,
    backgroundColor: "red",
    position: "absolute",
  },
  buttonContainer2: {
    marginTop: 30,
    marginRight: 30,
    right: 0,
    top: 0,
    backgroundColor: "blue",
    position: "absolute",
  },
  buttonContainer3: {
    marginBottom: 30,
    marginLeft: 30,
    left: 0,
    bottom: 0,
    backgroundColor: "green",
    position: "absolute",
  },
  buttonContainer4: {
    marginRight: 30,
    marginBottom: 30,
    right: 0,
    bottom: 0,
    backgroundColor: "purple",
    position: "absolute",
  },
  flowerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
