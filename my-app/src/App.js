import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './clock';
import MyComponent from './MyComponent';
import LoginControl from './Conditional';
import Mailbox from './Mailbox';
import Page from './Page';
import NumberList from './NumberList';
import NameForm from './NameForm';
import Reservation from './Reservation';
import Calculator from './Calculator';
import FilterableProductTable from './FilterableProductTable';

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

    var PRODUCTS = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
      {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
      {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ];

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
         <NumberList />
         <NameForm />
         <Reservation />
         <Calculator/>
         <FilterableProductTable products={PRODUCTS} />
      </div>
    );
  }
}


export default App;
