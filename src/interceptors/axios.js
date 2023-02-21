import axios from "axios"

export const AxiosInterceptors = () => { 
    axios.interceptors.request.use((request)=> {
        console.log('interceptors.request : request', request);
        return request;
    });
}