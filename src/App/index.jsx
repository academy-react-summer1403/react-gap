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
import Cours from '../screens/Landing/cours/cours';


const index = () => {

  const Routers = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Landing />,
          errorElement:<Error404/>

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


}

export default index;
