import React, { StrictMode } from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 25,
    };
    this.decrement = this.decrement.bind(this);
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  render() {
    console.log(this.state);
    //if we want to access javascript in the jsx we need to setup curly braces
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.state.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}
export default App;
