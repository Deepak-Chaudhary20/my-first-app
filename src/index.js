// import React from "react";
import React, { Component } from 'react';
import ReactDOM from "react-dom/client";


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      active: false,
    }
    this.colorChange = this.colorChange.bind(this);
  }
  colorChange(){
    this.setState({
      active: true
    });
  }
  render() {
    return(
      <>
        <div style =  {{background: `${this.state.active ? 'red' : 'blue'}`}} >
          <button onClick={this.colorChange}>Click</button>
        </div>
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

