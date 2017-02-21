import React, {Component} from 'react'

export default class Subject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      title: '',
      url: '',
      checkBox: false,
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const newResource = {
      title: this.state.title,
      url: this.state.url
    }
    this.props.addResource(this.props.index, newResource)
  }

  handleClick() {
      this.setState(prevState => ({
        isClicked: !prevState.isClicked
      }));
  }
  
  handleTyping(event) {
    event.preventDefault();
    let name = event.target.name;
    this.setState({
      [name] : event.target.value
    })
  }

  handleCheckBox(event){
    this.setState(prevState => ({
      checkBox: !prevState.checkBox
    }));
  }

  render() {
    return (
      <div>
        <h3 onClick={this.handleClick.bind(this)} style={this.state.isClicked ? {fontStyle: 'italic'} : {} }>{this.props.items.subject}</h3>
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
        <form>
          <label htmlFor="title">
            title:  
            <input name="title" onChange={this.handleTyping.bind(this)} value={this.state.title} placeholder="Title"/>
          </label>
          <br/>
          <label htmlFor="url">
            url:  
            <input name="url" onChange={this.handleTyping.bind(this)} value={this.state.url} placeholder="Url"/>
          </label>
          <br />

          <label htmlFor="type">Type: </ label>
          <select>
            <option value="video">Video</option>
            <option value="article">Article</option>
            <option value="tutorial">Tutorial</option>
          </select>

          <button onClick={this.handleSubmit.bind(this)} >Add Resource</button>
        </form>
        <form>
          <input type="checkbox" onChange={this.handleCheckBox.bind(this)} /> {this.state.checkBox ? "Checked" : "Unchecked"} <br/>
          <input type="radio" name="dessert" value="cake"/> Cake <br/>
          <input type="radio" name="dessert" value="pie"/> Pie <br/>
        </form>
      </div>
    );
  }
}