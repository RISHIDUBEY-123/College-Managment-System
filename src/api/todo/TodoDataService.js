import axios from 'axios'
import {JPA_API_URL} from '../../Constants.js'

class TodoDataService{
    retrieveAllTodos(name){
        return axios.get(`${JPA_API_URL}/users/${name}/todos`);
        //console.log('executed Service')
    }
    retrieveTodo(name,id){
        return axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`);
        //console.log('executed Service')
    }
    deleteTodo(name, id){
        return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`);
        //console.log('executed Service')
    }
    updateTodo(name, id,todo){
        return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`,todo);
        //console.log('executed Service')
    }
    createTodo(name,todo){
        return axios.post(`${JPA_API_URL}/users/${name}/todos/`,todo);
        //console.log('executed Service')
    }
    
}
export default new TodoDataService()