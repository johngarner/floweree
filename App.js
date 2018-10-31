import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

var flowerIndex = 0;
const flower1 = require('./assets/flowers/flower1.png');
const flower2 = require('./assets/flowers/flower2.png');
const flower3 = require('./assets/flowers/flower4.png');
const flower4 = require('./assets/flowers/flower5.png');
const flower5 = require('./assets/flowers/flower6.png');
const flower6 = require('./assets/flowers/flower7.png');
const flower7 = require('./assets/flowers/flower8.png');
const flowers = [flower1, flower2, flower3, flower4, flower5, flower6, flower7];

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
		// title: 'Game Screen',
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

        <Image
          source={require("./assets/backgrounds/mound.png")}
          style={styles.background}
        />

        <View style={styles.flowerContainer}>
          <Image source={flowers[flowerIndex]}/>
        </View>

        <View style={styles.meterContainer}>
	        <Image
						source={meters[meterIndex]}
						style={styles.meter}
					/>
        </View>

        <View style={styles.buttonContainer1}>
          <TouchableOpacity onPress= {() => {
            if (flowerIndex < 6) { flowerIndex++; }
            if (meterIndex < 3) { meterIndex++; }
            this.forceUpdate();
          }}>
            <Image
              source={require("./assets/buttons/watering_can.png")}
              style={styles.button}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer2}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Store')}>
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
          <TouchableOpacity onPress= {() => this.props.navigation.navigate('Pictures')}>
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



// class ToolsScreen extends React.Component{
// 	static navigationOptions = {
// 		drawerLabel: 'Tools',
// 		//title: 'Tools',
// 		drawerIcon: ({tintColor}) => (
// 			<Image
// 				source = {require('./assets/flowers/flower1.png')}
// 				styles = {[styles.icon, {tintColor:tintColor}]}
// 			/>
// 		),
// 	};
// 	render() {
// 		return (
// 			<Button
// 				onPress= {() =>this.props.navigation.goBack()}
// 				title= "Back to Game"
// 			/>
// 			// <Button
// 			// 	onPress= {() => this.props.navigation.navigate.openDrawer()}
// 			// 	title = "Open Tools"
// 			// />
// 		);
// 	}

// }

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
  icon: {
  	width:24,
  	height: 24
  },

  container: {
   width: "100%",
   height: "100%",
   backgroundColor: "white"
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
    position: "absolute"
  },

  buttonContainer2: {
    marginTop: 30,
    marginRight: 20,
    right: 0,
    top: 0,
    position: "absolute"
  },

  buttonContainer3: {
    marginBottom: 30,
    marginLeft: 20,
    left: 0,
    bottom: 0,
    position: "absolute"
  },

  buttonContainer4: {
    marginBottom: 30,
    marginRight: 20,
    right: 0,
    bottom: 0,
    position: "absolute"
  },

  flowerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

	meter: {
		width: 30,
		height: 200
	},

  meterContainer: {
	marginBottom: 350,
    marginLeft: 30,
    bottom: 0,
    left: 0,
   	// justifyContent: "center",
   	// alignItems: "center",
    position: "absolute"
  },

  background: {
    width: "100%",
    height: "100%",
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
  	// Tools: {
  	// 	screen: ToolsScreen,
  	// },
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

// const MyApp = createDrawerNavigator ({
// 	Game: {
// 		screen: GameScreen,
// 	},
// 	Tools: {
// 		screen: ToolsScreen,
// 	},
// });

export default class App extends React.Component {
	render() {
		return <RootStack />;
	}
}
// export default createDrawerNavigator ({
// 	Game: ("screen": GameScreen...),
// 	Tools: ("screen": ToolsScreen...),

// ),
// 	{
// 		drawerPosition: 'right',
// 		initialRouteName: 'Game',
// 		drawerBackgroundColor: 'orange',
// 		drawerWidth: 200
// 	}
// });
