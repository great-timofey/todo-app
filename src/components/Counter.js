import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment } from '../AC/increment';

class Counter extends Component {
  static propTypes = {
    counter: propTypes.number
  }

  render() {
    return (
      <div>
        <h2>{ this.props.counter }</h2>   
        <button onClick={ this.handleIncrement }>+</button>
      </div>
    )
  }

  handleIncrement = () => {
    this.props.increment();
  }
}

export default connect((state) => ({
  counter: state.count
}), { increment }) (Counter);
