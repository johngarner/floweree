import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Image, Text, View, TouchableOpacity, ScrollView, AsyncStorage} from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import moment from "moment";

// Particles effect import from react native particles
import StarsToTarget from './particle_effects/StarsToTarget';
import Confetti from './particle_effects/Confetti';

// checks if the flower is fully grown (accessed in AlbumScreen)
var fullyGrown1 = false;
var fullyGrown2 = false;
var fullyGrown3 = false;
var fullyGrown4 = false;
var fullyGrown5 = false;


var pollenPoints = 0;
var flowerIndex = 1;


//Imported artwork found in Assets folder
const deadFlower = require('./assets/dead-flower.png');

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

const flowers = [deadFlower, flower1, flower2, flower3, flower4, flower7, flower8, flower9, Fourthflower1, Fourthflower2, Fourthflower3, Fourthflower4, Fourthflower5, Fourthflower6, Fourthflower7, Fifthflower1, Fifthflower2, Fifthflower3, Fifthflower4,Fifthflower5, Fifthflower6, Fifthflower7, Secondflower1, Secondflower2, Secondflower3, Secondflower4, Secondflower5, Secondflower6, Secondflower7, Thirdflower1, Thirdflower2, Thirdflower3, Thirdflower4, Thirdflower5, Thirdflower6, Thirdflower7];

var meterIndex = 0;
const meter1 = require('./assets/meters/meter-01.png');
const meter2 = require('./assets/meters/meter-02.png');
const meter3 = require('./assets/meters/meter-03.png');
const meter4 = require('./assets/meters/meter-04.png');
const meters = [meter1, meter2, meter3, meter4];

var countFlower = 0;


// Designated locations for objects
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
	// This file holds all the game mechanism such as the timing for the meter, the flower growth, the meter and flower interaction, and the pollen points.


	static navigationOptions = {
		header: null,
	};


	// Information button text
	infoButton() {
    	Alert.alert('How to play', 'Click the yellow watering can to water your flower. The flower needs to be watered once every 24 hours in order for the flower to grow.');
	}


	// Time tracker for how long it has been since the flower has been watered once the app has been closed
	saveTimeDataDeath() {
	    let timeObjj = {
	      time: moment(),
	      timeFormatted: moment().format("hh:mm:ss A"),
	    }

	    AsyncStorage.setItem("timeObjj", JSON.stringify(timeObjj));
	}

	// Time tracker for the last time the plant has been watered when the app is open
	saveTimeData() {
	    let timeObj = {
	      time: moment(),
	      timeFormatted: moment().format("hh:mm:ss A"),
	    }

	    AsyncStorage.setItem("timeObj", JSON.stringify(timeObj));
	}

	//updates the meter by changing the index and subsequently the image displayed. 
	updateMeter() {
	 	meterIndex++;
	 	if (meterIndex > meters.length-1) {
	 		meterIndex = meters.length-1;
	 	}
		this.forceUpdate();
		AsyncStorage.setItem("meterState", JSON.stringify(meterIndex));
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

				// for testing purposes the flower is set to grow every second if properly watered
			    if (elapsedMilliseconds >= 1000){

			    	this.updateFlower();
			    	this.saveTimeData();
			    	this.starsToTarget.start();
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



	// updates flower image based on index similar to updateMeter
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


	// getter method to check the flower state 
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


	//getter method to check the meter state
	getMeterState = async () => {
		try {
			let meterState = JSON.parse(await AsyncStorage.getItem("meterState"));

			if (meterState != null) {
				meterIndex = meterState;
				this.forceUpdate();
			}
		}

		catch(error) {
			alert(error);
		}
	}


	//get 10 pollen points for every flower growth 
	updatePollenPoints(){
		if (flowerIndex % 1 == 0) {
			pollenPoints += 10;
		}

		AsyncStorage.setItem("pollenPoints", JSON.stringify(pollenPoints));
	}


	//getter method for pollen points (to be used in the Store in the future- beyond MVP)
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


	//Checks if the flower has been completely grown and alerts the user when it has. Used in Album Screen 
	updateAlbum() {
		if (flowerIndex == 7) {
			fullyGrown1 = true;
			Alert.alert('Congratulations!',"You've grown your first flower!");
			this.confetti.start();
		}
		if(flowerIndex == 14){
			fullyGrown2 = true;
			Alert.alert('Hooray!',"You've grown your second flower!");
			this.confetti.start();
		}
		if(flowerIndex == 21){
			fullyGrown3 = true;
			Alert.alert('Huzzah!',"You've grown your third flower!");
			this.confetti.start();
		}
		if(flowerIndex == 28){
			fullyGrown4 = true;
			Alert.alert('Great Scott!',"You've grown your fourth flower!");
			this.confetti.start();
		}
		if(flowerIndex == 35){
			fullyGrown5 = true;
			Alert.alert('Wowzah!',"You've grown your fifth and final flower; thank you for playing!");
			this.confetti.start();
		}
		
		AsyncStorage.setItem("fullyGrown1", JSON.stringify(fullyGrown1));
		AsyncStorage.setItem("fullyGrown2", JSON.stringify(fullyGrown2));
		AsyncStorage.setItem("fullyGrown3", JSON.stringify(fullyGrown3));
		AsyncStorage.setItem("fullyGrown4", JSON.stringify(fullyGrown4));
		AsyncStorage.setItem("fullyGrown5", JSON.stringify(fullyGrown5));

	}


	// getter method for fully grown flowers. Used in Album Screen
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

	//checks to see how much time has passed since the flower was last watered when the user reopens the app
	//if it has been longer than the designated time the meter goes down (note- times have been shortened for testing/demo purposes)
	async checkDeathTime() {
	 	try {
	      	let timeObjj = await AsyncStorage.getItem("timeObjj");
	      	let parsedTimeObj = JSON.parse(timeObjj);

	      	if (parsedTimeObj != null) {
	      		let savedTime = parsedTimeObj.time;
			    let savedTimeFormatted = parsedTimeObj.timeFormatted;

			    let currentTime = moment();
			    let currentTimeFormatted = moment().format("hh:mm:ss A");

			    let elapsedMilliseconds = currentTime.diff(savedTime);

			   	if (60000 <= elapsedMilliseconds && elapsedMilliseconds < 120000) {
			   		meterIndex = 2
			   		this.forceUpdate();

			   		this.saveTimeDataDeath(); 
			   	}

			   	if (120000 <= elapsedMilliseconds && elapsedMilliseconds < 180000) {
			   		meterIndex = 1
			   		this.forceUpdate();

			   		this.saveTimeDataDeath(); 
			   	}

			   	if (180000 <= elapsedMilliseconds && elapsedMilliseconds < 240000) {
			   		meterIndex = 0
			   		this.forceUpdate();

			   		this.saveTimeDataDeath(); 
			   	}

			   	if (240000 <= elapsedMilliseconds) {
			   		meterIndex = 0
			   		flowerIndex = 0;
			   		this.forceUpdate();

			   		this.saveTimeDataDeath(); 
			   	}

			}
		}
		catch(error) {
			alert(error);
		}
	}


	// Calls methods
	componentDidMount() {
		this.getFlowerState();
		this.getMeterState();
		this.getPollenPoints();
		this.getFullyGrown();
		this.checkDeathTime();
		this.saveTimeDataDeath(); 
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

        			<StarsToTarget ref={emitter => (this.starsToTarget = emitter)} />
        			<Confetti
			          colors={['red', 'blue', 'green', 'yellow', 'orange']}
			          ref={emitter => (this.confetti = emitter)}
			        />

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