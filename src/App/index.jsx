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

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error404 from "../component/Error404/Error404";
import Layout from "../component/Layout/Layout";
import Landing from "../component/LandingHolder/Landing";
import Login from "../component/LoginForm/Login";
import Cours from "../screens/Landing/Courses/LandingCourses";
import News from "../screens/News/News";

const index = () => {


  const Routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/Error",
          element: <Error404 />,
        },
        {
          path: "/Login",
          element: <Login />,
        },
        {
          path: "/courses",
          element: <Cours />,
        },
        {
          path: "/News",
          element: <News />,
        },
      ],
    },

    {
      path: "/Login",
      element: <Login />,
      errorElement: <Error404 />,
    },

    {
      path: "/Error",
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
  ;

  return (
    <div>
      <RouterProvider router={Routers} />
    </div>
  );
};

export default index;
