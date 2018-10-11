import React, { Component } from 'react';
<<<<<<< HEAD
import { Alert, AppRegistry, Button, StyleSheet, Image, Text, View } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
=======
import { Image, Alert, AppRegistry, Button, StyleSheet, Text, View } from 'react-native';
>>>>>>> fbe42b28df7b017fe2cadffc1b7c272c57862004

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
<<<<<<< HEAD
          <Image source={require('./assets/flowers/flower1.png')}
          />
=======
          <Image source={require('./assets/flowers/flower1.png')}/>
>>>>>>> fbe42b28df7b017fe2cadffc1b7c272c57862004
        </View>
        
        <View style={styles.buttonContainer1}>

          <Button
            onPress= {() => this.props.navigation.navigate('Tools')}
            //onPress= {() => this.props.navigation.navigate.openDrawer()}
            title="Open Tools"
          />
        </View>

        <View style={styles.buttonContainer2}>
          <Button
            onPress={() => this.props.navigation.navigate('Store')}
            title="Store"
            color="#841584"
          />
        </View>

        <View style={styles.buttonContainer3}>
          <Button
            onPress={this._onPressButton}
            title="Info"
          />
        </View>

        <View style={styles.buttonContainer4}>
          <Button
            onPress= {() => this.props.navigation.navigate('Pictures')}
            title="History"
            color="#841584"
          />
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
<<<<<<< HEAD

   flowerContainer: {
=======
  flowerContainer: {
>>>>>>> fbe42b28df7b017fe2cadffc1b7c272c57862004
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
<<<<<<< HEAD

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
=======
>>>>>>> fbe42b28df7b017fe2cadffc1b7c272c57862004
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

