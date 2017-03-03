import React from 'react';

class Calculator extends React.Component {
  constructor(props, result, num1, num2) {
    super(props);
    this.state = { num1: "", num2: "", result: 0 };

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.multiply = this.multiply.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }

  setNum1(e) {
    const num1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({num1});
  }

  setNum2(e) {
    const num2 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({num2});
  }

  multiply(e) {
    e.preventDefault();
    const result = this.state.num1 * this.state.num2;
    this.setState({result});
  }

  add(e) {
    e.preventDefault();
    const result = this.state.num1 + this.state.num2;
    this.setState({result});
  }

  subtract(e) {
    e.preventDefault();
    const result = this.state.num1 - this.state.num2;
    this.setState({result});
  }

  divide(e) {
    e.preventDefault();
    const result = this.state.num1 / this.state.num2;
    this.setState({result});
  }

  clear(e) {
    e.preventDefault();
    this.setState({num1: "", num2: "", result: 0});
  }

  render() {
    const { num1, num2, result } = this.state;

    return (
      <div>
        <h1>My Awesome Calculator!</h1>

        <ul>
          <h2>{result}</h2>


        </ul>
      </div>
    );
  }

}

export default Calculator;
