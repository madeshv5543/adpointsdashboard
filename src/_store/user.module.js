import { userService } from '../_services'
export const user= {
    namespaced:true,
    state:{
        user:null
    },
    actions: {
        getuser({dispatch, commit}) {
            console.log("get user details")
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
                    dispatch('alert/error', 'Something Went wrong, Please try after sometime.', {root: true});
                }
            )
        }
    },
    mutations: {
        userDetails(state, data) {
            state.user = data
        } 
    }
}