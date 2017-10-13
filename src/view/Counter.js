import React, { Component, PropTypes } from 'react';
import * as Action from '../Actions.js';
import store from '../Store.js';

const buttonStyle = {
  margin: '10px'
};

class Counter extends Component {

  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.getOwnState = this.getOwnState.bind(this);

    this.state = this.getOwnState();
  }
  getOwnState(){
    return {
      value: store.getState()[this.props.caption]
    }
  }
  componentWillUnmount(){
    store.unsubscribe(this.onChange);
  }
  componentDidMount(){
    store.subscribe(this.onChange);
  }
  shouldComponentUpdate(nextProps, nextState){
    return (nextProps.caption !== this.props.caption) ||
           (nextState.value !== this.state.value);
  }
  onChange(){
    this.setState(this.getOwnState());
  }
  onIncrement(){
    store.dispatch(Action.increment(this.props.caption));
  }
  onDecrement(){
    store.dispatch(Action.decrement(this.props.caption));
  }
  render(){
    const {caption} = this.props;
    return (
      <div>
        <button style={buttonStyle} onClick={this.onIncrement}>+</button>
        <button style={buttonStyle} onClick={this.onDecrement}>-</button>
        <span>{caption} count: {this.state.value}</span>
      </div>
    );
  }
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired
};

export default Counter;
