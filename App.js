import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Image, Text, View } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Image, Alert, AppRegistry, Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';


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
				source = {require('./assets/flowers/flower1.png')}
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

        <View style={styles.flowerContainer}>
          <Image source={require('./assets/flowers/flower1.png')}
          />

        </View>

        <View style={styles.buttonContainer1}>

          <Button
            onPress= {() => this.props.navigation.navigate('Tools')}
            //onPress= {() => this.props.navigation.navigate.openDrawer()}
            title="Open Tools"
          />
          <TouchableOpacity onPress={this._onPressButton}>
            <Image
              source={require("./assets/buttons/watering_can.png")}
              style={styles.button}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer2}>
          <Button
            onPress={() => this.props.navigation.navigate('Store')}
            title="Store"
            color="#841584"
          />
          <TouchableOpacity onPress={this._onPressButton}>
            <Image
              source={require("./assets/buttons/shop.png")}
              style={styles.button}
            />
          </TouchableOpacity>

        </View>

        <View style={styles.buttonContainer3}>
          <Button
            onPress={this._onPressButton}
            title="Info"
          />
          <TouchableOpacity onPress={this._onPressButton}>
            <Image
              source={require("./assets/buttons/info.png")}
              style={styles.button}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer4}>
          <Button
            onPress= {() => this.props.navigation.navigate('Pictures')}
            title="History"
            color="#841584"
          />
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

//just for color

class ToolsScreen extends React.Component{
	static navigationOptions = {
		drawerLabel: 'Tools',
		//title: 'Tools',
		drawerIcon: ({tintColor}) => (
			<Image
				source = {require('./assets/flowers/flower1.png')}
				styles = {[styles.icon, {tintColor:tintColor}]}
			/>
		),
	};
	render() {
		return (
			<Button
				onPress= {() =>this.props.navigation.goBack()}
				title= "Back to Game"
			/>
			// <Button
			// 	onPress= {() => this.props.navigation.navigate.openDrawer()}
			// 	title = "Open Tools"
			// />
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
  	Tools: {
  		screen: ToolsScreen,
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

const MyApp = createDrawerNavigator ({
	Game: {
		screen: GameScreen,
	},
	Tools: {
		screen: ToolsScreen,
	},
});

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

