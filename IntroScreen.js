import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, View, TouchableOpacity, Animated, Image, Easing } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

export class IntroScreen extends React.Component {
  constructor() {
    super();
    this.spinValue = new Animated.Value(0);
  }

	static navigationOptions = {
		title: 'Intro Screen',
		headerStyle: {
			backgroundColor: '#FFCB8B',
		},
		headerTintColor: '#fff',
	};

  _onPressButton() {
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
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    }); // for spinning animation

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#FFCB8B" }}>
        <Animated.Image
          style={{
            width: 100,
            height: 100,
            transform: [{rotate: spin}] }}
            source={require('./assets/flowers/homescreenflower.png')}
        />

        <Button
          title= "Play Game"
          onPress={() => this.props.navigation.navigate('Game')}
        />
        <Button
            title= "How to Play"
            onPress={() => this._onPressButton()}
        />
        </View>
    );
  }
}

export default IntroScreen;