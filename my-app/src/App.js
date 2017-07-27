import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './clock';

class App extends Component {
  getName () {return 'canh pham'};

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1> Hello, I am {this.getName()} </h1>

        <Clock date={new Date()}/>
      </div>
    );
  }
}

export default App;
