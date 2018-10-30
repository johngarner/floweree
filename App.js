import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

var imageCount =0;
const image1 = require('./assets/flowers/flower1.png')
const image2 = require('./assets/flowers/flower2.png')
const image3 = require('./assets/flowers/flower4.png')
const image4 = require('./assets/flowers/flower5.png')
const image5 = require('./assets/flowers/flower6.png')
const image6 = require('./assets/flowers/flower7.png')
const image7 = require('./assets/flowers/flower8.png')
const images = [image1, image2, image3, image4, image5, image6, image7];


class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Welcome Screen',
	};

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title= "Play Game"
          onPress={() => this.props.navigation.navigate('Game')}
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
				source = {images[imageCount]}
				styles = {[styles.icon, {tintColor:tintColor}]}
			/>
		),
	};

  _onPressButton() {
    Alert.alert('Here is information on how you play the game')
  }

  // renderImage() {
  //   var imgSource = images[imageCount];
  //   return (
  //     <Image source={imgSource}
  //     />
  //   );
  // }

  render() {

    return (
      <View style={styles.container}>

        <View style={styles.flowerContainer}>
          <Image source={images[imageCount] }/>

          // this.forceUpdate();
          // this.renderImage()

        </View>

        <View style={styles.meterContainer}>
	        <Image
	              source={require("./assets/meters/orange.jpg")}
	          />
        </View>


        <View style={styles.buttonContainer1}>
          <TouchableOpacity onPress= {() => {
            if (imageCount < 6){
              imageCount++;
            }
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
  	height: 24,
  },

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
    alignItems: "center",
  },

  meterContainer: {
    width: 5,
    height: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }

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
