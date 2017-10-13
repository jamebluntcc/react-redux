import React, {Component} from 'react';

class CountClick extends Component {
  constructor(props){
    super(props);
    this.click = this.click.bind(this);
    this.state = {
      count: 0
    }
  }
  click(){
    this.setState({count: this.state.count + 1});
  }
  render(){
    const Style = {
      margin: '20px'
    }
    return (
      <div style={Style}>
        <button onClick={this.click}>
          click me
        </button>
        <span>count:{this.state.count}</span>
      </div>
    )
  }
}

export default CountClick;
