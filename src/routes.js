import React from 'react'
import AddBlog from './views/blog/AddBlog'
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/addblog', name: 'Add Blog', element: AddBlog },
]
export default routes
