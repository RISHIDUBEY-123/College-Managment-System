//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
//import FirstComponent,{SecondComponent} from './components/learning-examples/FirstComponent';
//import CounterButton from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';

class App extends Component {
render(){
  return(
  <div className="App">
   {/*<CounterButton by ={1}/>
    <CounterButton by ={5}/>
    <CounterButton by ={10}/>*/}
    <TodoApp></TodoApp>
  </div>
  );
} 
}
// class components

export default App;
