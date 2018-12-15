import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  Alert
} from 'react-native';

//Clock import from react moment
import moment from "moment";


//Designated locations for objects
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 20,
    margin: 10, 
    backgroundColor: "black",
    borderRadius: 50
  },
});



export class Clock extends Component {
  ///This file is used in the Store Screen and helps clear all the data from the app so we can start the game from scratch.
  ///This file is mostly used for testing purposes.

  clearAllData = async () => {
    try {
      AsyncStorage.clear();
      alert("All stored data has been cleared. Reset app to see changes.");
    }

    catch(error) {
      alert(error);
    }
  }

  render() {

    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={this.clearAllData} style={styles.button}>
          <Text style={{color: "red"}}>Clear All Data</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

export default Clock;