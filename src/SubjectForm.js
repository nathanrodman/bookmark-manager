import React, {Component} from 'react'

export default class SubjectForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        subject: []
    }
  }

    addNewSubject(event){
    const newSubject = {
        subject: this.state.subjectTitle,
        resources: []
    }
    event.preventDefault();

    this.props.addSubject(newSubject);
  }


  handleInput(e){
    e.preventDefault();
    this.setState({
      subjectTitle: e.target.value
    })
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

