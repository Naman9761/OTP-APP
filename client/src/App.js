import React from 'react'
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/register';
import Profile from './components/profile';
import Recovery from './components/recovery';
import Reset from './components/reset';
import PageNotFound from './components/PageNotFound';


import{createBrowserRouter,RouterProvider} from 'react-router-dom';;


const router=createBrowserRouter([
    {
        path:'/',
        element:<Username></Username>
    },
    {
        path:'/register',
        element:<Register> </Register>
    },
    {
      path:'/Password',
      element:<Password> </Password>
    },
    {
      path:'/profile',
      element:<Profile></Profile>
    },
    {
      path:'/recovery',
      element:<Recovery></Recovery>
    },
    {
      path:'/reset',
      element:<Reset></Reset>
    },
    {
      path:'*',
      element:<PageNotFound></PageNotFound>
    },



])

export default function App() {
  return (
    <main>
       <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
