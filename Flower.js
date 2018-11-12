import React, { Component } from 'react';

//1 water every 24 hours. Next image shows up (aka flower grows). 
//no such thing as over watering. 
//no water in 24 hours. Plant image stays the same but meter decreases 1.
//after 96 hours (4 days, for the 4 meters) generic dead flower image appears. 

export class Flower extends Component {
  constructor(props){
    super(props);
    this.state = {
      water = '1',
      growth = '1'
    }
  }
}

export default Flower;