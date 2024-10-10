import {
  createBrowserRouter,
  RouterProvider
}
  from 'react-router-dom';


import './App.css'
import React from 'react'
import Error404 from '../component/Error404/Error404';
import Layout from '../component/Layout/Layout';
import Landing from '../component/LandingHolder/Landing';
import Login from '../component/LoginForm/Login';
<<<<<<< HEAD
import LoginSystem from '../component/LoginSystem/LoginSystem';
import Register from '../Register/Register';
=======
import Cours from '../screens/Landing/cours/cours';
>>>>>>> develope


const index = () => {

<<<<<<< HEAD
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
=======
  const Routers = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
         {
          path:'/',
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
          path: '/cours',
          element: <Cours />,
    
        },

      ],
    },

    {
      path: '/Login',
      element: <Login />,
      errorElement:<Error404/>
    },



    {
      path: '/Error',
      element: <Error404 />,

    },


  ])

  return (
    <div>
      <RouterProvider router={Routers} />
    </div>

  )


>>>>>>> develope
}

export default index;
