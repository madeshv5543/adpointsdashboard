import { authHeader } from '../_helpers';
import axios from 'axios';
const API_URL ="http://18.136.119.81:3000/api";
export const userService = {
    getUser,
    updateUser,
    addCampaign,
    getcampainerCampaigns,
    getpendingCampaign,
    getCampaignDetails,
    sponserCampaign,
    getActiveCampaigns,
    activeCampaignTotal,
    getBalance,
    getMyCampaigns,
    updateCampaign,
    getCampainerCampaignDetails,
    addeventToCampaign,
    transfer,
    getcountries
}

function getUser () {
    const header = { "headers":authHeader()}
    return axios.get(`${API_URL}/user`,header).then( res => res.data)
}

function updateUser(data) {
    const header = {
        "headers":authHeader(),
        'Content-Type': 'multipart/form-data'
    }
    return axios.post(`${API_URL}/edituser`, data, header).then( res => res.data)
}

function addCampaign(data) {
    const header = {
        "headers":authHeader(),
        'Content-Type': 'multipart/form-data'
    }
    return axios.post(`${API_URL}/addCampaign`, data, header).then(res => res.data)
}

function getcampainerCampaigns() {
    const header = {
        "headers":authHeader()
    }
    return axios.get(`${API_URL}/sponseredCampaign`, header).then(res => res.data)
}

function getpendingCampaign() {
    const header= {
        "headers": authHeader()
    }
    return axios.get(`${API_URL}/getPendingCamapigns`, header).then(res => res.data)
}

function getCampaignDetails(id) {
    console.log("id",id)
    const header = {
        "headers": authHeader()
    }
    return axios.get(`${API_URL}/campaigndetails/${id}`, header).then(res => res.data)
}

function getCampainerCampaignDetails(id) {
    const header = {
        "headers": authHeader()
    }
    return axios.get(`${API_URL}/usercampaigndetails/${id}`, header).then(res => res.data)
}

function sponserCampaign({id, activebalance}) {
    const header = {
        "headers": authHeader()
    }
    return axios.post(`${API_URL}/sponsercampaign/${id}`,{activeTotal: activebalance}, header).then(res => res.data)
}

function getActiveCampaigns() {
    const header = {
        "headers": authHeader()
    }
    return axios.get(`${API_URL}/sponserActiveCampaign`, header).then(res => res.data)
}


function activeCampaignTotal() {
    const header = {
        "headers": authHeader()
    }
    return axios.get(`${API_URL}/sponserDashboard`, header).then( res => res.data)
}

function getBalance() {
    const header= {
        "headers": authHeader()
    }
    return axios.get(`${API_URL}/balance`, header).then(res =>  res.data)
}

function getMyCampaigns() {
    const header = {
        "headers": authHeader()
    }
    return axios.get(`${API_URL}/mycampaigns`, header).then(res =>  res.data)
}

function updateCampaign(data, id) {
    const header = {
        "headers": authHeader(),
        'Content-Type': 'multipart/form-data'
    }
    return axios.post(`${API_URL}/updateCampaign/${id}`, data, header).then( res => res.data)
}

function addeventToCampaign(data) {
    const header = {
        "headers": authHeader(),
        'Content-Type': 'multipart/form-data'
    }
    return axios.post(`${API_URL}/addevent`, data, header).then( res => res.data)
}

function transfer(data) {
    const header = {
        "headers": authHeader()
    }
    return axios.post(`${API_URL}/transfer`, data, header).then( res => res.data)
}

function getcountries() {
    return axios.get('https://restcountries.eu/rest/v1/all').then(res => res.data)
}