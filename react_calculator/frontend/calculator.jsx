import React from 'react';

class Calculator extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      result: '0',
      display: '0',
      newNumber: false,
      operator: '',
      equaled: false,
    };

    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
    this.times = this.times.bind(this);
    this.divideBy = this.divideBy.bind(this);
    this.equals = this.equals.bind(this);
    this.clearCalc = this.clearCalc.bind(this);
  }

  setNum (n) {
    if (this.state.newNumber || this.state.display === '0') {
        this.setState({
          display: n,
          newNumber: false,
        });
    } else {
      this.setState({
        display: this.state.display += n,
      });
    }
  }

  plus () {
    if (this.state.equaled) {
      this.setState({
        operator: '+',
        newNumber: true,
        equaled: false,
      });
    } else if (!this.state.newNumber) {
      const sum = parseFloat(this.state.result) + parseFloat(this.state.display);
  
      this.setState({
        result: sum.toString(),
        display: sum.toString(),
        newNumber: true,
        operator: '+'
      });
    }
  }

  minus () {
    if (this.state.operator.length > 0) {
      const diff = parseFloat(this.state.result) - parseFloat(this.state.display);

      this.setState({
        result: diff.toString(),
        display: diff.toString(),
        newNumber: true,
        operator: '-',
      });
    } else {
      this.setState({
        result: this.state.display,
        newNumber: true,
        operator: '-',
      });
    }
  }

  times () {
    if (this.state.operator.length > 0) {
      const prod = parseFloat(this.state.result) * parseFloat(this.state.display);

      this.setState({
        result: prod.toString(),
        display: prod.toString(),
        newNumber: true,
        operator: "*"
      });
    } else {
      this.setState({
        result: this.state.display,
        newNumber: true,
        operator: "*"
      });
    }
  }

  divideBy () {
    if (this.state.operator.length > 0) {
      const quotient = parseFloat(this.state.result) / parseFloat(this.state.display);

      this.setState({
        result: quotient.toString(),
        display: quotient.toString(),
        newNumber: true,
        operator: "/"
      });
    } else {
      this.setState({
        result: this.state.display,
        newNumber: true,
        operator: "/"
      });
    }
  }
  
  equals () {
    switch (this.state.operator) {
      case '+':
        const sum = parseFloat(this.state.result) + parseFloat(this.state.display);
        this.setState({
          result: sum.toString(),
          display: sum.toString(),
          equaled: true,
          operator: '',
          newNumber: true,
        });
        break;
      case '-':
        const diff = parseFloat(this.state.result) - parseFloat(this.state.display);

        this.setState({
          result: diff.toString(),
          display: diff.toString(),
          equaled: true,
          operator: '',
          newNumber: true
        });
        break;
      case '*':
        const prod = parseFloat(this.state.result) * parseFloat(this.state.display);

        this.setState({
          result: prod.toString(),
          display: prod.toString(),
          newNumber: true,
          equaled: true,
          operator: '',
        });
        break;
      case '/':
        const quotient = parseFloat(this.state.result) / parseFloat(this.state.display);

        this.setState({
          result: quotient.toString(),
          display: quotient.toString(),
          newNumber: true,
          equaled: true,
          operator: '',
        });
        break;
    }
  }
  
  clearCalc () {
    this.setState({
      result: '0',
      display: '0',
      newNumber: false,
      equaled: false,
      operator: '',
    });
  }

  render () {
    return (
      <div>
        <h1>{this.state.display}</h1>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
        <button onClick={this.times}>*</button>
        <button onClick={this.divideBy}>/</button>
        <button onClick={this.equals}>=</button>
        <button onClick={this.clearCalc}>C</button>
        <button onClick={() => this.setNum('1')} >1</button>
        <button onClick={() => this.setNum('2')} >2</button>
        <button onClick={() => this.setNum('3')} >3</button>
        <button onClick={() => this.setNum('4')} >4</button>
        <button onClick={() => this.setNum('5')} >5</button>
        <button onClick={() => this.setNum('6')} >6</button>
        <button onClick={() => this.setNum('7')} >7</button>
        <button onClick={() => this.setNum('8')} >8</button>
        <button onClick={() => this.setNum('9')} >9</button>
        <button onClick={() => this.setNum('0')} >0</button>
        <button onClick={() => this.setNum('.')} >.</button>
      </div>
    );
  }
}

export default Calculator;