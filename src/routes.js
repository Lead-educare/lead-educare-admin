import React from 'react'
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const AddBlog = React.lazy(() => import('./views/blog/AddBlog'))
const Teacher = React.lazy(() => import('./views/teacher'))
const TeacherDetails = React.lazy(() => import('./views/teacher/TeacherDetails'))
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/addblog', name: 'Add Blog', element: AddBlog },
  { path: '/teacher', name: 'Add Teacher', element: Teacher },
  { path: '/teacherdetails', name: 'Teacher Details', element: TeacherDetails },
]
export default routes
