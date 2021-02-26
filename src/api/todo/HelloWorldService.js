import axios from 'axios'

class HelloWorldService{
    executeHelloWorldService(){
        return axios.get('http://localhost:8080//hello-world');
        //console.log('executed Service')
    }
    executeHelloWorldBeanService(){
        return axios.get('http://localhost:8080//hello-world-bean');
        //console.log('executed Service')
    }
    executeHelloWorldPathVariableService(name){
        //  let username='in28minutes'
        //  let password='dummy'

        //   let basicAuthHeader='Basic '+ window.btoa(username +":"+password)
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
        //   {
        //       headers:{
        //           authorization:basicAuthHeader
        //       }
        //   }
        );
        //console.log('executed Service')
    }
}
export default new HelloWorldService()