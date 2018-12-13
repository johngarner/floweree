import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Image, Text, View, TouchableOpacity, ScrollView, AsyncStorage} from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import moment from "moment";

import Flower from "./Flower";

// Particle effects
import CoinsExplosion from './particle_effects/CoinsExplosion';
import StarsToTarget from './particle_effects/StarsToTarget';

var fullyGrown1 = false;
var fullyGrown2 = false;
var fullyGrown3 = false;
var fullyGrown4 = false;
var fullyGrown5 = false;

var pollenPoints = 0;
var flowerIndex = 0;
// const flower1 = require('./assets/dead-flower.png');
const flower1 = require('./assets/flowers/new/flower-01.png');
const flower2 = require('./assets/flowers/new/flower-02.png');
const flower3 = require('./assets/flowers/new/flower-03.png');
const flower4 = require('./assets/flowers/new/flower-04.png');
const flower5 = require('./assets/flowers/new/flower-05.png');
const flower6 = require('./assets/flowers/new/flower-06.png');
const flower7 = require('./assets/flowers/new/flower-07.png');
const flower8 = require('./assets/flowers/new/flower-08.png');
const flower9 = require('./assets/flowers/new/flower-09.png');

const Secondflower1 = require('./assets/flowers/new/2flower-01.png');
const Secondflower2 = require('./assets/flowers/new/2flower-02.png');
const Secondflower3 = require('./assets/flowers/new/2flower-03.png');
const Secondflower4 = require('./assets/flowers/new/2flower-04.png');
const Secondflower5 = require('./assets/flowers/new/2flower-05.png');
const Secondflower6 = require('./assets/flowers/new/2flower-06.png');
const Secondflower7 = require('./assets/flowers/new/2flower-07.png');

const Thirdflower1 = require('./assets/flowers/new/3flower-01.png');
const Thirdflower2 = require('./assets/flowers/new/3flower-02.png');
const Thirdflower3 = require('./assets/flowers/new/3flower-03.png');
const Thirdflower4 = require('./assets/flowers/new/3flower-04.png');
const Thirdflower5 = require('./assets/flowers/new/3flower-05.png');
const Thirdflower6 = require('./assets/flowers/new/3flower-06.png');
const Thirdflower7 = require('./assets/flowers/new/3flower-07.png');

const Fourthflower1 = require('./assets/flowers/new/4flower-01.png');
const Fourthflower2 = require('./assets/flowers/new/4flower-02.png');
const Fourthflower3 = require('./assets/flowers/new/4flower-03.png');
const Fourthflower4 = require('./assets/flowers/new/4flower-04.png');
const Fourthflower5 = require('./assets/flowers/new/4flower-05.png');
const Fourthflower6 = require('./assets/flowers/new/4flower-06.png');
const Fourthflower7 = require('./assets/flowers/new/4flower-07.png');

const Fifthflower1 = require('./assets/flowers/new/5flower-01.png');
const Fifthflower2 = require('./assets/flowers/new/5flower-02.png');
const Fifthflower3 = require('./assets/flowers/new/5flower-03.png');
const Fifthflower4 = require('./assets/flowers/new/5flower-04.png');
const Fifthflower5 = require('./assets/flowers/new/5flower-05.png');
const Fifthflower6 = require('./assets/flowers/new/5flower-06.png');
const Fifthflower7 = require('./assets/flowers/new/5flower-07.png');

const flowers = [flower1, flower2, flower3, flower4, flower7, flower8, flower9, Fourthflower1, Fourthflower2, Fourthflower3, Fourthflower4, Fourthflower5, Fourthflower6, Fourthflower7, Fifthflower1, Fifthflower2, Fifthflower3, Fifthflower4,Fifthflower5, Fifthflower6, Fifthflower7, Secondflower1, Secondflower2, Secondflower3, Secondflower4, Secondflower5, Secondflower6, Secondflower7, Thirdflower1, Thirdflower2, Thirdflower3, Thirdflower4, Thirdflower5, Thirdflower6, Thirdflower7];

var meterIndex = 0;
const meter1 = require('./assets/meters/meter-01.png');
const meter2 = require('./assets/meters/meter-02.png');
const meter3 = require('./assets/meters/meter-03.png');
const meters = [meter1, meter2, meter3];

var countFlower = 0;

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
	},

	pointsText: {
		color: '#ffffff',
	    fontSize: 25,
	},
	
	points: {
		marginTop: 35,
		top: 0,
	    position: "absolute",
		width: "100%",
		alignItems: "center",
	},

});

export class GameScreen extends React.Component {
	static navigationOptions = {
		// drawerLabel: 'Game',
		// headerStyle: {
		// 	backgroundColor: '#97BAFD',
		// },
		// headerTintColor: '#fff',
		header: null,
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

	async decreaseMeter(){
		//get last time the flower was watered, constantly running
		//check if that time is > 5 seconds
		//if time>5 
		//meter icon decreases
		let timeObj = JSON.parse(await AsyncStorage.getItem("timeObj"));
		if (timeObj != null) {
			let savedTime = timeObj.time;
			let currentTime = moment();
			let elapsedMilliseconds = currentTime.diff(savedTime);

			if (elapsedMilliseconds > 5000){
				meterIndex = meterIndex - 1;
				this.forceUpdate();

				if (meterIndex <= 0) {
					//dead flower image
					meterIndex = 0;
				}
			}
		}
	}

	updateMeter() {
	 	meterIndex++;
	 	if (meterIndex > meters.length-1) {
	 		meterIndex = meters.length-1;
	 	}
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
			    
			    //it'll only grow 5 seconds after being watered
			    if (elapsedMilliseconds >= 1000){

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

	updateFlower() {
	 	flowerIndex++;
	 	if (flowerIndex > flowers.length-1) {
	 		flowerIndex = flowers.length-1;
	 	}

	 	AsyncStorage.setItem("flowerState", JSON.stringify(flowerIndex));

		this.forceUpdate();

		this.updatePollenPoints();
		this.updateAlbum();
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

	updatePollenPoints(){
		// Get pollen points every other time the flower grows 
		if (flowerIndex % 2 == 0) {
			pollenPoints += 10;
		}

		AsyncStorage.setItem("pollenPoints", JSON.stringify(pollenPoints));
	}

	getPollenPoints = async () => {
		try {
			let savedPollenPoints = JSON.parse(await AsyncStorage.getItem("pollenPoints"));

			if (savedPollenPoints != null) {
				pollenPoints = savedPollenPoints;
				this.forceUpdate();
			}
		}

		catch(error) {
			alert(error);
		}
	}

	updateAlbum() {
		if (flowerIndex >= 6) {
			fullyGrown1 = true;
			//alert("add to album");
		}
		if(flowerIndex >= 13){
			fullyGrown2 = true;
		}
		if(flowerIndex >= 20){
			fullyGrown3 = true;
		}
		if(flowerIndex >= 27){
			fullyGrown4 = true;
		}
		if(flowerIndex >= 34){
			fullyGrown5 = true;
		}
		
		AsyncStorage.setItem("fullyGrown1", JSON.stringify(fullyGrown1));
		AsyncStorage.setItem("fullyGrown2", JSON.stringify(fullyGrown2));
		AsyncStorage.setItem("fullyGrown3", JSON.stringify(fullyGrown3));
		AsyncStorage.setItem("fullyGrown4", JSON.stringify(fullyGrown4));
		AsyncStorage.setItem("fullyGrown5", JSON.stringify(fullyGrown5));

	}

	getFullyGrown = async () => {
		try {
			let savedFullyGrown1 = JSON.parse(await AsyncStorage.getItem("fullyGrown1"));

			if (savedFullyGrown1 != null) {
				fullyGrown1 = savedFullyGrown1;
				this.forceUpdate();
			}
			let savedFullyGrown2 = JSON.parse(await AsyncStorage.getItem("fullyGrown2"));

			if (savedFullyGrown2 != null) {
				fullyGrown2 = savedFullyGrown2;
				this.forceUpdate();
			}
			let savedFullyGrown3 = JSON.parse(await AsyncStorage.getItem("fullyGrown3"));

			if (savedFullyGrown3 != null) {
				fullyGrown3 = savedFullyGrown3;
				this.forceUpdate();
			}
			let savedFullyGrown4 = JSON.parse(await AsyncStorage.getItem("fullyGrown4"));

			if (savedFullyGrown4 != null) {
				fullyGrown4 = savedFullyGrown4;
				this.forceUpdate();
			}
			let savedFullyGrown5 = JSON.parse(await AsyncStorage.getItem("fullyGrown5"));

			if (savedFullyGrown5 != null) {
				fullyGrown5 = savedFullyGrown5;
				this.forceUpdate();
			}
		}

		catch(error) {
			alert(error);
		}
	}

	componentDidMount() {
		this.getFlowerState();
		this.getPollenPoints();
		this.getFullyGrown();
		setInterval(this.decreaseMeter, 1000);
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

		        	<View style= {styles.points} >
	            		<Text style = {styles.pointsText} >Pollen Points: {pollenPoints}</Text>
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

     				
     				<CoinsExplosion ref={emitter => (this.coinsExplosion = emitter)} />
        			<StarsToTarget ref={emitter => (this.starsToTarget = emitter)} />

					<View style={styles.waterCanAndBookRow}>

						<TouchableOpacity onPress= {() => {
							this.checkTime();
							this.updateMeter();
							this.starsToTarget.start();
						}}>
							<Image
								source={require("./assets/buttons/wateringCan.png")}
								style={styles.buttonBig}
							/>
						</TouchableOpacity>


						<View
							style={styles.buttonBig, {width: 50}}
						/>

						<TouchableOpacity onPress= {() => this.props.navigation.navigate('Album', {
							fullyGrown1: JSON.stringify(fullyGrown1),
							fullyGrown2: JSON.stringify(fullyGrown2),
							fullyGrown3: JSON.stringify(fullyGrown3),
							fullyGrown4: JSON.stringify(fullyGrown4),
							fullyGrown5: JSON.stringify(fullyGrown5),
						})}>
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

	  					<TouchableOpacity onPress={() => this.props.navigation.navigate('Store', {pollenPoints: JSON.stringify(pollenPoints)})}>
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