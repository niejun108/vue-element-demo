import axios from 'axios'

axios.defaults.baseURL="/api"


axios.interceptors.request.use(request=>{
    if(window.sessionStorage.getItem("token")!=null){
        request.headers["token"]="vsadfgdsfgdfvdsfgdsfg";
    }
    return request;
},error=>{
    return Promise.reject(error);
})

axios.interceptors.response.use(response=>{
    let result = response.data;
    return response;
},error=>{
    return Promise.reject(error)
})


export default axios