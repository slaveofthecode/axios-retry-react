import axiosClient from ".";

axiosClient.interceptors.request.use(function (config) {
    // Do something before request is sent  
    console.log('interceptors.request : config', config);
    return config;
    }, function (error) {
    // Do something with request error
    console.log('interceptors.request : error', error);
    return Promise.reject(error);
});

let countRetry = 0;
const maxRetry = 3;
// Add a response interceptor
axiosClient.interceptors.response.use(
    function (response) {
        // Do something with response data
        console.log('interceptors.response : response', response);
        return response;
    }, 
    function (error) {
        // debugger; 
        // Simulate to be a 401 error
        const { status } = error.response;
        if (status === 404) {
            console.log('interceptors.response : error 401', error);
            const { config } = error;            
            console.log({ countRetry, maxRetry, config });            
            if (countRetry < maxRetry) {
                countRetry++;                                
                config.headers.Authorization = `Bearer ${getToken()}`;
                return axiosClient(config);
            }
        }
        return Promise.reject(error);
        // 1460,99 naranja 
    }
);

function getToken() {
    return Math.random().toString(36).slice(2);
}