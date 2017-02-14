import React, {Component} from 'react'

export default class Subject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      newResourceTitle: '',
    }
  }

  handleClick() {
      this.setState(prevState => ({
        isClicked: !prevState.isClicked
      }));
  }
  
  handleTyping(event) {
    this.setState({
      newResourceTitle: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h3 onClick={this.handleClick.bind(this)}>{this.props.items.subject}</h3>
        <ul>
          { this.props.items.resources.map((resource) => {
            if(this.state.isClicked){
               return (
                <li>
                  <a href={resource.url}>{resource.title}</a>
                </li>
              )
            }
           }) }
        </ul>
        <p>Title</p>
        <input defaultValue="Hello" />
        <p>Url</p>
        <input onChange={this.handleTyping.bind(this)} value={this.state.newResourceTitle}/>
      </div>
    );
  }
}