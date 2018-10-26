// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import VueFormWizard from 'vue-form-wizard'
import VeeValidate from 'vee-validate';
import Vuelidate from 'vuelidate';
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
import VueGoodTablePlugin from 'vue-good-table';
import VueElementLoading from 'vue-element-loading'

// router setup
import routes from './routes/routes'
import {router } from './_helpers';
import { store } from './_store';

// Plugins
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import Notifications from './components/NotificationPlugin'

// MaterialDashboard plugin
import MaterialDashboard from './material-dashboard'


import Chartist from 'chartist'
import Interceptors from './_helpers/interceptors';
Interceptors()


// configure router

Vue.use(VueFormWizard);
Vue.use(MaterialDashboard)
Vue.use(GlobalComponents)
Vue.use(GlobalDirectives)
Vue.use(Notifications)
Vue.use(VeeValidate)
Vue.use(Vuelidate)
Vue.use(VueGoodTablePlugin)
Vue.use(VueMoment, {
  moment,
})
Vue.component('VueElementLoading', VueElementLoading)  


// global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
  get () {
    return this.$root.Chartist
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  data: {
    Chartist: Chartist
  }
})
