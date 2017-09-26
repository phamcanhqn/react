import React, { Component } from 'react';
import logo from './logo.svg';
import TodoApp from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import Root from './components/Root'
import './App.css';

const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Root store={store} />
      </div>
    );
  }
}

export default App
