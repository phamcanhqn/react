import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './clock';
import MyComponent from './MyComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

Clock

const comment = {
  date: new Date(),
  text: 'This is my React example !!!!',
  author: {
    name: 'Canh Pham',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

ReactDOM.render(
	<MyComponent
		date={comment.date}
    text={comment.text}
    author={comment.author}/>,
	document.getElementById('myComponent')
);

registerServiceWorker();
