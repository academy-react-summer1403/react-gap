import { createBrowserRouter, 
  RouterProvider } 
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
      path:'/',
      element:<Layout/>,
      children:[
         {
          path:'/',
          element:<Landing/>,
         
        },
       
       ],},

      {
          path:'/Login',
          element:<Login/>,
        
<<<<<<< HEAD
        },
        {
          path:'/cours',
          element:<Cours/>,
        
        },

       

       
=======
      },
       {
          path:'/Error',
          element:<Error404/>,
>>>>>>> 9ac2ca6c2addf15da1eaf8cbbe9570f2a9650b07
        
        }


  ])
 
  return(
    <div>
      <RouterProvider router={Routers}/>
    </div>

  )

  
}

export default index;
  