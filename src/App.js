import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      resources: [
        {title: "Thinking in React", url: 'https://facebook.github.io/react/docs/thinking-in-react.html'},
        {title: "ES6 var, let, or const", url:'https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.xv9uppvae'},
        {title: "ES6 interactive guide", url: 'http://stack.formidable.com/es6-interactive-guide/#/'}
      ]
    };
  }


  render() {
    return (
      <ul>
        {this.state.resources.map((resource) => {
          return <li><a href={resource.url}>{resource.title}</a></li>
        })}
      </ul>
    );
  }
}

export default App;
