import { authService } from '../_services';
import { router} from '../_helpers';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? {status: { loggedIn: true}, user} : { status: {}, user: null};

export const authentication = {
    namespaced: true,
    state: {...initialState,
            signstep:1,
            seed:null
            },
    actions: {
        login({ dispatch, commit}, data) {
            const {email, password} = data
            commit('loginRequest', {email});
            authService.login(data)
            .then(
                res => {
                    if(res.status != 200) {
                        commit('loginFailure', res.message);
                        dispatch('alert/error', res.message, {root: true});
                    }else {
                        dispatch('alert/clear', '', {root: true})
                        authService.saveToken(res)
                        commit('loginSuccess', res.data);
                        dispatch('user/usertype', res.data.accountType, {root: true})
                        router.push({name:'Dashboard'});
                    }
                },
                error => {
                    commit('loginFailure', error);
                    dispatch('alert/error', error, {root: true});
                }
             )   
        },
        logout({dispatch, commit}) {
            commit('logout');
            dispatch('user/clear', {root:true});
            dispatch('alert/clear', {root:true})
            authService.logout();
        },
        signup({ dispatch, commit}, data) {
            authService.signUp(data)
            .then(
                res => {
                    if(res.status != 200) {
                        console.log("res",res)
                        commit('loginFailure', res.message);
                        dispatch('alert/error', res.message, {root: true});
                    }else {
                        dispatch('alert/clear', '', {root: true})
                        authService.saveToken(res)
                        dispatch('user/usertype', res.data.accountType, {root: true})
                        commit('loginSuccess', res.data);
                        commit('signupSuccess', res.seed)
                    }
                },
                error => {
                    commit('loginFailure', error);
                    dispatch('alert/error', error, {root: true});
                }
            )
        }
    },
    mutations: {
        loginRequest(state, user) {
            state.status = { loggedIn: true};
            state.user = user;
        },
        loginSuccess(state, user) {
            state.status = { loggedIn: true};
            state.user = user;
        },
        loginFailure(state, user) {
            state.state = {}
            state.user = null
        },
        logout(state) {
            state.status = {};
            state.user = null
            state.signstep =1;
            state.seed = null
        },
        signupSuccess(state, seed) {
            state.signstep = 2;
            state.seed = seed
        }
    }
}