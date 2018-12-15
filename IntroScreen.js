import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, View, TouchableOpacity, Animated, Image, Easing, ImageBackground } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';


//Designated locations for objects
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97BAFD"
  },
});


export class IntroScreen extends React.Component {
  //Opening screen containing two buttons, one which tells users how to play and the other which takes them to the game
  
  constructor() {
    super();
    this.spinValue = new Animated.Value(0);
  }

	static navigationOptions = {
    header: null,
	};

  infoButton() {
  		Alert.alert('How to play', 'Click the yellow watering can to water your flower. The flower needs to be watered once every 24 hours in order for the flower to grow.');
	}

  componentDidMount() {
    this.spin();
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin()); // call itself again when the animation is completed, basically creating an infinite animation
  }	

  render() {
    // <StatusBar hidden />

    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    }); // for spinning animation

    return (
      <ImageBackground source={require("./assets/welcomeScreen/welcomeBG.png")} style={styles.container}>

        <View>
          <Image
            style = {{width: 300, height: 80}}
            source = {require("./assets/welcomeScreen/floweree.png")}
          />
        </View>

        <Animated.Image
          style={{
            width: 130,
            height: 130,
            transform: [{rotate: spin}] }}
            source={require('./assets/welcomeScreen/flowereeLogo.png')}
        />

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Game')}>
          <Image
            style = {{width: 170, height: 70, marginTop: 20}}
            source = {require("./assets/welcomeScreen/play.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.infoButton()}>
          <Image
            style = {{width: 170, height: 70, marginTop: 10}}
            source = {require("./assets/welcomeScreen/howToPlay.png")}
          />
        </TouchableOpacity>

      </ImageBackground>
    );
  }
}

export default IntroScreen;