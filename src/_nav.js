import React from 'react'
import CIcon from '@coreui/icons-react'
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
    name: 'All user',
    to: '/all-user',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
]
export default _nav
