import { authHeader } from '../_helpers';
import axios from 'axios';
import { params} from '../_helpers';
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
    return axios.get(`${params.APIURL}/user`,header).then( res => res.data)
}

function updateUser(data) {
    const header = {
        "headers":authHeader(),
        'Content-Type': 'multipart/form-data'
    }
    return axios.post(`${params.APIURL}/edituser`, data, header).then( res => res.data)
}

function addCampaign(data) {
    const header = {
        "headers":authHeader(),
        'Content-Type': 'multipart/form-data'
    }
    return axios.post(`${params.APIURL}/addCampaign`, data, header).then(res => res.data)
}

function getcampainerCampaigns() {
    const header = {
        "headers":authHeader()
    }
    return axios.get(`${params.APIURL}/sponseredCampaign`, header).then(res => res.data)
}

function getpendingCampaign() {
    const header= {
        "headers": authHeader()
    }
    return axios.get(`${params.APIURL}/getPendingCamapigns`, header).then(res => res.data)
}

function getCampaignDetails(id) {
    console.log("id",id)
    const header = {
        "headers": authHeader()
    }
    return axios.get(`${params.APIURL}/campaigndetails/${id}`, header).then(res => res.data)
}

function getCampainerCampaignDetails(id) {
    const header = {
        "headers": authHeader()
    }
    return axios.get(`${params.APIURL}/usercampaigndetails/${id}`, header).then(res => res.data)
}

function sponserCampaign({id, activebalance}) {
    const header = {
        "headers": authHeader()
    }
    return axios.post(`${params.APIURL}/sponsercampaign/${id}`,{activeTotal: activebalance}, header).then(res => res.data)
}

function getActiveCampaigns() {
    const header = {
        "headers": authHeader()
    }
    return axios.get(`${params.APIURL}/sponserActiveCampaign`, header).then(res => res.data)
}


function activeCampaignTotal() {
    const header = {
        "headers": authHeader()
    }
    return axios.get(`${params.APIURL}/sponserDashboard`, header).then( res => res.data)
}

function getBalance() {
    const header= {
        "headers": authHeader()
    }
    return axios.get(`${params.APIURL}/balance`, header).then(res =>  res.data)
}

function getMyCampaigns() {
    const header = {
        "headers": authHeader()
    }
    return axios.get(`${params.APIURL}/mycampaigns`, header).then(res =>  res.data)
}

function updateCampaign(data, id) {
    const header = {
        "headers": authHeader(),
        'Content-Type': 'multipart/form-data'
    }
    return axios.post(`${params.APIURL}/updateCampaign/${id}`, data, header).then( res => res.data)
}

function addeventToCampaign(data) {
    const header = {
        "headers": authHeader(),
        'Content-Type': 'multipart/form-data'
    }
    return axios.post(`${params.APIURL}/addevent`, data, header).then( res => res.data)
}

function transfer(data) {
    const header = {
        "headers": authHeader()
    }
    return axios.post(`${params.APIURL}/transfer`, data, header).then( res => res.data)
}

function getcountries() {
    return axios.get(params.COUNTRYURL).then(res => res.data)
}