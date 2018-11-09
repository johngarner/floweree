import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
// import Moment from 'react-moment';
// import 'moment-timezone';

import Clock from "./Clock";

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
			backgroundColor: '#FFCB8B',
		},
		headerTintColor: '#fff',
	};

  	_onPressButton() {
  		Alert.alert('Here is information on how you play the game')
	}	

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#FFCB8B" }}>
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
				{
		        // <Moment interval = {3000} >
		        //   1976-04-19T12:59-500
		        // </Moment>

		        // <View style={{alignItems: 'center'}}>
		        //   <Text>Time!</Text>
		        // </View>
				}

				<View style={styles.topPart}>

					<View style={styles.backgroundContainer}>
						<Image
						    source={require("./assets/backgrounds/window_top.png")}
							style={{width: "100%", height: "100%", resizeMode: "contain"}}
						/>
		        	</View>

		        	<View style={styles.meterContainer}>
	            		<Image
	              			source={meters[meterIndex]}
	              			style={styles.meter}
	            		/>
	        		</View>

					<View style={styles.flowerContainer}>
						<Image
							source={flowers[flowerIndex]}
							style={{width: "100%", height: "100%", resizeMode: "contain"}}
						/>
		        	</View>

					<View style={styles.waterCanAndBookRow}>
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
								style={styles.buttonBig}
							/>
						</TouchableOpacity>

						<View
							style={styles.buttonBig, {width: 50}}
						/>

						<TouchableOpacity onPress= {() => this.props.navigation.navigate('Pictures')}>
							<Image
								source={require("./assets/buttons/book.png")}
								style={styles.buttonBig}
							/>
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.bottomPart}>

	        		<View style={styles.backgroundContainer}>
		            	<Image
		                	source={require("./assets/backgrounds/window_bottom.png")}
		                	style={{width: "100%", height: 175, resizeMode: "contain"}}
		            	/>
	          		</View>

          			<View style={styles.infoAndStoreRow}>
			  			<TouchableOpacity onPress={this._onPressButton}>
							<Image
								source={require("./assets/buttons/info.png")}
				  				style={styles.buttonBig}
							/>
	  					</TouchableOpacity>

	  					<TouchableOpacity onPress={() => this.props.navigation.navigate('Store')}>
	  					  <Image
	  					    source={require("./assets/buttons/shop.png")}
	  					    style={styles.buttonBig}
	  					  />
	  					</TouchableOpacity>
					</View>

        		</View>

    		</View>

    );
  }
}

//color comment (igonore)

class StoreScreen extends React.Component {
	static navigationOptions = {
		title: 'Store',
	};

  	render() {
    	return (
      		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        		<Text>This will be a store... eventually</Text>
        		<Clock/>
      		</View>
    	);
  	}
}


class PicturesScreen extends React.Component {
	static navigationOptions = {
		title: 'Pictures',
		headerStyle: {
			backgroundColor: '#97BAFD',
		},
		headerTintColor: '#fff',
	};

  	_onPressButton() {
  		Alert.alert('Next Page')

	}
  	render() {
    	return (
    		// <ScrollView>
      		<View style={{ width: "100%", height: "100%", backgroundColor: "#97BAFD"}}>
	        	<Image
	        		source = {require("./assets/flowers/new/flower3.png")}
	        		style= {{width: 100, height: 100}}
	        	/>

	        	<View style={styles.buttonContainer3}>
	        	  	<TouchableOpacity onPress={() => this.props.navigation.navigate('Pictures')}>
	        	  	  	<Image
	        	  	  	  	source={require("./assets/buttons/whitearrow2.png")}
	        	  	  	  	style={styles.button}
	        	  	  	/>
	        	  	</TouchableOpacity>
	        	</View>

	        	<View style={styles.buttonContainer4}>
		        	<TouchableOpacity onPress= {() => this.props.navigation.navigate('Pictures')}>
		        		<Image
		        			source={require("./assets/buttons/whitearrow.png")}
		        			style={styles.button}
		        	  	/>
		        	</TouchableOpacity>
	        	</View>
      		</View>
    );
  }
}


{
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Image
//         	source = {require('./assets/flowers/homescreenflower.png')}
//         	style= {{width: 100, height: 100}}
//         />
//         <Button
//           title= "Play Game"
//           onPress={() => this.props.navigation.navigate('Game')}
//         />
//         <Button
//             title= "How to Play"
//             onPress={() => this._onPressButton()}
//         />
//         </View>
//     );
//   }
// }
}


const styles = StyleSheet.create({
	container: {
	  	flex: 1,
	  	justifyContent: "center",
	  	alignItems: "center",
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
		right: 0,
		width: "100%", height: "100%",
	},

	button: {
	    width: 50,
	    height: 50
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

	meter: {
		width: 70,
		height: 200,
	},

	meterContainer: {
		// marginTop: "35%",
		// top: 0,
		// left: 0,
		// position: "absolute",
	},

  	buttonBig: {
    	width: 110,
    	height: 110,
  	},

  	topPart: {
    	flex: 0.75,
    	width: "100%",
    	flexDirection: 'column',
    	justifyContent: "flex-end",
  	},

  	waterCanAndBookRow: {
    	flexDirection: 'row',
    	justifyContent: "center",
    	paddingRight:"5%",
  	},

  	bottomPart: {
    	flex: 0.25,
    	width: "100%",
  	},

  	infoAndStoreRow: {
    	paddingTop: "5%",
    	flexDirection: "row",
    	justifyContent: "center",
    	alignItems: "center",
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
		return <RootStack/>;
	}
}
