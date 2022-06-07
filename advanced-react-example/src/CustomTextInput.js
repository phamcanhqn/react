import React from 'react';

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  focus() {
    this.textInput.style.border = '1px solid red';
    this.textInput.focus();
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.textInput.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <input
          defaultValue='Default value on textbox'
          type="text"
          ref={(input) => { this.textInput = input; }} />
        <input
          type="button"
          value="Focus"
          onClick={this.focus} />
        <input
          type="submit"
          value="Submit"
          onClick={this.handleSubmit} />
      </div>
    );
  }
}

export default CustomTextInput;