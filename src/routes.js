import React from 'react'
import AddBlog from './views/blog/AddBlog'
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Teacher = React.lazy(() => import('./views/teacher'))
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/addblog', name: 'Add Blog', element: AddBlog },
  { path: '/teacher', name: 'Add Teacher', element: Teacher },
]
export default routes
