import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

class ListToDoComponentS extends Component{
    constructor(props){
        super(props)
        this.state={
            todos:[],
            message : null
           
        }
        this.refreshTodos=this.refreshTodos.bind(this);
    }
    
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
    render(){
        return(
            <div>
                <h1>Student Details</h1>
                {this.state.message && <div className ="alert alert-success">{this.state.messsage}</div>}
                <div className="container ">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Marks Obtained</th>
                            <th>Attendance</th>
                            <th>Subjects</th>
                        </tr>    
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                        <tr key={todo.id}>
                            <td>{todo.sname}</td>
                            <td>{todo.marks}</td>
                            <td>{todo.attendance}</td>
                            <td>{todo.subject}</td>
                        </tr>
                            )
                         }
                    </tbody>
                </table>
               </div>
            </div>
        )
    }
}
export default ListToDoComponentS