import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Image, Text, View, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import moment from "moment";

import Flower from "./Flower";

var flowerIndex = 0;
const flower1 = require('./assets/flowers/new/flower-01.png');
const flower2 = require('./assets/flowers/new/flower-02.png');
const flower3 = require('./assets/flowers/new/flower-03.png');
const flower4 = require('./assets/flowers/new/flower-04.png');
const flower5 = require('./assets/flowers/new/flower-05.png');
const flower6 = require('./assets/flowers/new/flower-06.png');
const flower7 = require('./assets/flowers/new/flower-07.png');
const flower8 = require('./assets/flowers/new/flower-08.png');
const flower9 = require('./assets/flowers/new/flower-09.png');
const flowers = [flower1, flower2, flower3, flower4, flower5, flower6, flower7, flower8, flower9];

var meterIndex = 0;
const meter1 = require('./assets/meters/meter-01.png');
const meter2 = require('./assets/meters/meter-02.png');
const meter3 = require('./assets/meters/meter-03.png');
const meter4 = require('./assets/meters/meter-04.png');
const meters = [meter1, meter2, meter3, meter4];

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

export class GameScreen extends React.Component {

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

	infoButton() {
    	Alert.alert('How to play', 'Click the yellow watering can to water your flower. The flower needs to be watered once every 24 hours in order for the flower to grow.');
	}

	saveTimeData() {
	    let timeObj = {
	      time: moment(),
	      timeFormatted: moment().format("hh:mm:ss A"),
	    }

	    AsyncStorage.setItem("timeObj", JSON.stringify(timeObj));
	}

	updateMeter() {
	 	meterIndex++;
	 	if (meterIndex > meters.length-1) {
	 		meterIndex = meters.length-1;
	 	}
		this.forceUpdate();
	 }

	updateFlower() {
	 	flowerIndex++;
	 	if (flowerIndex > flowers.length-1) {
	 		flowerIndex = flowers.length-1;
	 	}

	 	AsyncStorage.setItem("flowerState", JSON.stringify(flowerIndex));

		this.forceUpdate();
	 }

	checkTime = async () => {
	 	try {
	      	let timeObj = await AsyncStorage.getItem("timeObj");
	      	let parsedTimeObj = JSON.parse(timeObj);

	      	if (parsedTimeObj != null) {
	      		let savedTime = parsedTimeObj.time;
			    let savedTimeFormatted = parsedTimeObj.timeFormatted;

			    let currentTime = moment();
			    let currentTimeFormatted = moment().format("hh:mm:ss A");

			    let elapsedMilliseconds = currentTime.diff(savedTime);

			    // alert("saved time: " + savedTimeFormatted + "\n" +
			    // 		"current time: " + currentTimeFormatted + "\n" +
			    // 		"elapsed: " + elapsedMilliseconds + " milliseconds");
			    
			    if (elapsedMilliseconds >= 5000){
			    	this.updateFlower();
			    	this.saveTimeData();
			    }	
	      	} 
	      	else {
	      		this.saveTimeData();
	      	}
		    
	    }

	    catch(error) {
	       alert(error);
	    }
	}

	getFlowerState = async () => {
		try {
			let flowerState = JSON.parse(await AsyncStorage.getItem("flowerState"));

			if (flowerState != null) {
				flowerIndex = flowerState;
				this.forceUpdate();
			}
		}

		catch(error) {
			alert(error);
		}
	}

	componentDidMount() {
		this.getFlowerState();
	}

	render() {

    	return (

    		<View style={styles.container}>

				<View style={styles.topPart}>

					<View style={styles.backgroundContainer}>
						<Image
						    source={require("./assets/backgrounds/window_top.png")}
							style={{width: "100%", height: "100%", resizeMode: "cover"}}
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
          					style={{width: "100%", height: "100%", resizeMode: "cover"}}
        				/>
     				 </View>

					<View style={styles.waterCanAndBookRow}>

						<TouchableOpacity onPress= {() => {
							this.checkTime();
							this.updateMeter();
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
		                	style={{width: "100%", height: 175, resizeMode: "cover"}}
		            	/>
	          		</View>

          			<View style={styles.infoAndStoreRow}>
			  			<TouchableOpacity onPress={this.infoButton}>
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

export default GameScreen;