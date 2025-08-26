import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Class Component: Constructor called");
  }

  componentDidMount() {
    console.log("Class Component: componentDidMount called");
    document.title = `Count: ${this.state.count}`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Class Component: componentDidUpdate called");
      document.title = `Count: ${this.state.count}`;
    }
  }

  componentWillUnmount() {
    console.log("Class Component: componentWillUnmount called");
    document.title = "React App"; // Title ko reset kar do
  }

  render() {
    console.log("Class Component: Render called");
    return (
      <div style={{ padding: '15px', border: '1px solid gray', margin: '20px' }}>
        <h3>Class Component Example</h3>
        <p>Current Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment Count
        </button>
      </div>
    );
  }
}

export default Counter;