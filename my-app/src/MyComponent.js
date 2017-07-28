import React, { Component } from 'react';
import './MyComponent.css';

class MyComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {isToggleOn: true};

		this.handleLinkClick = this.handleLinkClick.bind(this);
	}

	formatDate(date) {
  	return date.toLocaleDateString();
  }

  handleLinkClick(event) {
  	event.preventDefault();

  	this.setState(prevState =>({
  		isToggleOn: !prevState.isToggleOn
  	}));
  }

	render() {
		return (
			<div className={"Comment " + (this.state.isToggleOn ? '' : 'collapse')}>
				<a href="#" onClick={this.handleLinkClick}>{this.state.isToggleOn ? 'Collapse' : 'Expand'}</a>
	      <div className="UserInfo">
	        <img className="Avatar"
	          src={this.props.author.avatarUrl}
	          alt={this.props.author.name}
	        />
	        <div className="UserInfo-name">
	          {this.props.author.name}
	        </div>
	      </div>
	      <div className="Comment-text">
	        {this.props.text}
	      </div>
	      <div className="Comment-date">
	        {this.formatDate(this.props.date)}
	      </div>

	    </div>
    );
	}
}

export default MyComponent;