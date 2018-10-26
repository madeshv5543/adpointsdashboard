import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

import { alert } from './alert.module';
import { authentication } from './auth.module';
import { user } from './user.module';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count:0
    },
    modules: {
        alert,
        authentication,
        user
    },
    plugins: [createPersistedState({
        storage: {
          getItem: key => Cookies.get(key),
          setItem: (key, state) => {
            console.log("value", JSON.parse(state))
            Cookies.set(key, state, { expires: 3, secure: false })
          }
    ,
          removeItem: key => Cookies.remove(key)
        }
      })],
})