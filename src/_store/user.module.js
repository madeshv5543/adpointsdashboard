import { userService, authService } from '../_services'
const initialstate = {
    user:null,
    campaigns:[],
    allcampaigns: [],
    selectedCampaign:null,
    campaignImgs:[],
    mycampaigns:[],
    usertype:null,
    ActiveCampaigns:[],
    activeCampaigntotal:0,
    balance:0,
    loading:false,
    country:[],
    deleteimagArray:[],
    currentStatus:0
}
export const user = {
    namespaced: true,
    state:{
       ...initialstate
    },
    actions: {
        getuser({dispatch, commit}) {
            userService.getUser()
            .then(
                res => {
                    if(res.status != 200) {
                        dispatch('alert/error', res.message, {root: true});
                    }else{
                        console.log("res",res.data)
                        dispatch('alert/clear', '', {root: true})
                        commit('userDetails', res.data)
                    }
                },
                err => {
                    console.log("error", err)
                    dispatch('alert/error', 'Something Went wrong, Please try after sometime.', {root: true});
                }
            )
        },
        updateuser({dispatch, commit}, data) {
            commit('setloading', true)
            userService.updateUser(data)
            .then (
                res => {
                    commit('setloading', false)
                    if(res.status != 200) {
                        dispatch('alert/error', res.message, {root: true});
                    }else{
                        dispatch('alert/clear', '', {root: true})
                        dispatch('alert/success', res.message, {root: true})
                    }
                },
                err => {
                    commit('setloading', false)
                    dispatch('alert/error', 'Something Went wrong, Please try after sometime.', {root: true});
                }
            )
        },
        addcampaign({dispatch, commit}, data) {
            commit('setloading', true)
            userService.addCampaign(data)
            .then(
                res => {
                    commit('setloading', false)
                    if(res.status != 200) {
                        dispatch('alert/error', res.message, {root: true});
                    }else{
                        console.log("success", res)
                        dispatch('alert/clear', '', {root: true})
                        dispatch('alert/success', res.message, {root: true})
                    }
                },
                err => {
                    commit('setloading', false)
                    dispatch('alert/error', 'Something Went wrong, Please try after sometime.', {root: true});
                }
            )
        },
        getCampaignlist({dispatch, commit}) {
            userService.getcampainerCampaigns()
            .then(
                res => {
                    commit('campaigns', res.data)
                },
                err => {
                    commit('campaigns',[])
                    dispatch('alert/error', 'Something Went wrong, Please try after sometime.', {root: true});
                }
            )
        },
        getMyCampaignlist({dispatch, commit}) {
            userService.getMyCampaigns()
            .then(
                res => {
                    commit('mycampaigns', res.data)
                },
                err => {
                    commit('mycampaigns',[])
                    dispatch('alert/error', 'Something Went wrong, Please try after sometime.', {root: true});
                }
            )
        },
        getAllcampaign({dispatch, commit}) {
            userService.getpendingCampaign()
            .then(
                res => {
                    commit('pendingCampaigns', res.data)
                },
                err => {
                    dispatch('alert/error', 'Something Went wrong, Please try after sometime.', {root: true});
                    commit('pendingCampaigns', [])
                }
            )
        },
        getCampaignDetails({dispatch, commit}, data) {
            userService.getCampaignDetails(data)
            .then(
                res => {
                    if(res.status != 200) {
                        dispatch('alert/error', res.message, {root: true});
                    }else {
                        dispatch('alert/success', '', {root: true});
                        commit('selectcampaing', res.data)
                    }
                },
                err => {
                    dispatch('alert/error', 'Something Went wrong, Please try after sometime.', {root: true});
                    commit('selectcampaing', null)
                }
            )
        },
        getCampainerCampaignDetails({dispatch, commit }, data) {
            userService.getCampainerCampaignDetails(data)
            .then(
                res => {
                    if(res.status != 200) {
                        dispatch('alert/error', res.message, {root: true});
                    }else{
                        dispatch('alert/success', '', {root: true});
                        commit('selectcampaing', res.data)
                    }
                },
                err => {
                    dispatch('alert/error', 'Something Went wrong, Please try after sometime.', {root: true});
                    commit('selectcampaing', null)
                }
            )
        },
        addcampaignsponser({dispatch,commit}, data) {
            commit('setloading', true)
            userService.sponserCampaign(data)
            .then (
                res => {
                    commit('setloading', false)
                    if(res.status != 200) {
                        dispatch('alert/error', res.message, {root: true});
                    }else {
                        dispatch('alert/clear', '', {root: true})
                        dispatch('alert/success', res.message, {root: true})
                        dispatch('getCampaignDetails', data.id)
                        dispatch('alert/success', 'Campaign added to your sponser list', {root: true})
                    }
                },
                err => {
                    commit('setloading', false)
                    dispatch('alert/error', 'Something Went wrong, Please try after sometime.', {root: true});
                }
            )
        },
        activecampaigns({commit, dispatch}) {
            userService.getActiveCampaigns()
            .then(
                res => {
                    if(res.status != 200) {
                        dispatch('alert/error', res.message, {root: true});
                    }else{
                        dispatch('alert/clear', '', {root: true})
                        commit('activecampaigns', res.data)
                    }
                },
                err => {
                    commit('activecampaigns', [])
                }
            )
        },
        activecampaigntotal({dispatch, commit}) {
            userService.activeCampaignTotal()
            .then(
                 res => {
                     if(res.status != 200) {
                         commit('activeCampaigntotal', 0)
                     }else{
                         commit('activeCampaigntotal', res.data)
                     }
                 },
                 err => {
                    commit('activeCampaigntotal', 0)
                 }
            )
        },
        balance({dispatch, commit} ){
            userService.getBalance()
            .then(
                 res => {
                     if(res.status != 200) {
                         commit('balance', 0)
                     }else {
                         commit('balance', res.data)
                     }
                 },
                 err => {
                    commit('balance', 0)
                 }
            )
        },
        usertype({commit}, data) {
            console.log("usertype", data)
            commit('usertype', data)
        },
        clear({commit}) {
            commit('clearstate')
        },
        updatecampaign({dispatch, commit}, {data, id}) {
            commit('setloading', true)
            userService.updateCampaign(data, id)
            .then(
                res => {
                    commit('setloading', false)
                    if(res.status != 200) {
                        dispatch('alert/error', res.message, {root: true});
                    }else{
                        dispatch('alert/clear', '', {root: true})
                        dispatch('alert/success', 'Campaign details updated successfully', {root: true})
                        commit('selectcampaing', res.data)
                    }
                },
                err => {
                    commit('setloading', false)
                    dispatch('alert/error', 'Something Went wrong, Please try after sometime.', {root: true});
                }
            )
        },
        addevent({dispatch, commit}, {formdata, id}) {
            commit('setloading', true)
            userService.addeventToCampaign(formdata)
            .then(
                res => {
                    commit('setloading', false)
                    if(res.status != 200) {
                        dispatch('alert/error', res.message, {root: true});
                    }else {
                        dispatch('alert/clear', '', {root: true})
                        dispatch('alert/success', 'Event added  successfully', {root: true});
                        dispatch('getCampainerCampaignDetails', id)
                    }
                },
                err => {
                    commit('setloading', false)
                    dispatch('alert/error', 'Something Went wrong, Please try after sometime.', {root: true});
                }
            )
        },
        transfer({dispatch, commit}, data) {
            commit('setloading', true)
            userService.transfer(data)
            .then(
                res => {
                    commit('setloading', false)
                    if(res.status != 200) {
                        dispatch('alert/error', res.message, {root: true});
                    }else {
                        dispatch('alert/clear', '', {root: true})
                        dispatch('alert/success', 'Fund Transfered Successfully.', {root: true});
                        dispatch('getCampainerCampaignDetails', data.campaign)
                    }
                },
                err => {
                    commit('setloading', false)
                    dispatch('alert/error', 'Something Went wrong, Please try after sometime.', {root: true});
                }
            )
        },
        getCountry({commit}) {
            userService.getcountries()
            .then(
                res => {
                    console.log("res",res)
                    commit('setCountry', res)
                },
                err => {
                    dispatch('alert/error', 'Something Went wrong, Please try after sometime.', {root: true});
                }
            )
        },
        addcampaignimg( {commit, dispatch}, data) {
            userService.addimagesTocampaign(data)
            .then(
                res => {
                    commit('setloading', false)
                    if(res.status != 200) {
                        commit('uploadstatus', 3)
                        dispatch('alert/error', res.message, {root: true});
                    }else {
                        commit('uploadstatus', 2)
                        dispatch('alert/clear', '', {root: true})
                        dispatch('alert/success', 'Images uploded successfully.', {root: true});
                        dispatch('getCampainerCampaignDetails', data.id)
                    }
                },
                err => {
                    commit('setloading', false)
                    commit('uploadstatus', 3)
                    dispatch('alert/error', 'Something Went wrong, Please try after sometime.', {root: true});
                }
            )
        },
        deletecamapignimgs( {commit, dispatch}, data) {
            userService.deletecamapignimgs(data)
            .then(
                res => {
                    commit('setloading', false)
                    if(res.status != 200) {
                        dispatch('alert/error', res.message, {root: true});
                    }else {
                        commit('emptydeletarray')
                        dispatch('alert/clear', '', {root: true})
                        dispatch('alert/success', 'Images removed successfully.', {root: true});
                        dispatch('getCampainerCampaignDetails', data.id)
                    }
                },
                err => {
                    commit('setloading', false)
                    dispatch('alert/error', 'Something Went wrong, Please try after sometime.', {root: true});
                }
            )
        }
    },
    mutations: {
        userDetails(state, data) {
            state.user = data
        },
        campaigns(state, data) {
            state.campaigns = data
        },
        pendingCampaigns(state, data) {
            state.allcampaigns = data
        },
        selectcampaing(state, data) {
            state.selectedCampaign = data
        },
        usertype(state, data) {
            state.usertype = data
        },
        clearstate(state) {
            state = initialstate
        },
        activecampaigns(state, data) {
            state.ActiveCampaigns = data
        },
        activeCampaigntotal(state, data) {
            state.activeCampaigntotal = data;
        },
        balance(state, data) {
            state.balance = data
        },
        mycampaigns(state, data) {
            state.mycampaigns = data
        },
        setloading(state, status) {
            state.loading = status
        },
        setCountry(state, data) {
            state.country = data
        },
        uploadstatus(state, data) {
            state.currentStatus = data
        },
        emptydeletarray(state, data = []) {
            state.deleteimagArray = []
        },
        additemDelete(state, data) {
            state.deleteimagArray.push(data)
        }
    }
}