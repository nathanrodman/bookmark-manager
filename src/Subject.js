import React, {Component} from 'react'

export default class Subject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      newResourceTitle: '',
      newResourceUrl: '',
      checkBox: false,
    }
  }

  handleClick() {
      this.setState(prevState => ({
        isClicked: !prevState.isClicked
      }));
  }
  
  handleTyping(event) {
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
        <form>
          <label>
            title:  
            <input name="newResourceTitle" onChange={this.handleTyping.bind(this)} value={this.state.newResourceTitle}/>
          </label>
          <label>
            url:  
            <input name="newResourceUrl" onChange={this.handleTyping.bind(this)} value={this.state.newResourceUrl}/>
          </label>
          <input type="checkbox" onChange={this.handleCheckBox.bind(this)} /> {this.state.checkBox ? "Checked" : "Unchecked"}
        </form>
        <form>
          <input type="radio" name="dessert" value="cake"/> Cake <br/>
          <input type="radio" name="dessert" value="pie"/> Pie <br/>
        </form>
      </div>
    );
  }
}