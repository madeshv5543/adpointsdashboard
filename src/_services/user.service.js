import { authHeader } from '../_helpers';
import axios from 'axios';
const API_URL ="http://localhost:3200/api";
export const userService = {
    getUser
}

function getUser () {
    const header = { "headers":authHeader()}
    return axios.get(`${API_URL}/user`,header).then( res => res.data)
}