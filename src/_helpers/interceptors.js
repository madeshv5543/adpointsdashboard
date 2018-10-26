import axios from 'axios'
import toast from './toast'
import {router } from './index';

function errorResponseHandler(error) {
    // check for errorHandle config
    if( error.config.hasOwnProperty('errorHandle') && error.config.errorHandle === false ) {
        return Promise.reject(error);
    }

    // // if has response show the error 
    if (error.response) {
        if(error.response.status == 403) {
            localStorage.clear();
            router.push({path:'/login'})
           return Promise.resolve(
               error.response
            )
        }else{
            return Promise.reject(error)
        }
    }
}

// apply interceptor on response
function setupInterceptor() {
    axios.interceptors.response.use(
        response => response,
        errorResponseHandler
     );
}


export default setupInterceptor;