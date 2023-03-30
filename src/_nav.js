import React from 'react'
import CIcon from '@coreui/icons-react'
import {cilPuzzle, cilSpeedometer,cilSettings} from '@coreui/icons'
import {cilPuzzle, cilSpeedometer,cilUser} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'


const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Blog',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Blog',
        to: '/addblog',
      },
      {
        component: CNavItem,
        name: 'All Blogs',
        to: '/allblog',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Setting',
    to: '/setting',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
 component: CNavItem,
    name: 'All user',
    to: '/all-user',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    }
    {
    component: CNavGroup,
    name: 'Teacher',
    to: '/teacher',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Teacher',
        to: '/teacher',
      },
      {
        component: CNavItem,
        name: 'Summary',
        to: '/summary',
      },
    ],
  },
]
export default _nav
