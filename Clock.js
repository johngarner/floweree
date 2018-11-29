import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  Alert
} from 'react-native';

import moment from "moment";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 20,
    margin: 10, 
    backgroundColor: "white",
    borderRadius: 50
  },
});

export class Clock extends Component {

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