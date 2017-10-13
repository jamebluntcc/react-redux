import React, { Component } from 'react';
import store from '../Store.js';

class Summary extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = this.getOwnState();
  }
  getOwnState(){
    let sum = 0;
    const state = store.getState();
    for(const key in state){
      if(state.hasOwnProperty(key)){
        sum += state[key];
      }
    }
    return {sum : sum};
  }
  shouldComponentUpdate(nextProps, nextState){
    return nextState.sum !== this.state.sum;
  }
  componentDidMount(){
    store.subscribe(this.onChange);
  }
  componentWillUnmount(){
    store.unsubscribe(this.onChange);
  }
  onChange(){
    this.setState(this.getOwnState());
  }
  render(){
    return(
      <div>Total Count: {this.state.sum}</div>
    );
  }
}

export default Summary;
