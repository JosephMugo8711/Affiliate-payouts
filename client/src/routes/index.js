
import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Leads = lazy(() => import('../pages/protected/Leads'))
const Integration = lazy(() => import('../pages/protected/Integration'))
const Calendar = lazy(() => import('../pages/protected/Calendar'))
const Transactions = lazy(() => import('../pages/protected/Transactions'))


const routes = [
  {
    path: '/dashboard', 
    component: Dashboard, 
  },
  {
    path: '/leads',
    component: Leads,
  },
  {
    path: '/calendar',
    component: Calendar,
  },
  {
    path: '/transactions',
    component: Transactions,
  },
  {
    path: '/integration',
    component: Integration,
  }
]

export default routes
