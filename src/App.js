import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Subject from './Subject'

class App extends Component {
  constructor() {
    super();

    this.state = { 
      resources: [
        { subject: "Functional Programming Basics", 
          resources: [
            {title: 'Higher Order Functions', url:'https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84'},
            {title: "ES6 interactive guide", url: 'http://stack.formidable.com/es6-interactive-guide/#/'},
            {title: 'var, let and const - What, why and how - ES6 JavaScript Features', url: 'https://www.youtube.com/watch?v=sjyJBL5fkp8'}
          ]
        },

        { subject: "ES6",
          resources: [
            {title: "ES6 var, let, or const", url:'https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.xv9uppvae'},
            {title: 'Arrow functions in JavaScript - What, Why and How ', url: 'https://www.youtube.com/watch?v=6sQDTgOqh-I'},
            {title: 'Essential ES6 / ES2015 JavaScript', url: 'https://www.youtube.com/watch?v=CozSF5abcTA'},
            {title: 'Javascript ES6 Cheatsheet - the best of JS ES6', url: 'https://www.youtube.com/watch?v=AfWYO8t7ed4'},
            {title: 'Javascript ES6 Cheatsheet #2 - the best of JS ES6', url: 'https://www.youtube.com/watch?v=LmL0Gh193M0'},
            {title: 'ECMAScript 6 / ES6 New Features', url: 'https://www.youtube.com/watch?v=ZJZfIw3P8No&list=PL6gx4Cwl9DGBhgcpA8eTYYWg7im72LgLt'},
            {title: 'Learn ES6 (ECMAScript 2015)', url: 'https://egghead.io/courses/learn-es6-ecmascript-2015'},
            {title: 'ES6 JavaScript - The Basics', url: 'https://www.youtube.com/watch?v=IEf1KAcK6A8'}
          ]
        },

        { subject: "Intro to React",
          resources: [
            {title: "Thinking in React", url: 'https://facebook.github.io/react/docs/thinking-in-react.html'},
            {title: 'How it feels to learn JavaScript in 2016', url: 'https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.olyvd43o1'},
            {title: 'ReactJS Basics - #1 What is React?', url: 'https://www.youtube.com/watch?v=JPT3bFIwJYA&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS'},
            {title: 'REACT JS TUTORIAL #2 - Reactjs Components & Rendering', url: 'https://www.youtube.com/watch?v=fd2Cayhez58&feature=youtu.be'}
          ]
        },

         { subject: "Event handlers in React",
          resources: [
            {title: "Handling Events", url: "https://facebook.github.io/react/docs/handling-events.html"},
            {title: "React Stateless Functional Components: Nine Wins You Might Have Overlooked", url: "https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.jblm2w9dp"},
            {title: "ReactJS Basics - #7 Events & ReactJS", url: "https://www.youtube.com/watch?v=OcM__8q6p4c&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=8"},
            {title: "Understanding JavaScript’s Function.prototype.bind", url: "https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/"},
            {title: "REACT JS TUTORIAL #5 - Javascript Events & Data Changes in React", url: "https://www.youtube.com/watch?v=_D1JGNidMr4&feature=youtu.be"}
          ]
        }
    ]}
  }
  

  render() {
    return (
      <div>
        { this.state.resources.map( resource => <Subject items={resource} />) }
      </div>
    );
  }
}

export default App;
