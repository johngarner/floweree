import React, { Component } from 'react';

//1 water every 24 hours. Next image shows up (aka flower grows). 
//no such thing as over watering. 
//no water in 24 hours. Plant image stays the same but meter decreases 1.
//after 96 hours (4 days, for the 4 meters) generic dead flower image appears. 

const styles = StyleSheet.create({
  flowerContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%", height: "100%",
  },
});

const flower1 = require('./assets/flowers/new/flower1.png');
const flower2 = require('./assets/flowers/new/flower2.png');
const flower3 = require('./assets/flowers/new/flower3.png');
const flowers = [flower1, flower2, flower3];

const meter1 = require('./assets/meters/meter-01.png');
const meter2 = require('./assets/meters/meter-02.png');
const meter3 = require('./assets/meters/meter-03.png');
const meter4 = require('./assets/meters/meter-04.png');
const meters = [meter1, meter2, meter3, meter4];

export class Flower extends Component {
  constructor(props){
    super(props);
    this.state = {
      water = '1',
      growth = '1'
    }
  }

  render() {

    return (
      <View style={styles.flowerContainer}>
        <Image
          source={flowers[this.growth]}
          style={{width: "100%", height: "100%", resizeMode: "contain"}}
        />
      </View>
    );
  }
}

export default Flower;