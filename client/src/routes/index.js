import {lazy} from 'react';

const Dashboard = lazy(() => import('../pages/protected/Dashboard'));
const Referral = lazy(() => import('../pages/protected/Referral'));
const Transactions  = lazy(() => import('../pages/protected/Transactions'));
const Settings = lazy(() => import('../pages/protected/Settings'))



 export const routes = [
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/referrals',
        component: Referral
    },
    {
        path: '/transactions',
        component: Transactions
    },
    {
        path: '/settings',
        component: Settings
    }
]