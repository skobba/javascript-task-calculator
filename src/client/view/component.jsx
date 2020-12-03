import React from "react";

export default class Component extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      welcomeText: "Hello World!"
    }
    this.changeText = this.changeText.bind(this);
  }

  changeText(){
    this.setState({welcomeText: 'Det skjedde noe'});
  }

  render(){
    return(
      <div>
        <p>{this.state.welcomeText}</p>
        <button onClick={this.changeText}>Klikk her</button>
      </div>
    )
  }
}
