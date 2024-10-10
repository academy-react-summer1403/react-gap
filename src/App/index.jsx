import { createBrowserRouter, 
  RouterProvider } 
  from 'react-router-dom';


import './App.css'
import React from 'react'
import Error404 from '../component/Error404/Error404';
import Layout from '../component/Layout/Layout';
import Landing from '../component/LandingHolder/Landing';
import Login from '../component/LoginForm/Login';
import LoginSystem from '../component/LoginSystem/LoginSystem';
import Register from '../Register/Register';


const index = () => {

    const Routers = createBrowserRouter([
      {
        path:'/',
        element:<Layout/>,
        children:[
          {
            path:'/landing',
            element:<Landing/>,
          
          },
          {
            path:'/Error',
            element:<Error404/>,
          
          },
          {
            path:'/Login',
            element:<Login/>,
          
          },

          {
            path:'/LoginSystem',
            element:<LoginSystem/>,
          
          },

          {
            path:'/Register',
            element:<Register/>,
          
          },

        
          
        ]
      }
      ])
  
    return(
      <div>

        <RouterProvider router={Routers}/>

      </div>

    )
}

export default index;
  