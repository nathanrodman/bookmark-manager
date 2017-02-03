import React, {Component} from 'react'

export default class Subject extends Component {
  constructor(props) {
    super(props);
    
  }

  // event handlers here

  render() {
    return (
        <p>{this.props.subject}</p>
    );
  }
}