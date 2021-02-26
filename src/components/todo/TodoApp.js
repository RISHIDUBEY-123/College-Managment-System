import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute.js';
import LoginComponent from './LoginComponent.js';
import ListToDoComponent from './ListToDoComponent.js';
import ListToDoComponentI from './ListToDoComponentI.js';
import ListToDoComponentS from './ListToDoComponentS.js';
import ErrorComponent from './ErrorComponent.js';
import WelcomeComponent from './WelcomeComponent.js';

import HeaderComponent from './HeaderComponent.js';
import FooterComponent from './FooterComponent.js';
import LogoutComponent from './LogoutComponent.js';
import TodoComponent from './TodoComponent.js';

class TodoApp extends Component{
    render(){
        return(
        <div className="TodoApp">
            <Router>
                <>
                <HeaderComponent/>
                <Switch>
                <Route path="/" exact component={LoginComponent}/>
                <Route path="/login" component={LoginComponent}/>
                <AuthenticatedRoute path="/welcome" component={WelcomeComponent}/>
                
                <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/>
                <AuthenticatedRoute path="/todos" component={ListToDoComponent}/>
                <AuthenticatedRoute path="/todosI" component={ListToDoComponentI}/>
                <AuthenticatedRoute path="/todosS" component={ListToDoComponentS}/>
                
                <Route path="/logout" component={LogoutComponent}/>
                <Route component={ErrorComponent}/>
                
                </Switch>
                <FooterComponent/>
                </>
            </Router>
        {/*<LoginComponent></LoginComponent>
        <WelcomeComponent></WelcomeComponent>*/}
        </div>
        )
    }
}

 export default TodoApp