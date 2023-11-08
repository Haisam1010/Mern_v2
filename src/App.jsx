/* eslint-disable no-unused-vars */
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeLayout  from './pages/HomeLayout'
import Delete from './pages/Delete'
import Register from './pages/Register'
import Login  from './pages/Login'
import Landing  from './pages/Landing'
import Error from './pages/Error'
import Stats from './pages/Stats'
import Dashboard from './pages/Dashboard'
import Addjob from './pages/Addjob'
import Alljob from './pages/Alljob'
import Profile from './pages/Profile'
import Admin from './pages/Admin'

const defaultDarkTheme = () => {
  const isDarkTheme = localStorage.getItem('darktheme') === 'true'
  document.body.classList.toggle('dark-theme',isDarkTheme)
  return isDarkTheme
}


const router = createBrowserRouter([
  {
  path: '/', 
  element:<HomeLayout />,
  errorElement: <Error />,
  children:[
    {
      index:true,
      element:<Landing />
    },
    {
      path:'/delete',
      element: <Delete />
    },
    {
      path:'/register',
      element:<Register />
    },
    {
      path:'/login',
      element: <Login />
    },
    {
      path:'/error',
      element: <Error />
    },
    {
      path:'/dashboard',
      element: <Dashboard />,
      children:[
        {
          index: true,
          element: <Addjob />
        },
        {
          path:'stats',
          element: <Stats />
        },
        {
          path:'all-job',
          element: <Alljob />
        },
        {
          path:'profile',
          element: <Profile />
        },
        {
          path:'admin',
          element: <Admin/>
        },

       
      
      ]
    }
  ]
  },
 

])


const App = () => {
  return (
   <RouterProvider router={router}/>
  )
}

export default App
