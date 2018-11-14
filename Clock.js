import React, { Component } from 'react';

import {
  View,
  Text,
  StatusBar,
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
    let user = "Do Si Doe";
    AsyncStorage.setItem("userName", user);
  }

  saveTimeData2() {
    let user = "Doge";
    AsyncStorage.setItem("userName2", user);
  }

  displayTimeData = async () => {
    try {
      let user = await AsyncStorage.getItem("userName");
      let user2 = await AsyncStorage.getItem("userName2");
      alert("user: " + user + "\n" + "user2: " + user2);
    }
    catch(error) {
      alert(error);
    }
  }

  clearAllTimeData() {
    AsyncStorage.clear();
  }

  render() {

    return (
      <View style={styles.container}>

        {
        // <StatusBar style={{backgroundColor: 'transparent'}} />
        }

        <Text style={styles.timeText}>
          {this.state.time}
        </Text>
        <Text style={styles.dateText}>
          {this.state.date}
        </Text>

        <TouchableOpacity onPress={this.saveTimeData} style={styles.button}>
          <Text style={{color: "blue"}}>Save Time Data</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.saveTimeData2} style={styles.button}>
          <Text style={{color: "blue"}}>Save Time Data 2</Text>
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