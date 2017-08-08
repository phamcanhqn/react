import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListOfTenThings from './ListOfTenThings';
import Greeting from './Greeting';
import SingleElement from './SingleElement';
import CustomTextInput from './CustomTextInput';
import CounterButton from './CounterButton'
import WordAdder from './WordAdder';
import MessageList from './MessageList';
import MediaQuery from './MediaQuery'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ListOfTenThings />
        <Greeting />
        <SingleElement>
          <span>Canh Pham</span>
          <span>Canh Pham</span>
        </SingleElement>
        <CustomTextInput />
        <CounterButton />
        <WordAdder />
        <MessageList messages={['canh','hang', 'huy']} />
        <MediaQuery />
      </div>
    );
  }
}

export default App;
