import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
import CalendarDaysIcon from '@heroicons/react/24/outline/CalendarDaysIcon'
import BoltIcon from '@heroicons/react/24/outline/BoltIcon'
import CurrencyDollarIcon from '@heroicons/react/24/outline/CurrencyDollarIcon'
import InboxArrowDownIcon from '@heroicons/react/24/outline/InboxArrowDownIcon'


const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [

  {
    path: '/app/dashboard',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'Dashboard',
  },
  {
    path: '/app/leads', 
    icon: <InboxArrowDownIcon className={iconClasses}/>, 
    name: 'Leads', 
  },
  {
    path: '/app/transactions', 
    icon: <CurrencyDollarIcon className={iconClasses}/>, 
    name: 'Transactions', 
  },
  {
    path: '/app/integration', 
    icon: <BoltIcon className={iconClasses}/>, 
    name: 'Integration', 
  },
  {
    path: '/app/calendar', 
    icon: <CalendarDaysIcon className={iconClasses}/>,
    name: 'Calendar', 
  },

  
]

export default routes


