import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldService.js'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
//import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-bootstrap/Carousel'

class WelcomeComponent extends Component{
    constructor(props){
      super(props)
      this.retrieveWelcomeMessage=this.retrieveWelcomeMessage.bind(this);
      // this.state={
      //   welcomeMessage:''
      // }
     this.handleSuccessfulResponse=this.handleSuccessfulResponse.bind(this);
     this.handleError=this.handleError.bind(this)
    }
    render(){
      return(
          <>
            <h1>Collage Managment System</h1>
            
             <div className="container" >
             <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-20"
      src="/assets/2.jpg"
      alt="First slide"
      width="100px"
      height="400px"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-20"
      src="/assets/3.jpg"
      alt="Second slide"
      width="100px"
      height="400px"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-20"
      src="/assets/4.jpg"
      alt="Third slide"
      width="100px"
      height="400px"
    />
  </Carousel.Item>
</Carousel>
               Welcome to collage Managment System.{this.props.match.params.name}
             Please click on the link to navigate to required page here<Link to='/todos'>Admin,</Link><Link to='/todosI'>Instructor,</Link><Link to='/todosS'>Student</Link></div>
             {/*<div className="container">
               Click here to get customized welcome message.
               <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
      </div>*/}
              {/*<div className="container">
               {this.state.welcomeMessage}
    </div>*/}
         </>
      )
    }
    retrieveWelcomeMessage(){
      //console.log('retrieve Clicked');
      //HelloWorldService.executeHelloWorldService()
      //.then(response =>this.handleSuccessfulResponse(response))
      //.then(response => this.handleSuccessfulResponse(response))     
      //HelloWorldService.executeHelloWorldBeanService()
      //.then(response =>this.handleSuccessfulResponse(response))
      //.then(response => this.handleSuccessfulResponse(response)) 
      HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
      .then(response =>this.handleSuccessfulResponse(response))
      .catch(error => this.handleError(error))    
    }
    handleSuccessfulResponse(response){
      console.log(response)
      this.setState({welcomeMessage:response.data.message})  
      }
      handleError(error){
        console.log(error.response)
        let errorMessage='';
        if(error.message)
        errorMessage+=error.message

        if(error.response && error.response.data){
          errorMessage +=error.response.data.message
        }
        this.setState({welcomeMessage:errorMessage})  
        }
}


export default WelcomeComponent