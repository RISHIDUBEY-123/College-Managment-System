import React, { Component } from 'react'
//import moment from 'moment'
import {Formik,Form,Field, ErrorMessage} from 'formik'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'


class TodoComponent extends Component{
   constructor(props){
   super (props)
   this.state = {
          id : this.props.match.params.id,
          professor:'',
          designation:'',
          specialization:'',
          salary:'',
          sname:'',
          iname:'',
          marks:'',
          attendance:'',
          subject:''
          //targetDate : moment(new Date()).format('YYYY-MM-DD')
       }
       this.onSubmit=this.onSubmit.bind(this);
      // this.onSubmit=this.onSubmit.bind(this);
       this.validate=this.validate.bind(this);
    }
    componentDidMount(){
        if(this.state.id ===-1){
        return
        }
        let username=AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveTodo(username,this.state.id)
        .then(response =>this.setState({
        professor:response.data.professor,
        designation:response.data.designation,
        specialization:response.data.specialization,
        salary:response.data.salary,
        sname:response.data.sname,
        iname:response.data.iname,
        attendance:response.data.attendance,
        marks:response.data.marks,
        subject:response.data.subject
        //targetDate:(moment(response.data.targetDate).format('YYYY-MM-DD'))
        })
        //console.log(response)
        
        )
        }
    validate(values){
    let errors={}
    if(!values.professor){
    errors.professor='Enter Professor Name'
    }else if(values.professor.length < 5){
    errors.professor='Enter atleast 5 characters in Professor'
    }
    /*if(!moment(values.targetDate).isValid()){
    errors.targetDate='Enter a valid target Date'
    }*/
    //console.log(values);
    return errors
    }
        onSubmit(values){
            let username=AuthenticationService.getLoggedInUserName()
            if(this.state.id===-1){
            TodoDataService.updateTodo(username,{
            id:this.state.id,
            professor:values.professor,
            designation:values.designation,
            specialization:values.specialization,
            salary:values.salary,
            sname:values.sname,
            iname:values.iname,
            attendance:values.attendance,
            marks:values.marks,
            subject:values.subject
            //targetDate:values.targetDate,
            
            }).then(
            () => {
                    return this.props.history.push('/todos')
                })
            console.log(values);
            }else{
            TodoDataService.updateTodo(username,this.state.id,{
            id:this.state.id,
            professor:values.professor,
            designation:values.designation,
            specialization:values.specialization,
            salary:values.salary,
            sname:values.sname,
            iname:values.iname,
            attendance:values.attendance,
            marks:values.marks,
            subject:values.subject
            //targetDate:values.targetDate
            }).then(
            () => this.props.history.push('/todos'))
            console.log(values);
            }
            }
            
           
    render(){
        let {professor,designation,specialization,salary,iname,marks,attendance,sname,subject} = this.state
        //let targetDate=this.state.targetDate
       // let {description,targetDate} = this.state
        return <div>
          <h1>Todo </h1>
          <div className="container">
              <Formik
              initialValues={{professor,designation,specialization,salary,iname,marks,attendance,sname,subject}}
              onSubmit={this.onSubmit}
              validate={this.validate}
              validateOnChange={false}
              validateOnBlur={false}
              enableReinitialize={true}
              >
                  { 
                      (props) =>(
                         <Form>
                             <ErrorMessage name="professor"component="div" className="alert alert-warning"/>
                             <ErrorMessage name="designation"component="div" className="alert alert-warning"/>
                             <ErrorMessage name="specialization"component="div" className="alert alert-warning"/>
                             <ErrorMessage name="salary"component="div" className="alert alert-warning"/>
                             <fieldset className="form-group">
                             <label>Professor</label>
                             <Field className="form-control" type="text" name="professor"/>
                            </fieldset>
                            <fieldset className="form-group">
                             <label>Designation</label>
                             <Field className="form-control" type="text" name="designation"/>
                            </fieldset>
                            <fieldset className="form-group">
                             <label>Specialization</label>
                             <Field className="form-control" type="text" name="specialization"/>
                            </fieldset>
                            <fieldset className="form-group">
                             <label>Salary</label>
                             <Field className="form-control" type="text" name="salary"/>
                            </fieldset>
                            <fieldset className="form-group">
                             <label>sName</label>
                             <Field className="form-control" type="text" name="sName"/>
                            </fieldset>
                            <fieldset className="form-group">
                             <label>iname</label>
                             <Field className="form-control" type="text" name="sname"/>
                            </fieldset>
                            <fieldset className="form-group">
                             <label>sname</label>
                             <Field className="form-control" type="text" name="sname"/>
                            </fieldset>
                            <fieldset className="form-group">
                             <label>marks</label>
                             <Field className="form-control" type="text" name="marks"/>
                            </fieldset>
                            <fieldset className="form-group">
                             <label>attendance</label>
                             <Field className="form-control" type="text" name="attendance"/>
                            </fieldset>
                            <fieldset className="form-group">
                             <label>subject</label>
                             <Field className="form-control" type="text" name="subject"/>
                            </fieldset>

                            {/*<fieldset className="form-group">
                             <label>Target Date</label
                             <Field className="form-control" type="date" name="targetDate"/>
                      </fieldset>*/}
                            <button className="btn btn-success" type="submit">Save</button>
                         </Form>
                        
                      )
                  }
                </Formik>
                  
          </div>
          </div>
         

    }
}
export default TodoComponent