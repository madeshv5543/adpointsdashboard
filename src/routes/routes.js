import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'

import Dashboard from '@/pages/Dashboard.vue'
import UserProfile from '@/pages/UserProfile.vue'
import TableList from '@/pages/TableList.vue'
import AddCampaign from '@/pages/AddCampaign.vue'
import Icons from '@/pages/Icons.vue'
import Maps from '@/pages/Maps.vue'
import Transactions from '@/pages/Transactions.vue'
import RecepientList from '@/pages/RecepientList.vue'
import UpgradeToPRO from '@/pages/UpgradeToPRO.vue'
import Signup from '@/pages/Signup.vue'
import Login from '@/pages/Login.vue'
import viewCampaign from '@/pages/viewCampaign.vue'
import sponser from '@/pages/sponser.vue'
import transfer from '@/pages/transfer.vue'
import campaigners from '@/pages/Campaigners.vue'
import pagination from '@/pages/pagination.vue'

const routes = [{
    path: '/',
    component: DashboardLayout,
    redirect: '/login',
    children: [{
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'user',
        name: 'User Profile',
        component: UserProfile
      },
      {
        path: 'table',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'addcampaign',
        name: 'AddCampaign',
        component: AddCampaign
      },
      {
        path: 'recepientlist',
        name: 'RecepientList',
        component: RecepientList
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: '/transactions',
        name: 'Transactions',
        component: Transactions
      },
      {
        path: '/viewcampaign',
        name: 'viewCampaign',
        component: viewCampaign
      },
      {
        path: '/pagination',
        name: 'pagination',
        component: pagination
      },
      {
        path: '/sponser',
        name: 'sponser',
        component: sponser
      },
      {
        path: '/transfer',
        name: 'transfer',
        component: transfer
      },
      {
        path: '/campaigners',
        name: 'campaigners',
        component: campaigners
      },
      {
        path: 'maps',
        name: 'Maps',
        meta: {
          hideFooter: true
        },
        component: Maps

      },
      
      
    ]
  },
  {
    path: '/signup',
    component: Signup
  },
  {
    path: '/login',
    component: Login
  },
  
]

export default routes
