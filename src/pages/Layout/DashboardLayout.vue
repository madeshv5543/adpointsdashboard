<template>
    <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}">
        <notifications></notifications>

        <side-bar>
            <mobile-menu slot="content"></mobile-menu>
            <sidebar-link to="/dashboard">
                <md-icon>dashboard</md-icon>
                <p>Dashboard</p>
            </sidebar-link>
            <sidebar-link to="/user">
                <md-icon>person</md-icon>
                <p>My Account</p>
            </sidebar-link>
            <sidebar-link v-if="usertype.toLowerCase() === 'campaigner'.toLowerCase()" to="/addcampaign">
                <md-icon>add</md-icon>
                <p>Add Campaign</p>
            </sidebar-link>
            <sidebar-link v-if="usertype.toLowerCase() === 'Sponser'.toLowerCase()" to="/recepientlist">
                <md-icon>library_books</md-icon>
                <p>Campaigns List</p>
            </sidebar-link>
            <sidebar-link v-if="usertype.toLowerCase() === 'Sponser'.toLowerCase()" to="/campaigners">
                <md-icon>library_books</md-icon>
                <p>Sponsered Campaigns</p>
            </sidebar-link>
            <sidebar-link v-if="usertype.toLowerCase() === 'campaigner'.toLowerCase()" to="/myCampaigns">
                <md-icon>library_books</md-icon>
                <p>My Campaigns</p>
            </sidebar-link>
        </side-bar>

        <div class="main-panel">
            <top-navbar></top-navbar>

            <dashboard-content>

            </dashboard-content>

            <content-footer v-if="!$route.meta.hideFooter"></content-footer>
        </div>
    </div>
</template>
<style lang="scss">

</style>
<script>
    import TopNavbar from './TopNavbar.vue'
    import ContentFooter from './ContentFooter.vue'
    import DashboardContent from './Content.vue'
    import MobileMenu from '@/pages/Layout/MobileMenu.vue'

    export default {
        components: {
            TopNavbar,
            DashboardContent,
            ContentFooter,
            MobileMenu
        },
        computed: {
            usertype() {
                return this.$store.state.user.usertype;
            }
        },
        created: function () {
            const {
                dispatch
            } = this.$store;
            let user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                dispatch('user/usertype', user.accountType)
            }
        }
    }

</script>
