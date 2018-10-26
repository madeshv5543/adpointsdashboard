<template>
    <div class="content">
        <div class="md-layout">
            <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33.33">
                <stats-card data-background-color="green">
                    <template slot="header">
                        <md-icon>store</md-icon>
                    </template>

                    <template slot="content">
                        <p class="category"> Balance</p>
                        <h3 class="title">{{balance}} e-cash</h3>
                    </template>

                    <template slot="footer">
                        <div class="stats">
                            Total balance in network
                        </div>
                    </template>
                </stats-card>
            </div>
            <div v-if="usertype == 'Sponser'" class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33.33">
                <stats-card data-background-color="green">
                    <template slot="header">
                        <md-icon>store</md-icon>
                    </template>

                    <template slot="content">
                        <p class="category">Commited</p>
                        <h3 class="title">{{campaigntotal}} e-cash</h3>
                    </template>

                    <template slot="footer">
                        <div class="stats">
                            Locked sponser balance
                        </div>
                    </template>
                </stats-card>
            </div>
            <div v-if="usertype == 'Sponser'" class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33.33">
                <stats-card data-background-color="green">
                    <template slot="header">
                        <md-icon>money</md-icon>
                    </template>

                    <template slot="content">
                        <p class="category">ledger Balance</p>
                        <h3 class="title">{{balance - campaigntotal}} e-cash</h3>
                    </template>

                    <template slot="footer">
                        <div class="stats">
                            Balance remaining
                        </div>
                    </template>
                </stats-card>
            </div>

            <div v-if="usertype == 'Sponser'" class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                <md-card>
                    <md-card-header data-background-color="orange">
                        <h4 class="title">Transactions</h4>
                        <p class="category"></p>
                    </md-card-header>
                    <md-card-content>
                        <ordered-table table-header-color="orange"></ordered-table>
                    </md-card-content>
                </md-card>
            </div>

            <div  v-if="usertype == 'Sponser'" class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                <md-card>
                    <md-card-header data-background-color="orange">
                        <h4 class="title">Active Campaigns</h4>
                        <p class="category"></p>
                    </md-card-header>
                    <md-card-content>
                        <vue-good-table :columns="columns" :rows="rows" :search-options="searchoption"
                            :pagination-options="paginationOption">
                            <template slot="table-row" slot-scope="props">
                                <span v-if="props.column.field == 'action'">
                                    <md-button @click="viewcampaign(props.row)" class="md-success actionbtn">View</md-button>
                                </span>
                                <span v-else>
                                    {{props.formattedRow[props.column.field]}}
                                </span>
                            </template>
                        </vue-good-table>
                    </md-card-content>
                </md-card>
            </div>

        </div>
    </div>
</template>

<script>
    import {
        StatsCard,
        ChartCard,
        NavTabsCard,
        NavTabsTable,
        OrderedTable
    } from '@/components'

    export default {
        components: {
            StatsCard,
            ChartCard,
            NavTabsCard,
            NavTabsTable,
            OrderedTable
        },
        data() {
            return {
                columns: [{
                        label: 'Title',
                        field: 'title',
                    },
                    {
                        label: 'category',
                        field: 'category'
                    },
                    {
                        label: 'value',
                        field: 'value'
                    },
                    {
                        label: 'place',
                        field: 'place',
                    },
                    {
                        label: 'Start',
                        field: 'startdate',
                        type: 'date',
                        dateOutputFormat: 'MMM Do YYYY',
                    },
                    {
                        label: 'End',
                        field: 'enddate',
                        type: 'date',
                        dateOutputFormat: 'MMM Do YYYY',
                    },
                    {
                        label: 'Action',
                        field: 'action',
                        sortable: false
                    }
                ],
                searchoption: {
                    enabled: true
                },
                paginationOption: {
                    enabled: true
                }
            }

        },
        methods: {
            viewcampaign(row) {
                let self = this;
                self.$router.push({name:'viewCampaign', params: {
                   id:row._id
               }})
            }
        },
        computed: {
            rows() {
                return this.$store.state.user.ActiveCampaigns
            },
            campaigntotal() {
                return this.$store.state.user.activeCampaigntotal
            },
            balance() {
                return this.$store.state.user.balance
            },
            alert() {
                return this.$store.state.alert
            },
            usertype() {
                return this.$store.state.user.usertype
            },
        },
        created: function () {
            const {
                dispatch
            } = this.$store;
            dispatch('user/balance')
            if(this.usertype == 'Sponser') {
            dispatch('user/activecampaigns')
            dispatch('user/activecampaigntotal')
            }
        }
    }

</script>
