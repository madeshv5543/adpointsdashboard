import { authHeader, router } from '../_helpers';
import axios from 'axios';
import { params} from '../_helpers';

export const authService = {
    login,
    signUp,
    logout,
    saveToken
}

function login (data) {
    let self = this;
    const URL = `${params.APIURL}/login`
    return axios.post(URL, data).then( res => res.data)
}

function signUp ( data) {
    const URL = `${params.APIURL}/signUp`;
    return axios.post(URL, data).then( res => res.data)
}

function logout() {
     localStorage.removeItem('user');
     localStorage.removeItem('token');
     router.push({name:'Login'})
}

function saveToken(data) {
    localStorage.setItem('user', JSON.stringify(data.data))
    localStorage.setItem('token', data.token)
}