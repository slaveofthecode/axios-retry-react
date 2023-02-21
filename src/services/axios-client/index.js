import axios from 'axios';

const axiosClient = axios.create();

// axiosClient.defaults.baseURL = 'http://localhost:3000/api/v1';
axiosClient.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

//All request will wait 2 seconds before timeout
axiosClient.defaults = {
    timeout: 10000,
    withCredentials: true    
}

// Add a request interceptor


export default axiosClient;


