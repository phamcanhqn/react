import React from 'react';

class ListOfWords extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(', ')}</div>;
  }
}

class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // // This section is bad style and causes a bug
    // const words = this.state.words;
    // words.push('marklar');
    this.setState(prevState => ({words: prevState.words.concat(['marklar'])}));
  }

  render() {
    return (
      <div>
        <button
        	onClick={this.handleClick} >
        	Add word
        </button>
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}

export default WordAdder;