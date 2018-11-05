import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

var flowerIndex = 0;
const flower1 = require('./assets/flowers/new/flower1.png');
const flower2 = require('./assets/flowers/new/flower2.png');
const flower3 = require('./assets/flowers/new/flower3.png');
const flowers = [flower1, flower2, flower3];

var meterIndex = 0;
const meter1 = require('./assets/meters/meter-01.png');
const meter2 = require('./assets/meters/meter-02.png');
const meter3 = require('./assets/meters/meter-03.png');
const meter4 = require('./assets/meters/meter-04.png');
const meters = [meter1, meter2, meter3, meter4];




class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Welcome Screen',
		headerStyle: {
			backgroundColor: '#f4511e',
		},
		headerTintColor: '#fff',
	};

  _onPressButton() {
  Alert.alert('Here is information on how you play the game')

}

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
        	source = {require('./assets/flowers/homescreenflower.png')}
        	style= {{width: 100, height: 100}}
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


class GameScreen extends React.Component {
	static navigationOptions = {
		drawerLabel: 'Game',
		headerStyle: {
			backgroundColor: '#97BAFD',
		},
		headerTintColor: '#fff',
		drawerIcon: ({ tintColor}) => (
			<Image
				styles = {[styles.icon, {tintColor:tintColor}]}
			/>
		),
	};

  _onPressButton() {
    Alert.alert('Here is information on how you play the game')
  }

  render() {

    return (
      <View style={styles.container}>

        <View style={styles.backgroundContainer}>
          <Image
              source={require("./assets/backgrounds/window.png")}
              style={{width: "100%", height: "100%"}}
          />
        </View>

        <View style={styles.flowerContainer}>
          <Image
              source={flowers[flowerIndex]}
              style={{width: "100%", height: "100%"}}
          />
        </View>


         <View style={styles.meterContainer}>
          <Image
              source={meters[meterIndex]}
              style={styles.meter}
          />
        </View>

				<View style={{flex: 0.795, flexDirection: 'column', justifyContent: "flex-end"}}>
					<View style={{flexDirection: 'row', justifyContent: "center", paddingRight:"5%"}}>

						<TouchableOpacity onPress= {() => {
							// if (flowerIndex < flowers.length - 1) { flowerIndex++; }
							flowerIndex++;
							flowerIndex %= (flowers.length);
							meterIndex++;
							meterIndex %= (meters.length);
							this.forceUpdate();
						}}>
							<Image
								source={require("./assets/buttons/wateringCan.png")}
								style={{width: 120, height: 120}}
							/>
						</TouchableOpacity>

						<View
							style={{width: 50, height: 120}}
						/>

					  <TouchableOpacity onPress= {() => this.props.navigation.navigate('Pictures')}>
					    <Image
					      source={require("./assets/buttons/book.png")}
								style={{width: 120, height: 120}}
					    />
					  </TouchableOpacity>

					</View>
				</View>

				<View style={{flex: 0.205, flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
					<TouchableOpacity onPress={this._onPressButton}>
					  <Image
					    source={require("./assets/buttons/info.png")}
					    style={{width: 120, height: 120}}
					  />
					</TouchableOpacity>

					<TouchableOpacity onPress={() => this.props.navigation.navigate('Store')}>
					  <Image
					    source={require("./assets/buttons/shop.png")}
					    style={{width: 90, height: 90}}
					  />
					</TouchableOpacity>
				</View>

      </View>

    );
  }
}

class StoreScreen extends React.Component {
	static navigationOptions = {
		title: 'Store',
	};

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This will be a store... eventually</Text>
      </View>
    );
  }
}

class PicturesScreen extends React.Component {
	static navigationOptions = {
		title: 'Pictures',
	};

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This will be a photoalbum... eventually</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#97BAFD"
  },

	backgroundContainer: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},

	flowerContainer: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0
	},

	meter: {
		width: 30, 
		height: 200

	},

	meterContainer: {
		marginBottom:350,
		marginLeft: 30,
		bottom: 0,
		left: 0,
		position: "absolute"
	},

});

const RootStack = createStackNavigator(
  {
  	Home: {
			screen: HomeScreen,
		},
  	Game: {
  		screen: GameScreen,
  	},
  	Store: {
  		screen: StoreScreen,
  	},
  	Pictures: {
  		screen: PicturesScreen,
  	},
  },

  {
  	initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
	render() {
		return <RootStack />;
	}
}
