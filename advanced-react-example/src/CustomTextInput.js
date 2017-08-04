import React from 'react';

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus() {
    this.textInput.style.border = '1px solid red';
    this.textInput.focus();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={(input) => { this.textInput = input; }} />
        <input
          type="button"
          value="Focus"
          onClick={this.focus} />
      </div>
    );
  }
}

export default CustomTextInput;