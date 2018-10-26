import Vue from 'vue';
import Router from 'vue-router';
import routes from '../routes/routes';


Vue.use(Router);

export const router = new Router({
    mode:'history',
    routes: routes
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/login','/signup'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = JSON.parse(localStorage.getItem('user'));

    if(authRequired && !loggedIn) {
        return next('login')
    }

    if(!authRequired && loggedIn) {
        return next('dashboard')
    }

    if(to.meta.canseesponser) {
        if(loggedIn.accountType === 'Sponser') {
            return next()
        }else {
            return next('dashboard')
        }
    }

    if(to.meta.canseecampaigner) {
        if(loggedIn.accountType === 'campaigner') {
            return next()
        }else {
            return next('dashboard')
        }
    }

    next()

})