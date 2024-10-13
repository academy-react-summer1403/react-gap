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
import LoginSystem from '../component/LoginSystem/LoginSystem';
import Register from '../Register/Register';
import Cours from '../screens/Landing/cours/cours';
import RegisterStep from '../component/RegisterStep/RegisterStep';
import RegisterStep1 from '../component/RegisterStep1/RegisterStep1';
import RegisterStep2 from '../component/RegisterStep2/RegisterStep2';
import NewPass from '../component/NewPass/NewPass';



const index = () => {


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
    {
      path:'/RegisterStep',
      element:<RegisterStep/>,
    
    },

    {
      path:'/RegisterStep1',
      element:<RegisterStep1/>,
    
    },

    {
      path:'/RegisterStep2',
      element:<RegisterStep2/>,
    
    },
    {
      path:'/NewPass',
      element:<NewPass/>,
    
    },

  ])

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden  border-2 border-red-500'>
      <RouterProvider router={Routers} />
    </div>

  )


}

export default index;
