import React, { Component } from 'react';
import './Counter.css' ;
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(){
      super();
     this.state={
       counter:0
     }
     this.increment=this.increment.bind(this);
  }
  render() {
      return(
      <div className="counter">
        <button onClick={this.increment}>+{this.props.by}</button>
      <span className="count">{this.state.counter}</span>
      </div>
      );
 } 
increment() {
  this.setState({
   counter:this.state.counter
  });
  
}
}
class CounterButton extends Component {
  constructor(){
      super();
     this.state={
       counter:0
     }
     this.increment=this.increment.bind(this);
  }
  render() {
      return(
      <div className="counter">
        <button onClick={this.increment}>+{this.props.by}</button>
      <span className="count">{this.state.counter}</span>
      </div>
      );
 } 
increment() {
  this.setState({
   counter:this.state.counter+this.props.by
  });
  
}
}
CounterButton.defaultProps = {
   by :1
}
CounterButton.propTypes={
  by : PropTypes.number
}
 export default CounterButton
    