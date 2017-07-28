import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './clock';
import MyComponent from './MyComponent';
import LoginControl from './Conditional';
import Mailbox from './Mailbox';
import Page from './Page';

class App extends Component {
  getName () {return 'canh pham'}

  render() {
    const comment = {
      date: new Date(),
      text: 'This is my React example !!!!',
      author: {
        name: 'Canh Pham',
        avatarUrl: 'http://placekitten.com/g/64/64'
      }
    };

    const messages = ['React', 'Re: React', 'Re:Re: React'];

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

        <MyComponent
          date={comment.date}
          text={comment.text}
          author={comment.author}/>

         <LoginControl />
         <Mailbox unreadMessage={messages} />
         <Page />
      </div>
    );
  }
}


export default App;
