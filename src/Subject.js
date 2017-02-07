import React, {Component} from 'react'

export default class Subject extends Component {
  constructor(props) {
    super(props);

  }

  // event handlers here

  render() {
    return (
      <div>
        <h3>{this.props.items.subject}</h3>
        <ul>
          <li>{this.props.items.resources[0].title}</li>
        </ul>
      </div>
    );
  }
}