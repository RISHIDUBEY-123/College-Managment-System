import React, { Component } from 'react';
//import {BrowserRouter} from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';

class HeaderComponent extends Component{
    render(){
        const isUserLoggedIn=AuthenticationService.isUserLoggedIn();
        //console.log(isUserLoggedIn);
        return(
            <header>
               <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                   <div><a href="/welcome/in28minutes" className="navbar-brand">   
                   <img src="/assets/img2.jpeg" width="30" height="30" class="d-inline-block align-top" alt=""/></a></div>
                   <ul className="navbar-nav">
                       {isUserLoggedIn &&<li ><a className="nav-link" href="/welcome/in28minutes">Home</a></li>}
                      {isUserLoggedIn &&<li><a className="nav-link" href="/todos">Todos</a></li>}
                   </ul>
                   <ul className="navbar-nav navbar-collapse justify-content-end">
                   {!isUserLoggedIn &&<li><a className="nav-link" href="/login">login</a></li>}
                   {isUserLoggedIn &&<li><a className="nav-link" href="/logout" onClick={AuthenticationService.logout}>logout</a></li>}
                   </ul>
               </nav>
            </header> 
        )
    }
}


export default HeaderComponent