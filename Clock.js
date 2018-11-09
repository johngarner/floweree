import React, { Component } from 'react';

import {
  View,
  Text,
  StatusBar,
  StyleSheet
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
    fontSize: 80,
  },
  dateText: {
    color: '#999999',
    fontSize: 30,
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

  render() {

    return (
      <View style={styles.container}>

        <StatusBar style={{backgroundColor: 'transparent'}} />
        
        <Text style={styles.timeText}>
          {this.state.time}
        </Text>
        <Text style={styles.dateText}>
          {this.state.date}
        </Text>

      </View>
    );
  }
}

export default Clock;