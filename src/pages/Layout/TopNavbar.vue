<template>
    <md-toolbar md-elevation="0" class="md-transparent">
        <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
                <!-- <h3 class="md-title">{{$route.name}}</h3> -->
            </div>
            <div class="md-toolbar-section-end">
                <md-button class="md-just-icon md-simple md-toolbar-toggle" :class="{toggled: $sidebar.showSidebar}"
                    @click="toggleSidebar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </md-button>
                        <md-dialog :md-active.sync="showQr" >
                       <md-dialog-title>QR code</md-dialog-title>
                       <div class="qrcode">
                          <qrcode  :value="user.address" :options="{ size: 200 }"></qrcode>
                          <br>
                          <p class="qr_addr">
                           {{user.address}}</p>
                       </div>
                        </md-dialog>
                <div class="md-collapse">
                    <div class="md-autocomplete">
                        <md-autocomplete class="search" v-model="selectedEmployee" :md-options="employees">
                            <label>Search...</label>
                        </md-autocomplete>
                    </div>
                    <md-list>
                        <md-list-item>
                            {{user.address}}
                        </md-list-item>
                        <md-list-item @click="showQrModel">
                             <i class="material-icons">border_clear</i>
                            <!-- <qrcode  value="Hello, World!" :options="{ size: 20 }"></qrcode> -->
                             <p class="hidden-lg hidden-md">QR code</p>
                        </md-list-item>
                        <md-list-item to="/">
                            <i class="material-icons">dashboard</i>
                            <p class="hidden-lg hidden-md">Dashboard</p>
                        </md-list-item>

                        <!-- <md-list-item to="/notifications" class="dropdown">
                            <drop-down>
                                <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="material-icons">notifications</i>
                                    <span class="notification">5</span>
                                    <p class="hidden-lg hidden-md">Notifications</p>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-right">
                                    <li><a href="#">Mike John responded to your email</a></li>
                                    <li><a href="#">You have 5 new tasks</a></li>
                                    <li><a href="#">You're now friend with Andrew</a></li>
                                    <li><a href="#">Another Notification</a></li>
                                    <li><a href="#">Another One</a></li>
                                </ul>
                            </drop-down>
                        </md-list-item> -->

                        <md-list-item to="/user">
                            <i class="material-icons">person</i>
                            <p class="hidden-lg hidden-md">Profile</p>
                        </md-list-item>
                        <md-list-item @click="logOut()">
                            <i class="material-icons">logout</i>
                            <p class="hidden-lg hidden-md">Log Out</p>
                        </md-list-item>
                    </md-list>
                </div>
            </div>
        </div>

    </md-toolbar>
</template>

<script>
    export default {
        data() {
            return {
                selectedEmployee: null,
                employees: [
                    'Jim Halpert',
                    'Dwight Schrute',
                    'Michael Scott',
                    'Pam Beesly',
                    'Angela Martin',
                    'Kelly Kapoor',
                    'Ryan Howard',
                    'Kevin Malone'
                ],
                user:{},
                showQr:false
            }
        },
        methods: {
            toggleSidebar() {
                this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
            },
            showQrModel () {
                this.showQr =true
                console.log("model open")
            },
            logOut() {
              const { dispatch } = this.$store
              dispatch('authentication/logout', {root: true})
            }
        },
        created: function() {
            this.user = JSON.parse(localStorage.getItem('user'));
        }
    }

</script>

<style lang="css">
.qrcode {
    text-align: center
}
.qr_addr{
    padding: 15px
}
</style>
