import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
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
  timeText: {
    color: '#999999',
    fontSize: 60,
  },
  dateText: {
    color: '#999999',
    fontSize: 18,
  },
  button: {
    padding: 20,
    margin: 10, 
    backgroundColor: "white",
    borderRadius: 50
  },
});

export class Clock extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      time: moment().format("LTS"),
      date: moment().format("LL"),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: moment().format("LTS"),
        date: moment().format("LL")
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval();
  }

  saveTimeData() {
    
    let obj = {
      time: moment().format("LTS"),
      date: moment().format("LL"),
    }

    AsyncStorage.setItem("timeObj", JSON.stringify(obj));
  }

  displayTimeData = async () => {

    try {
      let obj = await AsyncStorage.getItem("timeObj");
      let parsedObj = JSON.parse(obj);
      alert("Time: " + parsedObj.time + "\n" +
            "Date: " + parsedObj.date);
    }

    catch(error) {
      alert(error);
    }
  }

  clearAllTimeData = async () => {
    try {
      AsyncStorage.clear();
    }

    catch(error) {
      alert(error);
    }
  }

  render() {

    return (
      <View style={styles.container}>

        <Text style={styles.timeText}>
          {this.state.time}
        </Text>
        <Text style={styles.dateText}>
          {this.state.date}
        </Text>

        <TouchableOpacity onPress={this.saveTimeData} style={styles.button}>
          <Text style={{color: "blue"}}>Save Time Data</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.displayTimeData} style={styles.button}>
          <Text style={{color: "blue"}}>Display Time Data</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.clearAllTimeData} style={styles.button}>
          <Text style={{color: "red"}}>Clear All Time Data</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

export default Clock;