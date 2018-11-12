import React, { Component } from 'react';

export class User extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      firstLogin: true,
    }
  }
}

export default User;