import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = { value: 0 };
  //   this.handlePlusClick = this.handlePlusClick.bind(this);
  // }

  // handlePlusClick() {
  //   this.setState({ value: this.state.value + 1 });
  // }

  state = {
    foo: { baz: 'bar' },
    value: 1,
  };

  handlePlusClick = () => {
    console.log('call handlePlusClick!');
    this.setState({ value: this.state.value + 1 });
  };

  componentDidMount() {
    console.log('I mounted!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('I updated!');
  }

  render() {
    return (
      <div>
        <h1>Hello from App!</h1>
        <h2>{this.state.value}</h2>
        <button onClick={this.handlePlusClick}>+</button>
      </div>
    );
  }
}
