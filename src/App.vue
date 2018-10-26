<template>
  <transition name="slide-fade" >
    <router-view></router-view>
  </transition>
</template>
<script>
    import 'vue-good-table/dist/vue-good-table.css'

    export default {
        watch: {
            $route(to, from) {
                this.$store.dispatch('alert/clear');
            }
        }
    }

</script>
<style>
    .vgt-table {
        border: none !important
    }

    .vgt-table thead th {
        background: white;
        color: #ff9800 !important;
        font-weight: 400;
        border: none !important
    }

    .vgt-table tr td {
        border: none !important;
        border-top: 1px solid !important;
        border-top-color: rgba(0, 0, 0, 0.06) !important;
    }

    .vgt-table tr:hover {
        background: #f5f5f5
    }

    .vgt-wrap__footer {
        background: none !important;
        border: none
    }

    .vgt-table .vgt-global-searchs {
        background: none !important;
        border: none !important
    }

    .actionbtn {
        margin: 0px !important;
    }

    .actionbtn .md-ripple {
        clear: both;
        padding: 7px 10px !important;
    }
    .slide-fade-enter-active {
    transition: all .2s ease;
    }
    .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
    }
    .md-list.md-theme-default .md-selected .md-list-item-content, .md-list.md-theme-default .router-link-exact-active .md-list-item-content {
    background: #a09696;
    color: #ffffff !important;
}

</style>
