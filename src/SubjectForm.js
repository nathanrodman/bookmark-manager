import React, {Component} from 'react'

export default class SubjectForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        subject: []
    }
  }

    addNewSubject(event){
    event.preventDefault();
    const tempState = this.state;
    tempState.resources.push({subject: tempState.subjectTitle, resources: []});
    this.setState(tempState, () => {
      // clear the form after adding the new Subject 
      document.getElementById('subject-form').reset();
    });
  }


  handleInput(e){
    e.preventDefault();
    this.setState({
      subjectTitle: e.target.value
    })
  }

  //this is Joy not knowing exactly what is going on
  addJoySubject(event){
      event.preventDefault();
      const tempState = this.state;
      tempState.resources.push({subject: tempState.subjectTitle, resources: []});
      this.setState(tempState, () => {this.addJoySubject});

  }



    render(){
    return(
        <div>
          <form id="subject-form">
          <input placeholder="Subject" onChange={this.handleInput.bind(this)}/>
          <button onClick={this.addNewSubject.bind(this)}>Create New Subject</button>
        </form>
        </div>
    );
    }

  }

