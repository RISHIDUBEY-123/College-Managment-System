import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

class ListToDoComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            todos:[],
            message : null
           
        }
        this.updateTodoClicked=this.updateTodoClicked.bind(this);
        this.deleteTodoClicked=this.deleteTodoClicked.bind(this);
        this.addTodoClicked=this.addTodoClicked.bind(this);
        this.refreshTodos=this.refreshTodos.bind(this);
    }
    // shouldComponentUpdate(nextProps,nextState){
    //   console.log(nextProps)
    //   console.log(nextState)
    //   return true
    // }
    componentDidMount(){
        this.refreshTodos();
        //console.log(this.state)
    }
    refreshTodos(){
        let username=AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
        .then(

            response => {
                //console.log(response)
                this.setState({todos : response.data})
                console.log(response)
            }

        )
        //console.log(this.state)
    }
    deleteTodoClicked(id){
        let username=AuthenticationService.getLoggedInUserName()
        //console.log(id+" "+username);
        TodoDataService.deleteTodo(username,id)
        .then(
            response =>{
                this.setState({message :`Delete of todo ${id} Successful`})
                this.refreshTodos();
            }
        )
       
    }
    addTodoClicked(id){
        this.props.history.push(`/todos/-1`)
        
    }
    updateTodoClicked(id){
        console.log('update' + id)
        this.props.history.push(`/todos/${id}`)
        // let username=AuthenticationService.getLoggedInUserName()
        // //console.log(id+" "+username);
        // TodoDataService.deleteTodo(username,id)
        // .then(
        //     response =>{
        //         this.setState({message :`Delete of todo ${id} Successful`})
        //         this.refreshTodos();
        //     }
        // )

    }
    render(){
        return(
            <div>
                <h1>List Of Managment</h1>
                {this.state.message && <div className ="alert alert-success">{this.state.messsage}</div>}
                <div className="container ">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Professor</th>
                            <th>Designation</th>
                            <th>Specialization</th>
                            <th>Salary</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>    
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                        <tr key={todo.id}>
                            <td>{todo.professor}</td>
                            <td>{todo.designation}</td>
                            <td>{todo.specialization}</td>
                            
                            <td>{todo.salary}</td>
                            <td><button className="btn btn-success" onClick={() =>this.updateTodoClicked(todo.id)}>Update</button></td>
                            <td><button className="btn btn-warning" onClick={() =>this.deleteTodoClicked(todo.id)}>Delete</button></td>
                        </tr>
                            )
                         }
                    </tbody>
                </table>
                <div className="row">
                <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>                   
                 </div>
               </div>
            </div>
        )
    }
}
export default ListToDoComponent